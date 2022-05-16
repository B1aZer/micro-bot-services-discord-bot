const fs = require("fs");
const { inlineCode, hyperlink } = require('@discordjs/builders');
const Discord = require("discord.js");

module.exports = {
    name: 'minting',
    description: 'Shows most minted NFT projects for the past hour.',
    coins: 10,
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true })
        const command_files = fs.readdirSync('./logs/etherscan_scraper_logs').reverse();
        const log = fs.readFileSync(`./logs/etherscan_scraper_logs/${command_files[0]}`, 'utf8')
        const top10 = log.split('\n').slice(0, 10);
        const embed = new Discord.MessageEmbed()
            .setColor("#00936f")
            .setTitle('Minting Projects')
            .setDescription('Shows Ethereum NFT projects that are minted right now.')
            .setAuthor({ name: 'GooDeeBot', iconURL: 'https://i.imgur.com/8nB0tI0.jpg' })
            .setTimestamp()
        for (let i = 0; i < top10.length; i++) {
            const elements = top10[i].split('|');
            elements[0] && embed.addField(elements[0], `
            Mints: ${inlineCode(elements[1])}
            ${hyperlink(elements[2])}
            `)
        }
        await interaction.editReply({ embeds: [embed] })
    }
}