const { SlashCommandBuilder } = require('@discordjs/builders');
const defaultCommandDescription = 'Run command without params to see the task description.';
const lv4dataPost = require('./tasks/data/lv4.json')[0];
const lv4basePost = require('./tasks/base/taskChannelBasePost');
const lv4postTask = new lv4basePost(lv4dataPost);
const lv4dataPostReact = require('./tasks/data/lv4.json')[1];
const lv4basePostReact = require('./tasks/base/taskChannelBasePostReact');
const lv4postReactTask = new lv4basePostReact(lv4dataPostReact);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('lv4')
        .setDescription(defaultCommandDescription)
        .addSubcommand(subcommand =>
            subcommand
                .setName(lv4postTask.name)
                .setDescription(defaultCommandDescription)
                .addStringOption(
                    option => option
                        .setName('answer')
                        .setDescription('Message Link. Right Click => Copy Message Link')))
        .addSubcommand(subcommand =>
            subcommand
                .setName(lv4postReactTask.name)
                .setDescription(defaultCommandDescription)
                .addStringOption(
                    option => option
                        .setName('answer')
                        .setDescription('Message Link. Right Click => Copy Message Link')))
    ,
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();
        switch (subcommand) {
            case lv4postTask.name:
                await lv4postTask.execute(interaction);
                break;
            case lv4postReactTask.name:
                await lv4postReactTask.execute(interaction);
                break;
            default:
            // code block
        }
    },
};