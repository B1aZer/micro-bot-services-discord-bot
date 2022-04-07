const profiles = require("../utils/profiles")

module.exports = {
    give: async (message, args, client, _Discord) => {
        let amount = parseInt(args[0], 10);
        let profileData = await profiles.get(message, args[1], client);
        try {
            await profileData.updateOne({$inc: {xp: amount}})
        } catch (err) {
            console.log(err);
        }
        return true;
    }
}