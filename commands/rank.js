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
		const userDB = (await axios.get(`${process.env.MONGODB_URL}/user`, { params: { userID: interaction.user.id } })).data
		const member = await interaction.guild.members.fetch(user.id)
		const highestRole = member.roles.cache.sort((a, b) => b.rawPosition - a.rawPosition).first()
		const embed = new Discord.MessageEmbed()
			.setColor("#00936f")
			.setTitle(user.username)
			.setThumbnail(user.displayAvatarURL())
			.setDescription(`
			${bold('Level')}: ${highestRole.rawPosition}
			${bold('Role')}: ${highestRole.name}
			${bold('Commands')}: ${highestRole.rawPosition - 1}
			${bold('Coins')}: ${userDB.coins}
		`)
			.setTimestamp()
			.setFooter({ text: interaction.guild.name })
		await interaction.editReply({ embeds: [embed] });
	},
};