const axios = require('axios');

module.exports = class CommunityBase {
    constructor(params) {
        Object.assign(this, params);
    }
    async execute(interaction) {
        await interaction.deferReply();
        const response = await axios.get(`${process.env.REDDIT_URL}${this.url}`)
        console.log(`received reply ${JSON.stringify(response.data)}`);
        interaction.editReply({ files: [response.data.image] })
    }
}