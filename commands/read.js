const RedditImageFetcher = require("reddit-image-fetcher");

module.exports = {
    name: 'read',
    aliases: ['rd'],
    description: 'Read task description.',
    async execute(message, args, client, _Discord) {
        if (!args[0]) return message.channel.send('Please enter a task ID');
        const embed = new _Discord.MessageEmbed()
            .setColor("#BFCDEB")
            .setTitle("Task descriptor")
            .addFields(
                { name: 'Name', value: 'Name' },
                { name: 'Description', value: 'Description' },
                { name: 'XP', value: '0' },
                { name: 'Claimed', value: '0' }
            )
            .setFooter({text: 'Footer'})
        message.channel.send({ embeds: [embed] })
    }
}