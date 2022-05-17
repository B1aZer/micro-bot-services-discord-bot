require('dotenv').config();
const { SlashCommandBuilder } = require('@discordjs/builders');
const { bold } = require('@discordjs/builders');
const Discord = require("discord.js");
const axios = require('axios');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rank')
		.setDescription('Shows user rank.')
		.addSubcommand(subcommand =>
			subcommand
				.setName('user')
				.setDescription('Shows user status.')
				.addUserOption(option => option.setName('target').setDescription('The user')))
	,
	async execute(interaction) {
		await interaction.deferReply({ ephemeral: true })
		// argument or context or self
		const user = interaction.options.getUser('target')
			|| interaction.options.getUser('user')
			|| interaction.user
		const member = await interaction.guild.members.fetch(user.id)
		const highestRole = member.roles.cache.sort((a, b) => b.rawPosition - a.rawPosition).first()
		const embed = new Discord.MessageEmbed()
			.setColor("#00936f")
			.setTitle(user.username)
			.setThumbnail(user.displayAvatarURL())
			.setDescription(`
			${bold('Level')}: ${highestRole.rawPosition}
			${bold('Role')}: ${highestRole.name}
			${bold('Commands')}: 5
			${bold('Coins')}: 100
		`)
			.setTimestamp()
			.setFooter({ text: interaction.guild.name })
		await interaction.editReply({ embeds: [embed] });
	},
};