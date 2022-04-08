// id and answer
// check if needs review

const taskModel = require('../models/task');

module.exports = {
    name: 'answer',
    aliases: ['aw'],
    description: 'Answer the task to gain XP.',
    xp: 100,
    async execute(message, args, client, command, _Discord) {
        if (!args[0]) {
            message.channel.send('Please enter a task ID');
            return;
        }
        if (!args[1]) {
            message.channel.send('Please provide an answer');
            return;
        }
        try {
            let task = await taskModel.findById(args[0]);
            if (task.answer.toLowerCase() === args[1].toLowerCase()) {
                if (task.review) {
                    const embed = new _Discord.MessageEmbed()
                        .setColor("#00936f")
                        .setTitle(message.author.username)
                        .setThumbnail(message.author.displayAvatarURL())
                        .addFields(
                            { name: 'NEEDS REVIEW', value: `Thank you!\nWe are notified and let you know.\n\u200b` },
                        )
                        .setTimestamp()
                        .setFooter({ text: message.guild.name })
                    // TODO: NOTIFY
                    message.channel.send({ content: `<@${message.author.id}>`, embeds: [embed] })
                } else {
                    const embed = new _Discord.MessageEmbed()
                        .setColor("#00936f")
                        .setTitle(message.author.username)
                        .setThumbnail(message.author.displayAvatarURL())
                        .addFields(
                            { name: 'CONGRATS', value: `You gained ${task.xp} XP!\n\u200b` },
                        )
                        .setTimestamp()
                        .setFooter({ text: message.guild.name })
                    // TODO: ADD XP
                    message.channel.send({ content: `<@${message.author.id}>`, embeds: [embed] })
                }
            } else {
                const embed = new _Discord.MessageEmbed()
                    .setColor("#af0303")
                    .setTitle(message.author.username)
                    .setThumbnail(message.author.displayAvatarURL())
                    .addFields(
                        { name: 'SORRY', value: `This is not the right answer!\nPlease try again in 6 hours.\n\u200b` }
                    )
                    .setTimestamp()
                    .setFooter({ text: message.guild.name })
                message.channel.send({ content: `<@${message.author.id}>`, embeds: [embed] })
            }
        } catch {
            message.channel.send('Not a valid task ID');
            return;
        }
    }
}