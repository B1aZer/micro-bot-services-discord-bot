const data = require('../data/lv3.json')[0];
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
            /*
            let content = message.content;
            let attachments = message.attachments;
          
            if (content || attachments.size)
               return false;
            */
            const reactions = message.reactions.cache;
            const uniqueUserIds = new Map();
            for (const [em, obj] of reactions) {
                const users = await obj.users.fetch();
                for (const [key, user] of users) {
                    if (key !== message.author.id) {
                        uniqueUserIds.set(key, user);
                    }
                }
            }
            console.log(`unique users of a message ${messId}: ${uniqueUserIds.size}, needed: ${this.reactionsNeeded}`);
            if (uniqueUserIds.size >= (this.reactionsNeeded || 1)) {
                return false;
            }
            return `That's not a valid entry.`;
        } catch (err) {
            console.log(err);
            return `That's not a valid Message Link.`;
        }
    }
}

module.exports = new MotivationClass(data);