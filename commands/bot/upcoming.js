const { inlineCode, time, hyperlink } = require('@discordjs/builders');
const BotBase = require("./base/botBase")
const data = require("./data/bot.json")[3]

class UpcomingBot extends BotBase {
    async formatField(elements) {
        return Promise.resolve(`
        Mint Date: ${time(new Date(elements[1].trim()))}
        Twitter Followers: ${inlineCode(elements[2])}
        ${hyperlink(elements[3])}
        `)
    }
}

module.exports = new UpcomingBot(data)