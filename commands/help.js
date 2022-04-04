const fs = require('fs');

module.exports = {
    name: 'help',
    aliases: ['hh'],
    description: 'Show this help message.',
    cooldown: 10,
    async execute(message, args, client, _Discord) {
        command_files = fs.readdirSync('./commands').filter(file => file.endsWith('js'));
        //TODO: not admin permissions
        for(const file of command_files) {
          const command = require(`./${file}`);
          message.reply(`**${command.name}** \n${command.aliases} \n${command.description}`);
        }
    }
}