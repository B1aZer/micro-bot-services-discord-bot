const fs = require("fs");

module.exports = {
    name: 'upcoming',
    aliases: ['up'],
    category: 'nft',
    description: 'Shows upcoming top10 NFT mints for tomorrows date sorted by number of followers.',
    role: 'Dummy',
    execute(message, args, client, command, _Discord, profileData) {
        const command_files = fs.readdirSync('./logs/rare_scraper_logs').reverse();
        const log = fs.readFileSync(`./logs/rare_scraper_logs/${command_files[0]}`, 'utf8')
        const top25 = log.split('\n').slice(0, 25);
        const embed = new _Discord.MessageEmbed()
        .setColor("#00936f")
        .setTitle('Upcoming NFT Projects')
        .setDescription('Shows NFT projects with minted date set to tomorrow (EST).')
        .setAuthor({ name: 'GooDeeBot', iconURL: 'https://i.imgur.com/8nB0tI0.jpg' })
        .setTimestamp()
        for (let i = 0; i < top25.length; i++) {
            if (!top25[i]) continue;
            const elements = top25[i].split('|');
            embed.addField(elements[0], `Mint Date: ${(new Date(elements[1].trim())).toLocaleString()}\r\nTwitter Followers: ${elements[2]}\r\n${elements[3]}`)
        }
        message.channel.send({ embeds: [embed] })
    }
}