require('dotenv').config();
const fs = require("fs");
const { inlineCode, hyperlink } = require('@discordjs/builders');
const Discord = require("discord.js");
const axios = require('axios');

module.exports = class BotBase {
    constructor(params) {
        Object.assign(this, params);
        this.separator = process.env.LOG_FILES_SEPARATOR;
    }
    getSliced(log) {
        return (log.split('\n').slice(0, this.count))
    }
    formatField(elements) {
        return `
        Mints: ${inlineCode(elements[1])}
        ${hyperlink(elements[2])}
        `
    }
    async execute(interaction) {
        const userDB = (await axios.get(`${process.env.MONGODB_URL}/user`, { params: { userID: interaction.user.id } })).data
        if (userDB.coins >= this.coins) {
            userDB.coins -= this.coins
            axios.put(`${process.env.MONGODB_URL}/user`, {
                userID: interaction.user.id,
                coins: userDB.coins
            })
        } else {
            await interaction.reply({ content: "You don't have enough coins to use this command", ephemeral: true })
            return;
        }
        await interaction.deferReply({ ephemeral: true })
        const command_files = fs.readdirSync(this.path).reverse();
        const log = fs.readFileSync(`${this.path}/${command_files[0]}`, 'utf8')
        const top10 = this.getSliced(log)
        const embed = new Discord.MessageEmbed()
            .setColor(process.env.DISCORD_EMBED_COLOR)
            .setTitle(this.title)
            .setDescription(this.description)
            .setAuthor({ name: 'GooDeeBot', iconURL: 'https://i.imgur.com/8nB0tI0.jpg' })
            .setTimestamp()
        for (let i = 0; i < top10.length; i++) {
            const elements = top10[i].split(this.separator);
            elements[0] && embed.addField(elements[0], this.formatField(elements))
        }
        await interaction.editReply({ embeds: [embed] })
    }
}