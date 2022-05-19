const BotBase = require("./base/botBase")
const mintingData = require("./data/bot.json")[0]
const { inlineCode, hyperlink } = require('@discordjs/builders');

class MintingBot extends BotBase {
    formatField(elements) {
        return `
        Mints: ${inlineCode(elements[1])}
        ${hyperlink(elements[2])}
        `;
    }
}

module.exports = new MintingBot(mintingData)