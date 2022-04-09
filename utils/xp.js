const profiles = require("../utils/profiles")

module.exports = {
    give: async (message, args, client, _Discord, _profileData) => {
        let amount = parseInt(args[0], 10);
        let profileData = _profileData || await profiles.get(message, args[1], client);
        try {
            await profileData.updateOne({$inc: {xp: amount}})
        } catch (err) {
            console.log(err);
        }
        return true;
    },
    set: () => {

    }
}