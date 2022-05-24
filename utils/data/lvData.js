const lv1Tasks = require('../../commands/tasks/data/lv1.json');
const lv2Tasks = require('../../commands/tasks/data/lv2.json');
const lv3Tasks = require('../../commands/tasks/data/lv3.json');
const lv4Tasks = require('../../commands/tasks/data/lv4.json');
const lv5Tasks = require('../../commands/tasks/data/lv5.json');

function reduceTasks(tasks) {
    return tasks.reduce((prev, curr) => prev + (curr.submitionsAllowed || 1), 0);
}

// finish the level
module.exports = {
    1: {
        tasksNum: reduceTasks(lv1Tasks),
        unlocked: 'Bot group',
        coins: 50,
    },
    2: {
        tasksNum: reduceTasks(lv2Tasks),
        unlocked: '/funny command',
        coins: 50,
    },
    3: {
        tasksNum: reduceTasks(lv3Tasks),
        unlocked: '/motivate command',
        coins: 50,
    },
    4: {
        tasksNum: reduceTasks(lv4Tasks),
        unlocked: '/meme command',
        coins: 50,
    },
    5: {
        tasksNum: reduceTasks(lv5Tasks),
        unlocked: '/culture command',
        coins: 50,
    },
}