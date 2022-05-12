const { message } = require("discord.js");
//const permissions = require("../../utils/permissions")
const cooldowns = require("../../utils/cooldowns")
// TODO: need?
const profiles = require("../../utils/profiles")
// TODO: need?
const roles = require("../../utils/roles")
const prefix = '!';

module.exports = async (Discord, client, message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.content === prefix) return message.channel.send('Not a valid command.');
  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();
  // ALIASES
  const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
  // NO COMMAND FOUND
  if (!command) return message.channel.send('Not a valid command.');
  // PROFILE
  // TODO: don't like await here
  let profileData = await profiles.get(message, args, client, command, Discord);
  // TODO: no error return
  if (!profileData) return;
  // PERMISSIONS
  // TODO: not used, remove
  // if (!permissions.check(message, args, client, command, Discord)) return;
  // COMMAND XP VISIBLITY CHECK
  // TODO: check, shoulb be robust
  if (!roles.check(message, args, client, command, Discord, profileData)) return;
  // COOLDOWNS
  if (!cooldowns.set(message, args, client, command, Discord)) return;
  try {
    // EXECUTE
    command.execute(message, args, client, command, Discord, profileData)
    // ROLES AND LEVELING SYSTEM
    // TODO: do we need check on each message?
    roles.assign(message, args, client, command, Discord, profileData)
    //DELETE
    //message.delete();
  } catch (err) {
    message.reply("There was an error trying execute this command!")
    console.log(err)
  }
}