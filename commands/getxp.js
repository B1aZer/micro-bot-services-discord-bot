const xp = require("../utils/xp");

module.exports = {
    name: 'myxp',
    aliases: ['xp'],
    description: 'Show an XP for the user',
    role: 'Dummy',
    async execute(message, args, client, command, _Discord, profileData) {
        let xpVal = xp.show(message, args, client, _Discord, profileData);
        message.channel.send(`${xpVal}`);
        return true;
    }
}