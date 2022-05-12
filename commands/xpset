const xp = require("../utils/xp");

module.exports = {
    name: 'setxp',
    aliases: ['set'],
    description: 'Set an XP for the user',
    role: 'Tester',
    async execute(message, args, client, command, _Discord) {
        if (!args[0]) {
            message.channel.send('Please provide an xp value');
            return;
        }
        if (!args[1]) {
            message.channel.send('Please provide a user ID');
            return;
        }
        await xp.set(message, args, client, _Discord);
        return true;
    }
}