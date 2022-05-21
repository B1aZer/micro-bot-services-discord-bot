require('dotenv').config();
const Discord = require("discord.js");
// partials for DM and reactions real time cache
const client = new Discord.Client(
  {
    intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "GUILD_MESSAGE_REACTIONS"],
    partials: ["MESSAGE", "CHANNEL", "REACTION"]
  }
);

client.commands = new Discord.Collection();
client.roles = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.login(process.env.TOKEN);

