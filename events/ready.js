require('dotenv').config();

module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		const rolesManager = await client.guilds.fetch(process.env.guildId)
		client.roles = rolesManager.roles.cache
	},
};