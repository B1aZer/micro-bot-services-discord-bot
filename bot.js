require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"], partials: ["CHANNEL"] })

client.commands = new Discord.Collection();
client.roles = new Discord.Collection();

['ethereum_handler', 'opensea_handler', 'command_handler', 'event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.login(process.env.TOKEN);

