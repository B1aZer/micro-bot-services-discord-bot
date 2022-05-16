const lv1Tasks = require('../commands/tasks/data/lv1.json')
const axios = require('axios')

module.exports = {
    levelUp: async (interaction) => {
        const allRoles = interaction.client.roles.sort((a, b) => a.rawPosition - b.rawPosition)
        const memberRoles = interaction.member.roles.cache.sort((a, b) => b.rawPosition - a.rawPosition)
        const highestRole = memberRoles.first()
        const highestRoleIndex = [...allRoles.values()].indexOf(highestRole)
        // get level
        console.log(highestRoleIndex);
        // get num required tasks for level
        console.log(lv1Tasks.length);
        // get num completed tasks for level
        console.log((await axios.get(`${process.env.MONGODB_URL}/user`, { params: { userID: interaction.user.id } })).data.tasks.length);
        // if (num completed === num required)
        if (highestRoleIndex + 1 <= [...allRoles].length - 1) {
            const nextRole = [...allRoles][highestRoleIndex + 1][1]
            //interaction.member.roles.add(nextRole);
            //fancy levelup message, visible or no?  Visible to log channel
            //https://discord.com/channels/958742337394208808/959174142798745670/964171996218921007
            /*
            1. Levels (left panel channels) with new quests = message
            2. Command drop
            3. Coins drop
*/
        }
    },
}