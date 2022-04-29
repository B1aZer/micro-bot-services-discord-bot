const profileModel = require('../models/profile');

module.exports = {
    get: async (message, userID, client) => {
        let profileData;
        try {
            profileData = await profileModel.findOne({userID: message.author.id, guildID: message.guild.id})
            if (!profileData) {
                profileData = await profileModel.create({
                    userID: message.author.id,
                    guildID: message.guild.id,
                    xp: 0,
                })
            }
        } catch (err) {
            console.log(err);
        }
        return profileData;
    },
    getById: async (userID) => {
        return await profileModel.findOne({userID: userID, guildID: '958742337394208808'});
    }
}
