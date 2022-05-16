const { SlashCommandBuilder } = require('@discordjs/builders')
const lv1InfluencerTask = require('./lv1/influencer')

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
                .setName('nft1')
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
            case 'nft1':
                embed = new Discord.MessageEmbed()
                    .setColor("#00936f")
                    .setTitle('Level 1 Task')
                    .setDescription(`Name most visually appeling NFT project.\r\nSubmit your answer in following form ${codeBlock('/lv1 nft1 <project_name>')}`)
                    .setAuthor({ name: 'GooDeeBot', iconURL: 'https://i.imgur.com/8nB0tI0.jpg' })
                    .setTimestamp()
                break;
            default:
            // code block
        }
    },
};