const profiles = require("../utils/profiles");

// name is the module
module.exports = async (Discord, client, ws, data) => {
    let profile = await profiles.getById(data);
    ws.send(JSON.stringify({ event: 'login', data: `${profile.xp}`}))
}