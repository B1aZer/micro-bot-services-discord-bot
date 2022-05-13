const fs = require('fs');
const roles = require('../utils/roles');
const path = require('path');

module.exports = {
  name: 'help',
  aliases: ['?', 'hh'],
  description: 'Show this help message.',
  category: "general",
  cooldown: 10,
  execute(message, args, client, command, _Discord, profileData) {
    // embed
    // general
    // help, buy
    // community
    // images
    // coins/nft/bot
    // bot commands
    let sendMessage = '';
    message.channel.send(`**HELP IS HERE**`);
    for (const [name, command] of client.commands) {
      // XP CHECK
      if (roles.check(message, args, client, command, _Discord, profileData)) {
        sendMessage += `**${command.name}** \nAliases: ${command.aliases} \n${command.description}\nArguments: \nUsage: \r\n`;
      }
    }
    message.channel.send(sendMessage);
    message.delete();

  }
}