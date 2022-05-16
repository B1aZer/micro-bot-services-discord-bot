require('dotenv').config();
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	cooldown: 10,
	data: new SlashCommandBuilder()
		.setName('enter')
		.setDescription('Enter server.')
		.addStringOption(option =>
			option.setName('password')
				.setDescription('Password to enter server.')
				.setRequired(true))
	,
	async execute(interaction) {
		const password = interaction.options.getString('password');
		if (password === process.env.ENTER_PASSWORD) {
			const allRoles = interaction.client.roles.sort((a,b) => a.rawPosition - b.rawPosition)
			const firstRole = [...allRoles][1];
			interaction.member.roles.add(firstRole);
			await interaction.reply({content: 'Congrats! You are in :tada:\r\nType `/help` to proceed', ephemeral: true });
		} else {
			await interaction.reply({content: 'This is not the right password', ephemeral: true });
		}	
	},
};