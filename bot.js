require('dotenv').config();
var path = require('path');
const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"], partials: ["CHANNEL"] })

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.tasks = new Discord.Collection();

['command_handler', 'event_handler', 'task_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);
});

client.login(process.env.TOKEN);

