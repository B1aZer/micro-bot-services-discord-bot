const { SlashCommandBuilder } = require('@discordjs/builders');
const defaultCommandDescription = 'Run command without params to see the task description.';
const lv2ComMotTask = require('./tasks/lv2/motivation');
const lv2MotReactTask = require('./tasks/lv2/motivationReact');

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
        .addSubcommand(subcommand =>
            subcommand
                .setName(lv2MotReactTask.name)
                .setDescription(defaultCommandDescription)
                .addStringOption(
                    option => option
                        .setName('answer')
                        .setDescription('Message Link. Right Click => Copy Message Link')))
    ,
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();
        switch (subcommand) {
            case lv2ComMotTask.name:
                await lv2ComMotTask.execute(interaction);
                break;
            case lv2MotReactTask.name:
                await lv2MotReactTask.execute(interaction);
                break;
            default:
            // code block
        }
    },
};