
const axios = require('axios');
const Discord = require("discord.js");
const { inlineCode } = require('@discordjs/builders');
const lvTasks = require('./data/lvData.js');

module.exports = {
    levelUp: async (interaction) => {
        const allRoles = interaction.client.roles.sort((a, b) => a.rawPosition - b.rawPosition);
        const memberRoles = interaction.member.roles.cache.sort((a, b) => b.rawPosition - a.rawPosition);
        const highestRole = memberRoles.first();
        // level
        const highestRoleIndex = [...allRoles.values()].indexOf(highestRole);
        const userDB = (await axios.get(`${process.env.MONGODB_URL}/user`, { params: { userID: interaction.user.id } })).data;
        if (!userDB) {
            console.log(`No user ${interaction.member.id} in DB to levelUP`);
            return;
        }
        const numCompletedTasksForLevel = userDB.tasks?.filter(task => task.id.startsWith(`lv${highestRoleIndex}`));
        const numRequiredTasks = lvTasks[highestRoleIndex]?.tasksNum;
        if (numCompletedTasksForLevel === numRequiredTasks &&
            highestRoleIndex + 1 <= [...allRoles].length - 1) {
            const nextRole = [...allRoles][highestRoleIndex + 1][1];
            if (!interaction.member.roles.cache.some(role => role.name === nextRole.name)) {
                const embed = new Discord.MessageEmbed()
                    .setColor(process.env.DISCORD_EMBED_COLOR)
                    .setTitle(interaction.user.username)
                    .setDescription(`Level completed!

                        You've gained new role - \`${ nextRole.name }\`
                        Tasks solved: ${inlineCode(numCompletedTasksForLevel)}
                        Unlocked: ${inlineCode(lvTasks[highestRoleIndex].unlocked)}
                        Coins received: ${inlineCode(lvTasks[highestRoleIndex].coins)}
                    `)
                    .setAuthor({ name: 'GooDeeBot', iconURL: 'https://i.imgur.com/8nB0tI0.jpg' })
                    .setTimestamp();
                // coins
                await axios.put(`${process.env.MONGODB_URL}/user`, {
                    userID: interaction.user.id,
                    coins: userDB.coins + lvTasks[highestRoleIndex].coins
                });
                // message
                await interaction.followUp({ embeds: [embed], ephemeral: true });
                // role
                interaction.member.roles.add(nextRole);
                // log
                console.log(`user ${interaction.member.id} levelup'd to ${nextRole.name} with ${numCompletedTasksForLevel} tasks and ${highestRoleIndex} role`);
            }
        }
    },
}