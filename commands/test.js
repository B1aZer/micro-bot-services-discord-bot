module.exports = {
    name: 'test',
    description: 'test',
    permissions: ["ADMINISTRATOR"],
    cooldown: 10,
    async execute(message, args, client, _Discord) {
        message.reply('test');
    }
}