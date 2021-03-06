const WebSocket = require('ws');
const Discord = require("discord.js");

module.exports = (client) => {
    const ws = new WebSocket(`ws://${process.env.OPENSEA_URL}`);
    ws.on('error', (error) => {
        console.log(error);
    });
    ws.on('message', function message(jsonData) {
        try {
            const data = JSON.parse(jsonData);
            if (data) {
                const embed = new Discord.MessageEmbed()
                    .setColor(data.below ? "#932f00" : "#00936f")
                    .setTitle(data.below ? 'Listed BELOW floor price' : 'Listed on floor price')
                    .setDescription('New floor listing on OpenSea.')
                    .setAuthor({ name: 'GooDeeBot', iconURL: 'https://i.imgur.com/8nB0tI0.jpg' })
                    .setURL(data.permalink)
                    .setImage(data.image)
                    .addField(data.collection, `ETH price: ${data.eth_price}\r\nFloor price: ${data.floor_price}\r\nUSD price: ${data.usd_price}\r\n${data.permalink}`)
                    .setTimestamp();
                client.channels.cache.get(process.env.OPENSEA_MONITOR_CHANNEL_ID).send({ embeds: [embed] });
            }
        } catch (err) {
            console.log(`[ERROR]: ${err}`);
            console.error(err);
        }
    });
}
