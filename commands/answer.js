// id and answer
// check if needs review

const taskModel = require('../models/task');

module.exports = {
    name: 'answer',
    aliases: ['aw'],
    description: 'Answer the task to gain XP.',
    async execute(message, args, client, _Discord) {
        if (!args[0]) return message.channel.send('Please enter a task ID');
        if (!args[1]) return message.channel.send('Please provide an answer');
        try {
            let task = await taskModel.findById(args[0]);
            if (task.answer.toLowerCase() === args[1].toLowerCase()) {
                const embed = new _Discord.MessageEmbed()
                    .setColor("#00936f")
                    .setTitle(message.author.username)
                    //.setDescription("CONGRATS")
                    .setThumbnail(message.author.displayAvatarURL())
                    .addFields(
                        //{ name: 'ID', value: task._id },
                        { name: 'CONGRATS', value: `You gained ${task.xp} XP!\n\u200b` },
                        //{ name: '\u200B', value: '' },
                    )
                    .setFooter({ text: message.guild.name })
                message.channel.send({content: `<@${message.author.id}>`, embeds: [embed] })
            } else {
                const embed = new _Discord.MessageEmbed()
                    .setColor("#af0303")
                    .setTitle(message.author.username)
                    .setThumbnail(message.author.displayAvatarURL())
                    .addFields(
                        { name: 'SORRY', value: `This is not the right answer!\nPlease try again in 6 hours.` }
                    )
                    .setFooter({ text: message.guild.name })
                message.channel.send({content: `<@${message.author.id}>`, embeds: [embed] })
            }
        } catch {
            message.channel.send('Not a valid task ID');
            return;
        }
    }
}