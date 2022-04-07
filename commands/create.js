const axios = require('axios');
const taskSchema = require('../models/task');

module.exports = {
    name: 'test',
    description: 'test',
    permissions: ["ADMINISTRATOR"],
    async execute(message, args, client, command, _Discord) {
        if (message.attachments.size > 0) {
            for (const msgFile of message.attachments) {
                axios(msgFile[1].attachment).then(async function (response) {
                    await taskSchema.create(response.data);
                    message.reply('created');
                });
            }

        }
    }
}