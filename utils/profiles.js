//const profileModel = require('../models/profile');
const axios = require('axios');

module.exports = {
    get: (message, userID, client) => {
        return module.exports.getById(message.author.id);
    },
    getById: async (userID) => {
        let response = {};
        try {
            response = await axios.put('http://localhost:3011/profile', {
                userID: userID,
            })
        } catch (err) {
            console.log(err);
        }
        return response.data;
    }
}
