const { inlineCode, time, hyperlink } = require('@discordjs/builders');
const BotBase = require("./base/botBase")
const data = require("./data/bot.json")[3]

class UpcomingBot extends BotBase {
    formatField(elements) {
        return `
        Mint Date: ${time(new Date(elements[1]?.trim()))}
        Twitter Followers: ${inlineCode(elements[3])}
        ${hyperlink(elements[2])}
        `
    }
}

module.exports = new UpcomingBot(data)