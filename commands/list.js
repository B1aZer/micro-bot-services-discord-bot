const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('list')
		.setDescription('List all tasks.'),
	category: 'general',
	cooldown: 5,
	async execute(interaction) {
		await interaction.deferReply({ ephemeral: true });
		await interaction.editReply('List');
	},
};