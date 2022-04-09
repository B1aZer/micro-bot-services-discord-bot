// Assign initial role
// Assing roles based on XP
const xp = require("../utils/xp");
const config = require("../config");

let rolesArray = [
    ['NE0',            10000000],
    ['Tester',         1000000],
    ['Legend',         10000],
    //['Elder',          0],
    ['Mythical',       5000],
    ['Legendary',      4000],
    ['Indestructible', 3000],
    ['Master',         2800],
    ['Professional',   2600],
    ['Prodigy',        2400],
    ['Intellect',      2200],
    ['Expert',         2000],
    ['Skillful',       1800],  
    ['Competent',      1600],
    ['Experienced',    1400],
    ['Accustomed',     1200],
    ['Apprentice',     1000],
    ['Student',        900],
    ['Rookie',         800],
    ['Novice',         700],
    ['Trainee',        600],
    ['Amateur',        500],
    ['Beginner',       400],
    ['Noob',           300],
    ['Newbie',         200],
    ['Newcomer',       100],
    ['Dummy',          0],
]

module.exports = {
    pre: async (message, args, client, command, _Discord, profileData) => {
        //if (profileData.xp < 100) {
            //await xp.give(message, [100], client, _Discord, profileData);
            //message.channel.send('Congrats!');
        //}
    },
    assign: (message, args, client, command, _Discord, profileData) => {       
        let roleName = module.exports.meetsRole(profileData.xp);
        config.log && console.log(`Assigning ${profileData.userID} user ${roleName} role based on ${profileData.xp} xp`);
        let role = message.member.guild.roles.cache.find(role => role.name === roleName);
        if (!message.member.roles.cache.some(role => role.name === roleName)) {
            config.log && console.log(`Assign role`);
            message.member.roles.add(role);
        }
        return true;
    },
    roleXP: (role) => {
        return (rolesArray.find((roleTup) => role === roleTup[0]))[1];
    },
    meetsRole: (xpVal) => {
        return (rolesArray.find((roleTup) => xpVal >= roleTup[1]))[0];
    },
    check: (message, args, client, command, _Discord, profileData) => {
        // CHECK COMMAND VISIBILITY BY ROLE
        if (!command.role || module.exports.roleXP(command.role) <= profileData.xp) {
            return true;
        }
        return false;
    }
}