const lv1Tasks = require('../../commands/tasks/data/lv1.json');
const lv2Tasks = require('../../commands/tasks/data/lv2.json');
const lv3Tasks = require('../../commands/tasks/data/lv3.json');

function reduceTasks(tasks) {
    return tasks.reduce((prev, curr) => prev + (curr.submitionsAllowed || 1), 0);
}

// finish the level
module.exports = {
    1: {
        tasksNum: reduceTasks(lv1Tasks),
        unlocked: 'Bot group',
        coins: 100,
    },
    2: {
        tasksNum: reduceTasks(lv2Tasks),
        unlocked: '/funny command',
        coins: 100,
    },
    3: {
        tasksNum: reduceTasks(lv3Tasks),
        unlocked: '/motivate command',
        coins: 100,
    },
}