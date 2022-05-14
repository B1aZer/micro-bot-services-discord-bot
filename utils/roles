// Assign initial role
// Assing roles based on XP
const xp = require("../utils/xp");
const config = require("../config");
//TODO: update
// 10 xp = 1 usd
// legend = wp access = 0.2-0.5 eth
// skip level = 0.05
let rolesArray = [
    ['NE0',            10000000],
    ['Tester',         1000000],
    ['White',          10000],
    ['Legend',         10000],

    ['Elder',          0],
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
    ['Beginner',       4500],

    ['Noob',           1500],// 25 + 50 + 100 + 200 x 2
    ['Newbie',         600], // 25 + 50 + 100 x 2
    ['First-timer',    250], // 25 + 50 x 2
    ['Newcomer',       100], // 25 x 4
    ['Dummy',          0],
]

module.exports = {
    assign: (message, args, client, command, _Discord, profileData) => {       
        let roleName = module.exports.meetsRole(profileData.xp);
        config.log && console.log(`Trying to assign ${profileData.userID} user ${roleName} role based on ${profileData.xp} xp`);
        let role = message.member.guild.roles.cache.find(role => role.name === roleName);
        if (!message.member.roles.cache.some(role => role.name === roleName)) {
            config.log && console.log(`Assigning role`);
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