require('dotenv').config();
const Discord = require("discord.js");
const axios = require('axios');
const fs = require('fs');

module.exports = class taskBase {
    constructor(params) {
        this.params = params
        this.loggerInfluencer = fs.createWriteStream(`/home/hipi/Sites/GooDee/_utils/out/tasks/${this.params.id}.log`, {
            flags: 'a'
        });
    }
    check() {

    }
    async execute(interaction) {
        const answer = interaction.options.getString('answer');
        // check if answer exists
        const user = (await axios.get(`${process.env.MONGODB_URL}/user`, {params: {userID: interaction.user.id}})).data
        const hasAnswers = answer && user?.tasks.some(task => task.id === this.params.id)
        if (hasAnswers) {
            await interaction.reply('You\'ve already submitted an answer. Try another command');
            return;
        }
        // dumb reply
        await interaction.deferReply({ ephemeral: true });
        const embed = new Discord.MessageEmbed()
            .setColor('#00936f')
            .setTitle(this.params.title)
            .setDescription(this.params.description)
            .setAuthor({ name: 'GooDeeBot', iconURL: 'https://i.imgur.com/8nB0tI0.jpg' })
            .setTimestamp()
        if (!answer) {
            // show task description
            interaction.editReply({ embeds: [embed] })
            return;
        };
        // TODO: check twitter
        this.check()
        // save to db
        axios.put(`${process.env.MONGODB_URL}/user`, {
            userID: interaction.user.id,
            tasks: [{
                id: this.params.id,
                answer: answer
            }]
        })
        // save to disk
        this.loggerInfluencer.write(`${interaction.user.tag} | ${answer}\r\n`)
        // save to channel
        const channel = interaction.client.channels.cache.get(process.env[this.params.channelId]);
        channel.send(`${interaction.user.tag} | ${answer}`);
        // reply
        await interaction.editReply('Submitted');
    }
}