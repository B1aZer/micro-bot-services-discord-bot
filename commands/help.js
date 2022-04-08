const fs = require('fs');
const roles = require('../utils/roles');

module.exports = {
    name: 'help',
    aliases: ['?', 'hh'],
    description: 'Show this help message.',
    cooldown: 10,
    xp: 0,
    async execute(message, args, client, command, _Discord, profileData) {
        command_files = fs.readdirSync('./commands').filter(file => file.endsWith('js'));
        //TODO: not admin commands
        for(const file of command_files) {
          const command = require(`./${file}`);
          // XP CHECK
          if (roles.check(message, args, client, command, _Discord, profileData)) {
            message.reply(`**${command.name}** \nAliases: ${command.aliases} \n${command.description}`);
          }
        }
    }
}