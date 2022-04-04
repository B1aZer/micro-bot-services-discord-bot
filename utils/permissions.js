const serverId = '958742337394208808';
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
    "SEND_messageS",
    "SEND_TTS_messageS",
    "MANAGE_messageS",
    "EMBED_LINKS",
    "ATTACH_FILES",
    "READ_message_HISTORY",
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

module.exports = {
    check: async (message, command, client) => {
        let member = message.member;
        let invalidPerms = [];
        if (command.permissions && command.permissions.length) {
            for (const perm of command.permissions) {
                if (!validPermissions.includes(perm)) {
                    console.log(`Invalid Permissions ${perm}`);
                    return;
                }
                // IF DM
                if (!message.guild) {
                    let guild = await client.guilds.fetch(serverId)
                    member = await guild.members.fetch(message.author.id);
                }
                if (!member.permissions.has(perm)) {
                    invalidPerms.push(perm);
                }
            }
        }
        if (invalidPerms.length) {
            message.channel.send(`Missing Permissions: \`${invalidPerms}\``);
            return;
        }
        return true;
    }
}
