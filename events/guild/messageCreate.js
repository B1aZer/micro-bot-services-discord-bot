const { msg } = require("discord.js");
const prefix = '!';
const cooldowns = new Map();
const validPermissions = [
  "CREATE_INSTANT_INVITE",
  "KICK_MEMBERS",
  "BAN_MEMBERS",
  "ADMINISTRATOR",
  "MANAGE_CHANNELS",
  "MANAGE_GUILD",
  "ADD_REACTIONS",
  "VIEW_AUDIT_LOG",
  "PRIORITY_SPEAKER",
  "STREAM",
  "VIEW_CHANNEL",
  "SEND_msgS",
  "SEND_TTS_msgS",
  "MANAGE_msgS",
  "EMBED_LINKS",
  "ATTACH_FILES",
  "READ_msg_HISTORY",
  "MENTION_EVERYONE",
  "USE_EXTERNAL_EMOJIS",
  "VIEW_GUILD_INSIGHTS",
  "CONNECT",
  "SPEAK",
  "MUTE_MEMBERS",
  "DEAFEN_MEMBERS",
  "MOVE_MEMBERS",
  "USE_VAD",
  "CHANGE_NICKNAME",
  "MANAGE_NICKNAMES",
  "MANAGE_ROLES",
  "MANAGE_WEBHOOKS",
  "MANAGE_EMOJIS",
]

module.exports = (Discord, client, msg) => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const args = msg.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
  if (!command) return;
  // TODO: DM won't work PERMISSIONS CHECK  
  if (command.permissions && command.permissions.length) {
    let invalidPerms = []
    for (const perm of command.permissions) {
      if (!validPermissions.includes(perm)) {
        return console.log(`Invalid Permissions ${perm}`);
      }
      if (!msg.member.permissions.has(perm)) {
        invalidPerms.push(perm);
      }
    }
    if (invalidPerms.length) {
      return msg.channel.send(`Missing Permissions: \`${invalidPerms}\``);
    }
  }
  // EPERM
  // COOLDOWN CHECK
  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
  }

  const current_time = Date.now();
  const time_stamps = cooldowns.get(command.name);
  const cooldown_amount = (command.cooldown) * 1000;

  // If time_stamps has a key with the author's id then check the expiration time to send a msg to a user.
  if (time_stamps.has(msg.author.id)) {
    const expiration_time = time_stamps.get(msg.author.id) + cooldown_amount;

    if (current_time < expiration_time) {
      const time_left = (expiration_time - current_time) / 1000;

      return msg.reply(`Please wait ${time_left.toFixed(1)} more seconds before using ${command.name}`);
    }
  }

  // If the author's id is not in time_stamps then add them with the current time.
  time_stamps.set(msg.author.id, current_time);
  // Delete the user's id once the cooldown is over.
  setTimeout(() => time_stamps.delete(msg.author.id), cooldown_amount);
  // ECOOLD
  // EXECUTE
  try {
    command.execute(msg, args, client, Discord);
  } catch (err) {
    msg.reply("There was an error trying execute this command!");
    console.log(err);
  }
}