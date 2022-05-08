const fs = require("fs");

module.exports = {
    name: 'minting',
    aliases: ['mt'],
    category: 'nft',
    description: 'Shows top 10 most minterd NFT projects for the last 10 minutes.',
    role: 'Dummy',
    execute(message, args, client, command, _Discord, profileData) {
        const command_files = fs.readdirSync('./logs/etherscan_scraper_logs').reverse();
        const log = fs.readFileSync(`./logs/etherscan_scraper_logs/${command_files[0]}`, 'utf8')
        const top10 = log.split('\n').slice(0, 10).join('\r\n');
        message.channel.send(top10);
    }
}