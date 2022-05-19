module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		const rolesManager = await client.guilds.fetch(process.env.GUILD_ID);
		client.roles = rolesManager.roles.cache;
		['ethereum_handler', 'opensea_handler'].forEach(handler => {
			require(`../handlers/${handler}`)(client);
		});
		console.log(`Successfully registered third party handlers.`);
	},
};