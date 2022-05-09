const fs = require("fs");

module.exports = {
    name: 'trending',
    aliases: ['tr'],
    category: 'nft',
    description: 'Shows top25 trending NFT twitter accounts for the past 24 hours.',
    role: 'Dummy',
    execute(message, args, client, command, _Discord, profileData) {
        const command_files = fs.readdirSync('./logs/following_logs').reverse();
        const log = fs.readFileSync(`./logs/following_logs/${command_files[0]}`, 'utf8')
        const top25 = log.split('\n').slice(0, 25);
        /*
        const table = new AsciiTable('Trending Twitter Accounts')
        const tableHeading = table.setHeading('Screen Name', 'Created', 'Number of Followers')
        for (let i = 0; i < top25.length; i++) {
            const elements = top25[i].split('|');
            tableHeading.addRow(elements[0], elements[1], elements[2])
        }
        */
        const embed = new _Discord.MessageEmbed()
            .setColor("#00936f")
            .setTitle('Trending Twitter Accounts')
            .setDescription('Shows NFT twitter accounts that are trending right now.')
            .setAuthor({ name: 'GooDeeBot', iconURL: 'https://i.imgur.com/8nB0tI0.jpg' })
            //.setDescription(table.toString())
            .setTimestamp()
        for (let i = 0; i < top25.length; i++) {
            const elements = top25[i].split('|');
            embed.addField(elements[0], `Followers: ${elements[2]}\r\nCreated: ${elements[1].trim()}\r\nhttps://twitter.com/${elements[0]}`)
        }
        message.channel.send({ embeds: [embed] })
        //message.channel.send(table.toString());

    }
}