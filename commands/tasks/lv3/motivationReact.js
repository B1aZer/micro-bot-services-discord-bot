const data = require('../data/lv3.json')[1];
const taskBase = require('../base/taskBase');

class MotivationClass extends taskBase {
    async checkIfErr(answer, interaction) {
        try {
            console.log(`checking user answer ${answer}`);
            const messId = answer.split('/')[answer.split('/').length - 1];
            const channel = await interaction.client.channels.fetch(process.env.MOTIVATION_CHANNEL_ID);
            const message = await channel.messages.fetch(messId);
            if (message.author.id === interaction.member.id) {
                return `This is yours message!`;
            }
            const reactions = message.reactions.cache;
            let reactionsCount = 0;
            for (const [em, obj] of reactions) {
                const users = await obj.users.fetch();
                for (const [key, user] of users) {
                    if (key === interaction.member.id) {
                        reactionsCount++;
                    }
                }
            }
            console.log(`user ${interaction.member.id} reacted to ${messId}: ${reactionsCount} times, needed: ${this.reactionsNeeded}`);
            if (reactionsCount >= (this.reactionsNeeded || 1)) {
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