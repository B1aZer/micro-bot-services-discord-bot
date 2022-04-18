var fs = require('fs');

module.exports = {
    findByName: (client, name) => client.tasks.find(task => task.name === name),
    findByXP: (xp) => {
        
    }
}