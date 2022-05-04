const profiles = require('../utils/profiles');

module.exports = {
    name: 'test',
    aliases: ['tt'],
    description: 'Test task.',
    role: 'Dummy',
    execute(message, args, client, command, _Discord) {  
        //console.log(`get profile for ${message.author.id}`);   
        //profiles.get(message.author.id);
    }
}