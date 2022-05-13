require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"], partials: ["CHANNEL"] })

// opensea monitor
const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:3080');
let ready = false;
ws.on('message', function message(jsonData) {
  const data = JSON.parse(jsonData)
  if (data && ready) {
    const embed = new Discord.MessageEmbed()
        .setColor(data.below ? "#932f00" : "#00936f")
        .setTitle(data.below ? 'Listed BELOW floor price' : 'Listed on floor price')
        .setDescription('New floor listing on OpenSea.')
        .setAuthor({ name: 'GooDeeBot', iconURL: 'https://i.imgur.com/8nB0tI0.jpg' })
        .setURL(data.permalink)
        .setImage(data.image)
        .addField(data.collection, `ETH price: ${data.eth_price}\r\nFloor price: ${data.floor_price}\r\nUSD price: ${data.usd_price}\r\n${data.permalink}`)
        .setTimestamp()
    client.channels.cache.get('973062867647627264').send({ embeds: [embed] });
  }
});
client.on('ready', client => {
  ready = true;
})
//eof  opensea monitor

client.commands = new Discord.Collection();

// TODO: task handler, make tasks commands?
['command_handler', 'event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.login(process.env.TOKEN);

