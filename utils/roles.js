// Assign initial role
// Assing roles based on XP
let rolesArray = [
    ['Newcomer',       100],
    ['Newbie',         200],
    ['Noob',           300],
    ['Beginner',       400],
    ['Amateur',        500],
    ['Trainee',        600],
    ['Novice',         700],
    ['Rookie',         800],
    ['Student',        900],
    ['Apprentice',     1000],
    ['Accustomed',     1200],
    ['Experienced',    1400],
    ['Competent',      1600],
    ['Skillful',       1800],
    ['Expert',         2000],
    ['Intellect',      2200],
    ['Prodigy',        2400],
    ['Professional',   2600],
    ['Master',         2800],
    ['Indestructible', 3000],
    ['Legendary',      4000],
    ['Mythical',       5000],
    //['Elder',          0],
    ['Legend',         10000],
    ['Tester',         1000000],
]
module.exports = {
    assign: (message, args, client, command, _Discord) => {
        //let currentRole = client.user.role;
        //let xpRole = getRoleBasedOn(xp)
        // if (currentRole !== xpRole) {
            // assignRole(user, xpRole)
        //}
//         var role = message.guild.roles.find(role => role.name === "MyRole");
// message.member.addRole(role);
        return true;
    },
    check: (message, args, client, command, _Discord, profileData) => {
        if (!command.xp || command.xp <= profileData.xp) {
            return true;
        }
        return false;
    }
}