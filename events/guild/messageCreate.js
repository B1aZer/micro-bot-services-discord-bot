const { message } = require("discord.js");
const permissions = require("../../utils/permissions")
const cooldowns = require("../../utils/cooldowns")
const prefix = '!';

module.exports = (Discord, client, message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();
  // ALIASES
  const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
  // NO COMMAND FOUND
  if (!command) return;
  // PERMISSIONS
  if (!permissions.check(message, command)) return;
  // COOLDOWNS
  if (!cooldowns.set(message, command, Discord)) return;
  // EXECUTE
  try {
    command.execute(message, args, client, Discord);
  } catch (err) {
    message.reply("There was an error trying execute this command!");
    console.log(err);
  }
}