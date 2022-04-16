const fs = require('fs');
const roles = require('../utils/roles');
const path = require('path');

module.exports = {
    name: 'help',
    aliases: ['?', 'hh'],
    description: 'Show this help message.',
    cooldown: 10,
    async execute(message, args, client, command, _Discord, profileData) {
        command_files = fs.readdirSync('./commands').filter(file => file.endsWith('js') && file !== path.basename(__filename));
        console.info(command_files);
        //TODO: not admin commands
        message.channel.send(`**HELP IS HERE**`);    
        for(const file of command_files) {
          // TODO: this is slow. why?
          const command = require(`./${file}`);
          console.info(command);
          // XP CHECK
          if (roles.check(message, args, client, command, _Discord, profileData)) {
            await message.channel.send(`**${command.name}** \nAliases: ${command.aliases} \n${command.description}\nArguments: \nUsage: `);
          }
        }
        message.delete();
    }
}