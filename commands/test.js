const tasks = require('../utils/tasks');

module.exports = {
    name: 'test',
    args: 'task id',
    description: 'Read task command by id',
    role: 'Tester',
    execute(message, args, client, command, _Discord) {     
        const task = tasks.findByID(args[0]);
        console.log(task);
        message.channel.send(`${task.embed}`);
    }
}