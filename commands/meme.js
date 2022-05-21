const { SlashCommandBuilder } = require('@discordjs/builders');
const CommunityBase = require("./community/base/communityBase");
const data = require("./community/data/community.json")[2];
const command = new CommunityBase(data);

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
        .setName(command.name)
        .setDescription(command.description)
    ,
    async execute(interaction) {
        await command.execute(interaction);
    }
}