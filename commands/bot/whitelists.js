const { inlineCode, time, hyperlink } = require('@discordjs/builders');
const BotBase = require("./base/botBase")
const data = require("./data/bot.json")[4]

class WhitelistsBot extends BotBase {
    async getSliced(log) {
        return Promise.resolve(log.split('\n')
            // shuffle
            .sort((a, b) => 0.5 - Math.random())
            .slice(0, this.count)
            .sort((a, b) => new Date(b.split(this.separator)[2].trim()) - new Date(a.split(this.separator)[2].trim())))
    }
    async formatField(elements) {
        return Promise.resolve(`
        Followers: ${inlineCode(elements[3])}
        Created: ${time(new Date(elements[2].trim()))}
        ${hyperlink(elements[1])}
        `)
    }
}

module.exports = new WhitelistsBot(data)