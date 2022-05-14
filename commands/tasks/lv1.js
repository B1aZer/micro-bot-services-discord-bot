const { SlashCommandBuilder } = require('@discordjs/builders');
const { inlineCode, codeBlock } = require('@discordjs/builders');
const Discord = require("discord.js");
const axios = require('axios');
const fs = require('fs');

const lv1Task1Id = 'lv1_influencer'

const loggerInfluencer = fs.createWriteStream(`/home/hipi/Sites/GooDee/_utils/out/tasks/${lv1Task1Id}.log`, {
    flags: 'a'
});

module.exports = {
    data: new SlashCommandBuilder()
        .setName(lv1Task1Id.split('_')[0])
        .setDescription('Run command to see the task description')
        .addSubcommand(subcommand =>
            subcommand
                .setName(lv1Task1Id.split('_')[1])
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
        const answer = interaction.options.getString('answer');
        switch (interaction.options.getSubcommand()) {
            case lv1Task1Id.split('_')[1]:
                // dumb reply
                await interaction.deferReply({ ephemeral: true });
                const embed = new Discord.MessageEmbed()
                    .setColor("#00936f")
                    .setTitle('Level 1 Task')
                    .setDescription(`
                        Name most influental twitter account in NFT space.\r\n
                        Submit your answer in following form
                        ${codeBlock(`/${lv1Task1Id.split('_')[0]} ${lv1Task1Id.split('_')[1]} <twitter_screen_name>`)}
                    `)
                    .setAuthor({ name: 'GooDeeBot', iconURL: 'https://i.imgur.com/8nB0tI0.jpg' })
                    .setTimestamp()
                if (!answer) {
                    interaction.editReply({ embeds: [embed] })
                    return;
                };
                // TODO: check twitter
                // save to db
                let rr = await axios.put(`${process.env.MONGODB_URL}/user`, {
                    userID: interaction.user.id,
                    tasks: [{
                        id: lv1Task1Id,
                        answer: answer
                    }]
                })
                console.log(rr.data);
                // save to disk
                loggerInfluencer.write(`${interaction.user.tag} | ${answer}\r\n`)
                // save to channel
                const channel = interaction.client.channels.cache.get(process.env.LV1_INFLUENCER_CHANNEL_ID);
                channel.send(`${interaction.user.tag} | ${answer}`);
                // reply
                await interaction.editReply('Submitted');
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