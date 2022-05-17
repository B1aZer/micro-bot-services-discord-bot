require('dotenv').config();
const fs = require("fs");
const { inlineCode, hyperlink } = require('@discordjs/builders');
const Discord = require("discord.js");

module.exports = class BotBase {
    constructor(params) {
        Object.assign(this, params);
        this.separator = process.env.LOG_FILES_SEPARATOR;
    }
    async getSliced(log) {
        return Promise.resolve(log.split('\n').slice(0, this.count))
    }
    async formatField(elements) {
        return Promise.resolve(`
        Mints: ${inlineCode(elements[1])}
        ${hyperlink(elements[2])}
        `)
    }
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true })
        const command_files = fs.readdirSync(this.path).reverse();
        const log = fs.readFileSync(`${this.path}/${command_files[0]}`, 'utf8')
        const top10 = await this.getSliced(log)
        const embed = new Discord.MessageEmbed()
            .setColor(process.env.DISCORD_EMBED_COLOR)
            .setTitle(this.title)
            .setDescription(this.description)
            .setAuthor({ name: 'GooDeeBot', iconURL: 'https://i.imgur.com/8nB0tI0.jpg' })
            .setTimestamp()
        for (let i = 0; i < top10.length; i++) {
            const elements = top10[i].split(this.separator);
            elements[0] && embed.addField(elements[0], (await this.formatField(elements)))
        }
        await interaction.editReply({ embeds: [embed] })
    }
}