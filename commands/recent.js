const fs = require("fs");

module.exports = {
    name: 'recent',
    aliases: ['rc'],
    category: 'nft',
    description: 'Shows recent NFT collections added to OpenSea.',
    role: 'Dummy',
    execute(message, args, client, command, _Discord, profileData) {
        const command_files = fs.readdirSync('./logs/opensea-recent-collections').reverse();
        const log = fs.readFileSync(`./logs/opensea-recent-collections/${command_files[0]}`, 'utf8')
        const top25 = log.split('\n').slice(0, 25);

        const embed = new _Discord.MessageEmbed()
            .setColor("#00936f")
            .setTitle('Recently Added Collections')
            .setDescription('Shows recent NFT collections added to OpenSea.')
            .setAuthor({ name: 'GooDeeBot', iconURL: 'https://i.imgur.com/8nB0tI0.jpg' })
            .setTimestamp()
        for (let i = 0; i < top25.length; i++) {
            const elements = top25[i].split('|');
            elements[0] && embed.addField(elements[0], `Created: ${new Date(elements[2].trim())}\r\n${elements[1]}`)
        }
        message.channel.send({ embeds: [embed] })

    }
}