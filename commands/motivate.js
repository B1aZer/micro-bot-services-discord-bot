const { SlashCommandBuilder } = require('@discordjs/builders');
const CommunityBase = require("./community/base/communityBase");
const data = require("./community/data/community.json")[1];
const motivateCommand = new CommunityBase(data);

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
        .setName(motivateCommand.name)
        .setDescription(motivateCommand.description)
    ,
    async execute(interaction) {
        await motivateCommand.execute(interaction);
    }
}