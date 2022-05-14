const profiles = require("../utils/profiles");
const config = require("../config");

module.exports = {
    give: async (message, args, client, _Discord, _profileData) => {
        let amount = parseInt(args[0], 10);
        let profileData = _profileData || await profiles.get(message, args[1], client);
        try {
            profileData.xp += amount;
            config.log && console.log(`Adding ${amount} xp to ${profileData.userID}`);
            await profileData.save();
        } catch (err) {
            console.log(err);
        }
        return true;
    },
    set: async (message, args, client, _Discord, _profileData) => {
        let amount = parseInt(args[0], 10);
        let profileData = _profileData || await profiles.get(message, args[1], client);
        try {
            profileData.xp = amount;
            config.log && console.log(`Setting ${profileData.userID} xp to ${amount}`);
            await profileData.save();
        } catch (err) {
            console.log(err);
        }
        return true;
    },
    show: (message, args, client, _Discord, _profileData) => {
        return _profileData.xp;
    }
}