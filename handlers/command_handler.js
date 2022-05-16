require('dotenv').config();
const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

module.exports = (client) => {
	const commands = []
	const generalCommandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
	//const taskCommandFiles = fs.readdirSync('./commands/tasks').filter(file => file.endsWith('.js'))
	//	.map(el => `tasks/${el}`);
	const commandFiles = [...generalCommandFiles]
	for (const file of commandFiles) {
		const command = require(`../commands/${file}`);
		client.commands.set(command.data.name, command);
		commands.push(command.data.toJSON());
	}

	const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

	rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands })
		.then(() => console.log('Successfully registered application commands.'))
		.catch(console.error);
}