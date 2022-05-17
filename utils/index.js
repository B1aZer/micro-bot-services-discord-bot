require('dotenv').config();
// TODO: to a separate file
const lv1Tasks = require('../commands/tasks/data/lv1.json')
const axios = require('axios')
const Discord = require("discord.js");
const { inlineCode } = require('@discordjs/builders');
const lvTasks = {
    1: {
        tasks: lv1Tasks,
        commandUnlocked: '/motivate'
    },
    2: {
        tasks: [],
        commandUnlocked: ''
    },
}

module.exports = {
    levelUp: async (interaction) => {
        const allRoles = interaction.client.roles.sort((a, b) => a.rawPosition - b.rawPosition)
        const memberRoles = interaction.member.roles.cache.sort((a, b) => b.rawPosition - a.rawPosition)
        const highestRole = memberRoles.first()
        // level
        const highestRoleIndex = [...allRoles.values()].indexOf(highestRole)
        const userDB = (await axios.get(`${process.env.MONGODB_URL}/user`, { params: { userID: interaction.user.id } })).data
        if (!userDB) {
            console.log(`No user ${interaction.member.id} in DB to levelUP`)
            return;
        }
        const numCompletedTasks = userDB.tasks?.length
        const numRequiredTasks = lvTasks[highestRoleIndex]?.tasks.length
        if (numCompletedTasks === numRequiredTasks &&
            highestRoleIndex + 1 <= [...allRoles].length - 1) {
            const nextRole = [...allRoles][highestRoleIndex + 1][1]
            if (!interaction.member.roles.cache.some(role => role.name === nextRole.name)) {
                // role
                interaction.member.roles.add(nextRole);
                const embed = new Discord.MessageEmbed()
                    .setColor(process.env.DISCORD_EMBED_COLOR)
                    .setTitle(interaction.user.username)
                    .setDescription(`Level completed.
                        Tasks solved: ${inlineCode(numCompletedTasks)}
                        Command unlocked: ${inlineCode(lvTasks[highestRoleIndex].commandUnlocked)}
                        Coins received: ${inlineCode('100')}
                    `)
                    .setAuthor({ name: 'GooDeeBot', iconURL: 'https://i.imgur.com/8nB0tI0.jpg' })
                    .setTimestamp()
                // coins
                await axios.put(`${process.env.MONGODB_URL}/user`, {
                    userID: interaction.user.id,
                    coins: userDB.coins + 100
                })
                // message
                await interaction.followUp({embeds: [embed]})
            }
        }
    },
}