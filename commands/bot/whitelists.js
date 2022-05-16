const fs = require("fs");
const { inlineCode, time, hyperlink } = require('@discordjs/builders');
const Discord = require("discord.js");

module.exports = {
    name: 'whitelists',
    description: 'Shows upcoming prominent NFT collections.',
    coins: 10,
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true })
        const command_files = fs.readdirSync('./logs/upcoming-whitelists').reverse();
        const log = fs.readFileSync(`./logs/upcoming-whitelists/${command_files[0]}`, 'utf8')
        const top25 = log.split('\n')
            //randomize
            .sort((a, b) => 0.5 - Math.random())
            .slice(0, 25)
            .sort((a, b) => new Date(b.split('|')[2].trim()) - new Date(a.split('|')[2].trim()))
        const embed = new Discord.MessageEmbed()
            .setColor("#00936f")
            .setTitle('Collections Whitelists')
            .setDescription('Shows upcoming prominent NFT collections.')
            .setAuthor({ name: 'GooDeeBot', iconURL: 'https://i.imgur.com/8nB0tI0.jpg' })
            .setTimestamp()
        for (let i = 0; i < top25.length; i++) {
            const elements = top25[i].split('|');
            elements[0] && embed.addField(elements[0], `
            Followers: ${inlineCode(elements[3])}
            Created: ${time(new Date(elements[2].trim()))}
            ${hyperlink(elements[1])}`)
        }
        await interaction.editReply({ embeds: [embed] })

    }
}