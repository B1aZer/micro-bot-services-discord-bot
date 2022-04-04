const taskModel = require('../models/task');

module.exports = {
    name: 'read',
    aliases: ['rd'],
    description: 'Read task description.',
    async execute(message, args, client, _Discord) {
        if (!args[0]) return message.channel.send('Please enter a task ID');
        try {
            let task = await taskModel.findById(args[0]);
            const embed = new _Discord.MessageEmbed()
            .setColor("#BFCDEB")
            .setTitle("Task")
            .addFields(
                //{ name: 'ID', value: task._id },
                { name: 'Description', value: task.description || "" },
                { name: 'XP', value: task.xp || "0" },
                { name: 'Answer Limit', value: task.limit || "No limit" },
                { name: 'Claimed', value: task.claimed.length ? task.claimed.toString() : "Not claimed"},
            )
            .setFooter({text: 'GooDee Finance'})
            message.channel.send({ embeds: [embed] })
        } catch {
            message.channel.send('Not a valid task ID');
            return;
        }  
    }
}