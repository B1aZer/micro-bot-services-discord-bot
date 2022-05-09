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
        const top10 = log.split('\n').slice(0, 10);
        const embed = new _Discord.MessageEmbed()
            .setColor("#00936f")
            .setTitle('Minting Projects')
            .setDescription('Shows Ethereum NFT projects that are minted right now.')
            .setAuthor({ name: 'GooDeeBot', iconURL: 'https://i.imgur.com/8nB0tI0.jpg' })
            .setTimestamp()
        for (let i = 0; i < top10.length; i++) {
            const elements = top10[i].split('|');
            embed.addField(elements[0], `Mints: ${elements[1]}\r\n${elements[2]}`)
        }
        message.channel.send({ embeds: [embed] })
    }
}