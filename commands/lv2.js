const { SlashCommandBuilder } = require('@discordjs/builders');
const defaultCommandDescription = 'Run command without params to see the task description.';
const lv2ComFunnyTask = require('./tasks/lv2/funny');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('lv2')
        .setDescription(defaultCommandDescription)
        .addSubcommand(subcommand =>
            subcommand
                .setName(lv2ComFunnyTask.name)
                .setDescription(defaultCommandDescription)
                .addStringOption(
                    option => option
                        .setName('answer')
                        .setDescription('Message Link. Right Click => Copy Message Link')))
    ,
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();
        switch (subcommand) {
            case lv2ComFunnyTask.name:
                await lv2ComFunnyTask.execute(interaction);
                break;
            default:
            // code block
        }
    },
};