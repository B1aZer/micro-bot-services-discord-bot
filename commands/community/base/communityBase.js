const axios = require('axios');

module.exports = class CommunityBase {
    constructor(params) {
        Object.assign(this, params);
    }
    async execute(interaction) {
        const response = await axios.get(`${process.env.REDDIT_URL}${this.url}`)
        interaction.reply({ files: [response.data.image] })
    }
}