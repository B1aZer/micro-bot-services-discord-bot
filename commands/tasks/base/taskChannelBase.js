const TaskBase = require("./taskBase");

module.exports = class TaskChannelBase extends TaskBase {
    constructor(params) {
        super(params);
        this.reactionsNeeded = this.reactionsNeeded || 0;
        if (!this.channelEntryId) {
            throw new Error('Provide channel to look answer in (channelEntryId in JSON)');
        }
    }
    getContent() {
        /*
          let content = message.content;
          let attachments = message.attachments;
        
          if (content || attachments.size)
             return false;
        */
    }
    async getUniqueReactionUsersFrom(message, userId) {
        const reactions = message.reactions.cache;
        const uniqueUserIds = new Map();
        for (const [em, obj] of reactions) {
            const users = await obj.users.fetch();
            for (const [key, user] of users) {
                if (key !== userId) {
                    uniqueUserIds.set(key, user);
                }
            }
        }
        return uniqueUserIds;
    }
    async getReactionsNumberFor(message, userId) {
        const reactions = message.reactions.cache;
        let reactionsCount = 0;
        for (const [em, obj] of reactions) {
            const users = await obj.users.fetch();
            for (const [key, user] of users) {
                if (key === userId) {
                    reactionsCount++;
                }
            }
        }
        return reactionsCount;
    }
    async getMessageFrom(answer, interaction) {
        const messId = answer.split('/')[answer.split('/').length - 1];
        const channel = await interaction.client.channels.fetch(process.env.MOTIVATION_CHANNEL_ID);
        const message = await channel.messages.fetch(messId);
        return message;
    }
}