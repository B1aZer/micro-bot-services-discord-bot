const BotBase = require("./base/botBase")
const mintingData = require("./data/bot.json")[0]

module.exports = new BotBase(mintingData)