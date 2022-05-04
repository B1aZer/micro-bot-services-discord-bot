const fs = require('fs');

module.exports = (client, Discord) => {

    const command_files = fs.readdirSync('./ws').filter(file => file.endsWith('js'));
    for(const file of command_files) {
      //preload
      console.log(`${file} preload ws`);
      require(`../ws/${file}`);
    }

client.wss.on('connection', function connection(ws) {
    console.log('!connected!');
    client.wsClients.set(1, ws);
    const command_files = fs.readdirSync('./ws').filter(file => file.endsWith('js'));
    for(const file of command_files) {
      //preload
      console.log(`${file} preload ws`);
      let callb = require(`../ws/${file}`);
      ws.on('message', callb);
    }
    //ws.on('message', event.bind(null, client, Discord, data))
    /*
    ws.on('message', function message(jsonData) {
      try {
        let {event, data} = JSON.parse(jsonData);
        let callback = require(`../ws/${event}`);
        callback(Discord, client, ws, data);
      } catch (err) {
        console.error(err);
      }
    });
    */
    //ws.send('something');
  });


} 
