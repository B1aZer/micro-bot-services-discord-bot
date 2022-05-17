const { time, hyperlink } = require('@discordjs/builders');
const BotBase = require("./base/botBase")
const recentData = require("./data/bot.json")[1]

class RecentBot extends BotBase {
    async formatField(elements) {
        return Promise.resolve(`
        Created: ${time(new Date(elements[2].trim()))}
        ${hyperlink(elements[1])}
        `)
    }
}

module.exports = new RecentBot(recentData)