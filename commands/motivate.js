const { SlashCommandBuilder } = require('@discordjs/builders');
const CommunityBase = require("./community/base/communityBase")
const data = require("./community/data/community.json")[0]
const motivateCommand = new CommunityBase(data)

module.exports = {
    data: new SlashCommandBuilder()
        .setName(motivateCommand.name)
        .setDescription(motivateCommand.description)
    ,
    async execute(interaction) {
        await motivateCommand.execute(interaction)
    }
}