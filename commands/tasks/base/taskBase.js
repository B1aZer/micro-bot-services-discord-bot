const Discord = require("discord.js");
const axios = require('axios');
const fs = require('fs');

module.exports = class TaskBase {
    constructor(params) {
        Object.assign(this, params);
        this.loggerInfluencer = fs.createWriteStream(`../../../../_utils/out/tasks/${this.id}.log`, {
            flags: 'a'
        });
        //defaults
        this.submitionsAllowed = this.submitionsAllowed || 1;
    }
    async checkIfErr() {
        return false;
    }
    async execute(interaction) {
        const answer = interaction.options.getString('answer');
        // check if answer exists
        const user = (await axios.get(`${process.env.MONGODB_URL}/user`, { params: { userID: interaction.user.id } })).data;
        const hasAnswers = answer && user?.tasks.some(task => task.id === this.id);
        if (hasAnswers) {
            const userAnswers = user.tasks.filter(task => task.id === this.id);
            const sameAnswer = user.tasks.some(task => task.answer === answer);
            if (this.submitionsAllowed === 1) {
                await interaction.reply({ content: 'You\'ve already submitted an answer. Try another task', ephemeral: true });
                return;
            }
            if (this.submitionsAllowed > 1 && userAnswers.length < this.submitionsAllowed && sameAnswer) {
                await interaction.reply({ content: 'You\'ve already submited this answer!', ephemeral: true });
                return;
            }
            if (this.submitionsAllowed > 1 && userAnswers.length >= this.submitionsAllowed) {
                await interaction.reply({ content: 'You\'ve reached maximum number of sumbissions. Try another task', ephemeral: true });
                return;
            }
        }
        // dumb reply
        await interaction.deferReply({ ephemeral: true });
        const embed = new Discord.MessageEmbed()
            .setColor('#00936f')
            .setTitle(this.title)
            .setDescription(this.description)
            .setAuthor({ name: 'GooDeeBot', iconURL: 'https://i.imgur.com/8nB0tI0.jpg' })
            .setTimestamp();
        if (!answer) {
            // show task description
            interaction.editReply({ embeds: [embed] });
            return;
        }
        const errorMsg = await this.checkIfErr(answer, interaction);
        if (errorMsg) {
            interaction.editReply({ content: errorMsg, ephemeral: true });
            return;
        }
        // save to db
        axios.put(`${process.env.MONGODB_URL}/user`, {
            userID: interaction.user.id,
            tasks: [{
                id: this.id,
                answer: answer
            }]
        });
        // save to disk
        this.loggerInfluencer.write(`${interaction.user.tag} ${process.env.LOG_FILES_SEPARATOR} ${answer}\r\n`);
        // save to channel
        const channel = interaction.client.channels.cache.get(process.env[this.channelId]);
        channel.send(`${interaction.user.tag} ${process.env.LOG_FILES_SEPARATOR} ${answer}`);
        // reply
        await interaction.editReply('Submitted');
    }
}