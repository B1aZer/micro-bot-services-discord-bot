const fs = require("fs");
const { inlineCode, time, hyperlink } = require('@discordjs/builders');
const Discord = require("discord.js");

module.exports = {
    name: 'upcoming',
    description: 'Shows upcoming NFT mints for tomorrows date.',
    coins: 10,
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true })
        const command_files = fs.readdirSync('./logs/rare_scraper_logs').reverse();
        const log = fs.readFileSync(`./logs/rare_scraper_logs/${command_files[0]}`, 'utf8')
        const top25 = log.split('\n').slice(0, 25);
        const embed = new Discord.MessageEmbed()
        .setColor("#00936f")
        .setTitle('Upcoming NFT Projects')
        .setDescription('Shows NFT projects with minted date set to tomorrow (EST).')
        .setAuthor({ name: 'GooDeeBot', iconURL: 'https://i.imgur.com/8nB0tI0.jpg' })
        .setTimestamp()
        for (let i = 0; i < top25.length; i++) {
            if (!top25[i]) continue;
            const elements = top25[i].split('|');
            elements[0] && embed.addField(elements[0], `
            Mint Date: ${time(new Date(elements[1].trim()))}
            Twitter Followers: ${inlineCode(elements[2])}
            ${hyperlink(elements[3])}`)
        }
        await interaction.editReply({ embeds: [embed] })
    }
}