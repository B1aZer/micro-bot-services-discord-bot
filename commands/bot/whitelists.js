const { inlineCode, time, hyperlink } = require('@discordjs/builders');
const BotBase = require("./base/botBase")
const data = require("./data/bot.json")[4]

class WhitelistsBot extends BotBase {
    getSliced(log) {
        return log.split('\n')
            //randomize
            .sort((a, b) => 0.5 - Math.random())
            .slice(0, 25)
            .sort((a, b) => new Date(b.split('|')[2].trim()) - new Date(a.split('|')[2].trim()));
    }
    formatField(elements) {
        return `
        Followers: ${inlineCode(elements[3])}
        Created: ${time(new Date(elements[2].trim()))}
        ${hyperlink(elements[1])}
        `
    }
}

module.exports = new WhitelistsBot(data)