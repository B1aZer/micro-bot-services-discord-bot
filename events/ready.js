module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		// roles cache
		const rolesManager = await client.guilds.fetch(process.env.GUILD_ID);
		client.roles = rolesManager.roles.cache;
		// handlers
		['ethereum_handler', 'opensea_handler'].forEach(handler => {
			require(`../handlers/${handler}`)(client);
		});
		console.log(`Successfully registered third party handlers.`);
	},
};