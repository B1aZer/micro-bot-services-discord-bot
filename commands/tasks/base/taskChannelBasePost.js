const taskChannelBase = require("./taskChannelBase");

module.exports = class TaskChannelBasePost extends taskChannelBase {
    async checkIfErr(answer, interaction) {
        try {
            console.log(`checking user answer ${answer}`);
            const message = await this.getMessageFrom(answer, interaction);
            if (message.author.id !== interaction.member.id) {
                return `This is not your message!`;
            }
            const uniqueUserIds = await this.getUniqueReactionUsersFrom(message, message.author.id);
            console.log(`unique users of a message ${message.id}: ${uniqueUserIds.size}, needed: ${this.reactionsNeeded}`);
            if (uniqueUserIds.size >= this.reactionsNeeded) {
                return false;
            }
            return `That's not a valid entry.`;
        } catch (err) {
            console.log(err);
            return `That's not a valid Message Link.`;
        }
    }
}