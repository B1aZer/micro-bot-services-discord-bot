const { SlashCommandBuilder } = require('@discordjs/builders')
const defaultCommandDescription = 'Run command without params to see the task description.'
const lv1InfluencerTask = require('./lv1/influencer')
const taskBase = require('./base/taskBase')
const lv1NftLookData = require('./data/lv1.json')[1];
const lv1NftLookTask = new taskBase(lv1NftLookData)
const lv1NftBuyData = require('./data/lv1.json')[2];
const lv1NftBuyTask = new taskBase(lv1NftBuyData)
const lv1NftDiscordData = require('./data/lv1.json')[3];
const lv1NftDiscordTask = new taskBase(lv1NftDiscordData)
const lv1NftAwaitData = require('./data/lv1.json')[4];
const lv1NftAwaitTask = new taskBase(lv1NftAwaitData)

module.exports = {
    data: new SlashCommandBuilder()
        .setName('lv1')
        .setDescription(defaultCommandDescription)
        .addSubcommand(subcommand =>
            subcommand
                .setName(lv1InfluencerTask.params.name)
                .setDescription(defaultCommandDescription)
                .addStringOption(
                    option => option
                        .setName('answer')
                        .setDescription('Screen Name of Twitter Account')))
        .addSubcommand(subcommand =>
            subcommand
                .setName(lv1NftLookTask.params.name)
                .setDescription(defaultCommandDescription)
                .addStringOption(
                    option => option
                        .setName('answer')
                        .setDescription('Name of the NFT project')))
        .addSubcommand(subcommand =>
            subcommand
                .setName(lv1NftBuyTask.params.name)
                .setDescription(defaultCommandDescription)
                .addStringOption(
                    option => option
                        .setName('answer')
                        .setDescription('Name of the NFT project')))
        .addSubcommand(subcommand =>
            subcommand
                .setName(lv1NftDiscordTask.params.name)
                .setDescription(defaultCommandDescription)
                .addStringOption(
                    option => option
                        .setName('answer')
                        .setDescription('Name of the Discord server')))
        .addSubcommand(subcommand =>
            subcommand
                .setName(lv1NftAwaitTask.params.name)
                .setDescription(defaultCommandDescription)
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
            case lv1NftBuyTask.params.name:
                lv1NftBuyTask.execute(interaction)
                break;
            case lv1NftDiscordTask.params.name:
                lv1NftDiscordTask.execute(interaction)
                break;
            case lv1NftAwaitTask.params.name:
                lv1NftAwaitTask.execute(interaction)
                break;
            default:
            // code block
        }
    },
};