const { inlineCode, time, hyperlink } = require('@discordjs/builders');
const BotBase = require("./base/botBase")
const trendingData = require("./data/bot.json")[2]

class TrendingBot extends BotBase {
    formatField(elements) {
        return `
        Followers: ${inlineCode(elements[2])}
        Created: ${time(new Date(elements[1]?.trim()))}
        ${hyperlink('https://twitter.com/' + elements[0])}
        `
    }
}

module.exports = new TrendingBot(trendingData)