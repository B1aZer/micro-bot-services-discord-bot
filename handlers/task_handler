const fs = require('fs');

module.exports = (client, Discord) => {
  const command_files = fs.readdirSync('./tasks').filter(file => file.endsWith('js'));
  for(const file of command_files) {
    const command = require(`../tasks/${file}`);
    if (command.name) {
      console.log(`${command.name} set task`);
      client.tasks.set(command.name, command);
    } else {
      continue;
    }
  }
} 
