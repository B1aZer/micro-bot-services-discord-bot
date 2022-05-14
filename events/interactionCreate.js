const cooldowns = require("../utils/cooldowns")

module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		if (!interaction.isCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);
		if (!command) return;
		// TODO: subcommand? = console.log(command.options.getSubcommand());
		// COOLDOWNS
		// TODO: shares cooldown for a group of subcommands
		if (!cooldowns.set(interaction, command)) return;
		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	},
};
