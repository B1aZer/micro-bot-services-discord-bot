const data = require('../data/lv2.json')[0];
const taskBase = require('../base/taskBase');

class MotivationClass extends taskBase {
    async checkIfErr(answer, interaction) {
        try {
            console.log(`checking user answer ${answer}`);
            const messId = answer.split('/')[answer.split('/').length - 1];
            const channel = await interaction.client.channels.fetch(process.env.MOTIVATION_CHANNEL_ID);
            const message = await channel.messages.fetch(messId);
            if (message.author.id !== interaction.member.id) {
                return `This is not yours message!`;
            }
            let content = message.content;
            let attachments = message.attachments;
            if (content || attachments.size)
                return false;
            return `That's not a valid Message Link.`;
        } catch (err) {
            console.log(err);
            return `That's not a valid Message Link.`;
        }
    }
}

module.exports = new MotivationClass(data);