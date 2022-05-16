const fs = require("fs");
const { inlineCode, time, hyperlink } = require('@discordjs/builders');
const Discord = require("discord.js");

module.exports = {
    name: 'trending',
    description: 'Shows trending NFT twitter accounts for the past 24 hours.',
    coins: 10,
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true })
        const command_files = fs.readdirSync('./logs/following_logs').reverse();
        const log = fs.readFileSync(`./logs/following_logs/${command_files[0]}`, 'utf8')
        const top25 = log.split('\n').slice(0, 25);
        const embed = new Discord.MessageEmbed()
            .setColor("#00936f")
            .setTitle('Trending Twitter Accounts')
            .setDescription('Shows NFT twitter accounts that are trending right now.')
            .setAuthor({ name: 'GooDeeBot', iconURL: 'https://i.imgur.com/8nB0tI0.jpg' })
            .setTimestamp()
        for (let i = 0; i < top25.length; i++) {
            const elements = top25[i].split('|');
            elements[0] && embed.addField(elements[0], `
            Followers: ${inlineCode(elements[2])}
            Created: ${time(new Date(elements[1].trim()))}
            ${hyperlink('https://twitter.com/' + elements[0])}
            `)
        }
        await interaction.editReply({ embeds: [embed] })
    }
}