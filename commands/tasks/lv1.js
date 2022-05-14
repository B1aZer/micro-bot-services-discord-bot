const { SlashCommandBuilder } = require('@discordjs/builders');
const { inlineCode, codeBlock } = require('@discordjs/builders');
const Discord = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('lv1')
        .setDescription('Run command to see the task description')
        .addSubcommand(subcommand =>
            subcommand
                .setName('influencer')
                .setDescription('Name most influental twitter account in NFT space.')
                .addStringOption(
                    option => option
                        .setName('answer')
                        .setDescription('Screen Name of Twitter Account')))
        .addSubcommand(subcommand =>
            subcommand
                .setName('nft1')
                .setDescription('Name most visually appeling NFT project.')
                .addStringOption(
                    option => option
                        .setName('answer')
                        .setDescription('Name of the NFT project')))

    ,
    async execute(interaction) {
        const screenName = interaction.options.getString('screen_name');
        let embed;
        switch (interaction.options.getSubcommand()) {
            case 'influencer':
                embed = new Discord.MessageEmbed()
                    .setColor("#00936f")
                    .setTitle('Level 1 Task')
                    .setDescription(`Name most influental twitter account in NFT space.\r\nSubmit your answer in following form ${codeBlock('/lv1 influencer <twitter_screen_name>')}`)
                    .setAuthor({ name: 'GooDeeBot', iconURL: 'https://i.imgur.com/8nB0tI0.jpg' })
                    .setTimestamp()
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
        interaction.channel.send({ embeds: [embed] })
},
};