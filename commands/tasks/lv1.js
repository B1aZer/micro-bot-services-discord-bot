const { SlashCommandBuilder } = require('@discordjs/builders')
const lv1InfluencerTask = require('./lv1/influencer')
const taskBase = require('./base/taskBase')
const lv1NftLookData = require('./data/lv1.json')[1];
const lv1NftLookTask = new taskBase(lv1NftLookData)


module.exports = {
    data: new SlashCommandBuilder()
        .setName('lv1')
        .setDescription('Run command to see the task description.')
        .addSubcommand(subcommand =>
            subcommand
                .setName(lv1InfluencerTask.params.name)
                .setDescription('Run command to see the task description.')
                .addStringOption(
                    option => option
                        .setName('answer')
                        .setDescription('Screen Name of Twitter Account')))
        .addSubcommand(subcommand =>
            subcommand
                .setName(lv1NftLookTask.params.name)
                .setDescription('Run command to see the task description.')
                .addStringOption(
                    option => option
                        .setName('answer')
                        .setDescription('Name of the NFT project')))
    ,
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand()
        switch (subcommand) {
            case lv1InfluencerTask.params.name:
                lv1InfluencerTask.execute(interaction)
                break;
            case lv1NftLookTask.params.name:
                lv1NftLookTask.execute(interaction)
                break;
            default:
            // code block
        }
    },
};