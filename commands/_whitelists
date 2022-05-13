const fs = require("fs");

module.exports = {
    name: 'whitelists',
    aliases: ['wl'],
    category: 'nft',
    description: 'Shows upcoming prominent NFT collections.',
    role: 'Dummy',
    execute(message, args, client, command, _Discord, profileData) {
        const command_files = fs.readdirSync('./logs/upcoming-whitelists').reverse();
        const log = fs.readFileSync(`./logs/upcoming-whitelists/${command_files[0]}`, 'utf8')
        const top25 = log.split('\n').slice(0, 25);

        const embed = new _Discord.MessageEmbed()
            .setColor("#00936f")
            .setTitle('Collections Whitelists')
            .setDescription('Shows upcoming prominent NFT collections.')
            .setAuthor({ name: 'GooDeeBot', iconURL: 'https://i.imgur.com/8nB0tI0.jpg' })
            .setTimestamp()
        //TODO: randomize
        for (let i = 0; i < top25.length; i++) {
            const elements = top25[i].split('|');
            elements[0] && embed.addField(elements[0], `Followers: ${elements[3]}\r\nCreated: ${new Date(elements[2].trim())}\r\n${elements[1]}`)
        }
        message.channel.send({ embeds: [embed] })

    }
}