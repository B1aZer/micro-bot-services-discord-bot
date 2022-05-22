const { SlashCommandBuilder } = require('@discordjs/builders');
const defaultCommandDescription = 'Run command without params to see the task description.';
const lv5dataPost = require('./tasks/data/lv5.json')[0];
const lv5basePost = require('./tasks/base/taskChannelBasePost');
const lv5postTask = new lv5basePost(lv5dataPost);
const lv5dataPostReact = require('./tasks/data/lv5.json')[1];
const lv5basePostReact = require('./tasks/base/taskChannelBasePostReact');
const lv5postReactTask = new lv5basePostReact(lv5dataPostReact);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('lv5')
        .setDescription(defaultCommandDescription)
        .addSubcommand(subcommand =>
            subcommand
                .setName(lv5postTask.name)
                .setDescription(defaultCommandDescription)
                .addStringOption(
                    option => option
                        .setName('answer')
                        .setDescription('Message Link. Right Click => Copy Message Link')))
        .addSubcommand(subcommand =>
            subcommand
                .setName(lv5postReactTask.name)
                .setDescription(defaultCommandDescription)
                .addStringOption(
                    option => option
                        .setName('answer')
                        .setDescription('Message Link. Right Click => Copy Message Link')))
    ,
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();
        switch (subcommand) {
            case lv5postTask.name:
                await lv5postTask.execute(interaction);
                break;
            case lv5postReactTask.name:
                await lv5postReactTask.execute(interaction);
                break;
            default:
            // code block
        }
    },
};