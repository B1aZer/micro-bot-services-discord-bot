// category optional argument

const tasks = require("../utils/tasks");

module.exports = {
    name: 'available',
    aliases: ['avl'],
    description: 'List available tasks.',
    role: 'Dummy',
    execute(message, args, client, command, _Discord, profileData) {
        message.channel.send(tasks.findByXP(client, profileData).map(t => t.embed).join(','));
    }
}