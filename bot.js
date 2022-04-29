require('dotenv').config();
var path = require('path');
const mongoose = require('mongoose');
const Discord = require("discord.js");
//ws
const ws = require('ws');

const wss = new ws.WebSocketServer({ port: 8080 });

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"], partials: ["CHANNEL"] })

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.tasks = new Discord.Collection();
client.wss = wss;

['command_handler', 'event_handler', 'task_handler', 'ws_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);
});

mongoose
  .connect(process.env.MONGOOSE_SERVER)
  .then(() => {
    console.log("connected to db");
    client.login(process.env.TOKEN);
  });


