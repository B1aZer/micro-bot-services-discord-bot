const cooldowns = require("../utils/cooldowns")
const { levelUp } = require("../utils")

module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		if (!interaction.isCommand() && !interaction.isContextMenu()) return;		
		const command = interaction.client.commands.get(interaction.commandName);
		if (!command) return;
		// TODO: shares cooldown for a group of subcommands
		if (!cooldowns.set(interaction, command)) return;
		try {
			await command.execute(interaction);
			await levelUp(interaction);
		} catch (error) {
			console.log(error);
			if (interaction.deferred) {
				await interaction.editReply({ content: 'There was an error while executing this command!', ephemeral: true });
			} else if (!interaction.replied) {
				await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
			} else {
				await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
			}
		}
	},
};
