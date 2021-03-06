const fs = require("fs");
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
    validateElements(items) {
        if (!items[0]?.trim()) {
            items[0] = 'noname';
        }
        return items;
    }
    // override
    formatField(elements) {
        return `${elements[0]}`;
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
            console.log(`create fields for ${top10[i].split(this.separator)[0]}: ${top10[i].split(this.separator)}`);
            const elements = this.validateElements(top10[i].split(this.separator));
            console.log(`validated: ${elements[0]} ${elements}`);
            embed.addField(elements[0], this.formatField(elements))
        }
        await interaction.editReply({ embeds: [embed] })
    }
}