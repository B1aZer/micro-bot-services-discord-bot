const taskChannelBase = require("./taskChannelBase");

module.exports = class TaskChannelBasePost extends taskChannelBase {
    async checkIfErr(answer, interaction) {
        try {
            console.log(`checking user answer ${answer}`);
            const message = await this.getMessageFrom(answer, interaction);
            if (message.author.id === interaction.member.id) {
                return `This is your message!`;
            }
            const reactionsCount = await this.getReactionsNumberFor(message, interaction.member.id);
            console.log(`user ${interaction.member.id} reacted to ${message.id}: ${reactionsCount} times, needed: ${this.reactionsNeeded}`);
            if (reactionsCount >= this.reactionsNeeded) {
                return false;
            }
            return `That's not a valid entry.`;
        } catch (err) {
            console.log(err);
            return `That's not a valid Message Link.`;
        }
    }
}