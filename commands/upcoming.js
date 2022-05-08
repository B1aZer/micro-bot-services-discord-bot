const fs = require("fs");

module.exports = {
    name: 'upcoming',
    aliases: ['up'],
    category: 'nft',
    description: 'Shows upcoming top10 NFT mints for tomorrows date sorted by number of followers.',
    role: 'Dummy',
    execute(message, args, client, command, _Discord, profileData) {
        const command_files = fs.readdirSync('./rare_scraper_logs').reverse();
        const log = fs.readFileSync(`./rare_scraper_logs/${command_files[0]}`, 'utf8')
        const top10 = log.split('\n').slice(0, 10).join('\r\n');
        message.channel.send(top10);
    }
}