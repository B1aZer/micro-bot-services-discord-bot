const fs = require("fs");
const { time, hyperlink } = require('@discordjs/builders');
const Discord = require("discord.js");

module.exports = {
    name: 'recent',
    description: 'Shows recent NFT collections added to OpenSea.',
    coins: 10,
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true })
        const command_files = fs.readdirSync('./logs/opensea-recent-collections').reverse();
        const log = fs.readFileSync(`./logs/opensea-recent-collections/${command_files[0]}`, 'utf8')
        const top25 = log.split('\n').slice(0, 25);

        const embed = new Discord.MessageEmbed()
            .setColor("#00936f")
            .setTitle('Recently Added Collections')
            .setDescription('Shows recent NFT collections added to OpenSea.')
            .setAuthor({ name: 'GooDeeBot', iconURL: 'https://i.imgur.com/8nB0tI0.jpg' })
            .setTimestamp()
        for (let i = 0; i < top25.length; i++) {
            const elements = top25[i].split('|');
            elements[0] && embed.addField(elements[0], `
            Created: ${time(new Date(elements[2].trim()))}
            ${hyperlink(elements[1])}
            `)
        }
        await interaction.editReply({ embeds: [embed] })

    }
}