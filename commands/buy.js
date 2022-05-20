const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('buy')
		.setDescription('Buy coins for ETH.')
	,
	async execute(interaction) {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('Go to Site')
					.setStyle('LINK')
					.setURL('https://goodee.finance')
			);

		await interaction.reply({ components: [row], ephemeral: true });
	},
};