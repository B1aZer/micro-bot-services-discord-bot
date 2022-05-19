const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Shows help.')
	,
	async execute(interaction) {
		await interaction.reply({ content: 'Solve tasks. Gain ranks.\r\n\r\nUse `/rank` for rank status\r\nUse `/lv` to list tasks for a particular level\r\nUse coins to access `/bot` commands.', ephemeral: true });
	},
};