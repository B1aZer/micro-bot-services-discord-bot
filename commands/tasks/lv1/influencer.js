const data = require('../data/lv1.json')[0];
const taskBase = require('../base/taskBase');
const twitter = require('../../../../_utils/twitter');

class InfluencerClass extends taskBase {
    async checkIfErr(answer) {
        try {
            console.log(`checking user ${answer}`);
            await twitter.v1.user({ screen_name: answer });
            return false;
        } catch (err) {
            return `No such user exists! Provide a valid screen name.`;
        }
    }
}

module.exports = new InfluencerClass(data);