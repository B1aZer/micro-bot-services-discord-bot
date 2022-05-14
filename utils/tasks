let roles = require('./roles');

module.exports = {
    findByName: (client, name) => client.tasks.find(task => task.name === name),
    findByXP: (client, profileData) => {
        let tasks = [];
        for (let [name, task] of client.tasks) {
            if (roles.check({}, [], client, task, {}, profileData)) {
                tasks.push(task);
            }
        }
        return tasks;
    }
}