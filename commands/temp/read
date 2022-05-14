const tasks = require('../utils/tasks');

module.exports = {
    name: 'read',
    aliases: ['rd'],
    description: 'Read task description.',
    role: 'Dummy',
    execute(message, args, client, command, _Discord) {     
        const task = tasks.findByName(client, args[0]);
        if (task) {
            message.channel.send(`${task.embed}`);
        } else {
            message.channel.send(`No such task.`);
        }
    }
}