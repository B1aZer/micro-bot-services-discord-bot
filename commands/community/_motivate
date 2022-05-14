const axios = require('axios');

module.exports = {
    name: 'motivate',
    aliases: ['mv'],
    cooldown: 3,
    description: 'Show a motivation image.',
    role: 'Newcomer',
    async execute(message, args, client, command, _Discord) {
        try {
            console.log('send req');
            const response = await axios.get('http://localhost:3031/motivate')
            console.log('rec resp');
            message.channel.send({files: [response.data.image]})
        } catch {
            console.log('no motivate');
        }

    }
}