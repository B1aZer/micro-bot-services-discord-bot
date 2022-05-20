const { SlashCommandBuilder } = require('@discordjs/builders');
const defaultCommandDescription = 'Run command without params to see the task description.';
const lv2ComMotTask = require('./tasks/lv2/motivation');
/*
const lv1NftLookTask = new taskBase(lv1NftLookData);
const lv1NftBuyData = require('./tasks/data/lv1.json')[2];
const lv1NftBuyTask = new taskBase(lv1NftBuyData)
const lv1NftDiscordData = require('./tasks/data/lv1.json')[3];
const lv1NftDiscordTask = new taskBase(lv1NftDiscordData);
const lv1NftAwaitData = require('./tasks/data/lv1.json')[4];
const lv1NftAwaitTask = new taskBase(lv1NftAwaitData);
*/

module.exports = {
    data: new SlashCommandBuilder()
        .setName('lv2')
        .setDescription(defaultCommandDescription)
        .addSubcommand(subcommand =>
            subcommand
                .setName(lv2ComMotTask.name)
                .setDescription(defaultCommandDescription)
                .addStringOption(
                    option => option
                        .setName('answer')
                        .setDescription('Message Link. Right Click => Copy Message Link')))
        /*
        .addSubcommand(subcommand =>
            subcommand
                .setName(lv1NftLookTask.name)
                .setDescription(defaultCommandDescription)
                .addStringOption(
                    option => option
                        .setName('answer')
                        .setDescription('Name of the NFT project')))
        .addSubcommand(subcommand =>
            subcommand
                .setName(lv1NftBuyTask.name)
                .setDescription(defaultCommandDescription)
                .addStringOption(
                    option => option
                        .setName('answer')
                        .setDescription('Name of the NFT project')))
        .addSubcommand(subcommand =>
            subcommand
                .setName(lv1NftDiscordTask.name)
                .setDescription(defaultCommandDescription)
                .addStringOption(
                    option => option
                        .setName('answer')
                        .setDescription('Name of the Discord server')))
        .addSubcommand(subcommand =>
            subcommand
                .setName(lv1NftAwaitTask.name)
                .setDescription(defaultCommandDescription)
                .addStringOption(
                    option => option
                        .setName('answer')
                        .setDescription('Name of the NFT project')))
                        */
    ,
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();
        switch (subcommand) {
            case lv2ComMotTask.name:
                await lv2ComMotTask.execute(interaction);
                break;
            /*
            case lv1NftLookTask.name:
                await lv1NftLookTask.execute(interaction);
                break;
            case lv1NftBuyTask.name:
                await lv1NftBuyTask.execute(interaction);
                break;
            case lv1NftDiscordTask.name:
                await lv1NftDiscordTask.execute(interaction);
                break;
            case lv1NftAwaitTask.name:
                await lv1NftAwaitTask.execute(interaction);
                break;
            default:
            // code block
            */
        }
    },
};