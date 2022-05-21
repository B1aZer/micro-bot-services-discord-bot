const { SlashCommandBuilder } = require('@discordjs/builders');
const defaultCommandDescription = 'Run command without params to see the task description.';
const lv3ComMotTask = require('./tasks/lv3/motivation');
const lv3MotReactTask = require('./tasks/lv3/motivationReact');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('lv3')
        .setDescription(defaultCommandDescription)
        .addSubcommand(subcommand =>
            subcommand
                .setName(lv3ComMotTask.name)
                .setDescription(defaultCommandDescription)
                .addStringOption(
                    option => option
                        .setName('answer')
                        .setDescription('Message Link. Right Click => Copy Message Link')))
        .addSubcommand(subcommand =>
            subcommand
                .setName(lv3MotReactTask.name)
                .setDescription(defaultCommandDescription)
                .addStringOption(
                    option => option
                        .setName('answer')
                        .setDescription('Message Link. Right Click => Copy Message Link')))
    ,
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();
        switch (subcommand) {
            case lv3ComMotTask.name:
                await lv3ComMotTask.execute(interaction);
                break;
            case lv3MotReactTask.name:
                await lv3MotReactTask.execute(interaction);
                break;
            default:
            // code block
        }
    },
};