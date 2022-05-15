const cooldowns = require("../utils/cooldowns")

module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		if (!interaction.isCommand() && !interaction.isContextMenu()) return;		
		const command = interaction.client.commands.get(interaction.commandName);
		if (!command) return;
		// TODO: subcommand? = console.log(command.options.getSubcommand());
		// COOLDOWNS
		// TODO: shares cooldown for a group of subcommands
		// does not make sense now
		//if (!cooldowns.set(interaction, command)) return;
		//console.log(command.data.toJSON());
		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	},
};
