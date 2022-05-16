const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test-list')
		.setDescription('List all tasks.')
		.addSubcommand(subcommand =>
			subcommand
				.setName('nft')
				.setDescription('Info about a user')
				.addUserOption(option => option.setName('target').setDescription('The user')))
		.addSubcommand(subcommand =>
			subcommand
				.setName('reddit')
				.setDescription('Info about the server'))
	,
	category: 'general', // move to prefix (lv1) / subcommands?
	cooldown: 5, // does not make sense for community commands
	async execute(interaction) {
		await interaction.deferReply({ ephemeral: true });
		await interaction.editReply('List');
	},
};