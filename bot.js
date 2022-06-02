require('dotenv').config();

// ERROR Processing
const { transporter, mailOptions } = require('../_utils/mail.js');
// TODO: THIS LINE prevents process exit
process.on("unhandledRejection", error => {
  console.log(`[ERROR]: unhandledRejection ${JSON.stringify(error)}`);
});
process.on('uncaughtException', err => {
  console.log(`[ERROR]: uncaughtException ${JSON.stringify(err)}`);
  // send mail with defined transport object
  mailOptions.subject = '✖ Discord Bot Has Crashed ✖';
  mailOptions.text = JSON.stringify(err);
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
    process.exit(1);
  });
});

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
