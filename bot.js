require('dotenv').config();
var path = require('path');
const mongoose = require('mongoose');
const Discord = require("discord.js")
// const Keyv = require('keyv')

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"], partials: ["CHANNEL"] })

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);
});

mongoose
  .connect(process.env.MONGOOSE_SERVER)
  .then(() => {
    console.log("connected to db")
  });
//const Cat = mongoose.model('Cat', { name: String });

//const kitty = new Cat({ name: 'Zildjian' });
//kitty.save().then(() => console.log('meow'));

client.login(process.env.TOKEN)
