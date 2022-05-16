const { SlashCommandBuilder } = require('@discordjs/builders')
const trendingCommand = require('./bot/trending')
const mintingCommand = require('./bot/minting')
const recentCommand = require('./bot/recent')
const upcomingCommand = require('./bot/upcoming')
const whitelistsCommand = require('./bot/whitelists')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bot')
        .setDescription('Bot commands.')
        .addSubcommand(subcommand =>
            subcommand
                .setName(trendingCommand.name)
                .setDescription(trendingCommand.description))
        .addSubcommand(subcommand =>
            subcommand
                .setName(mintingCommand.name)
                .setDescription(mintingCommand.description))
        .addSubcommand(subcommand =>
            subcommand
                .setName(recentCommand.name)
                .setDescription(recentCommand.description))
        .addSubcommand(subcommand =>
            subcommand
                .setName(upcomingCommand.name)
                .setDescription(upcomingCommand.description))
        .addSubcommand(subcommand =>
            subcommand
                .setName(whitelistsCommand.name)
                .setDescription(whitelistsCommand.description))

    ,
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand()
        switch (subcommand) {
            case trendingCommand.name:
                await trendingCommand.execute(interaction)
                break;
            case mintingCommand.name:
                await mintingCommand.execute(interaction)
                break;
            case recentCommand.name:
                await recentCommand.execute(interaction)
                break;
            case upcomingCommand.name:
                await upcomingCommand.execute(interaction)
                break;
            case whitelistsCommand.name:
                await whitelistsCommand.execute(interaction)
                break;
            default:
            // code block
        }
    },
};