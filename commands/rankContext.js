const { ContextMenuCommandBuilder } = require('@discordjs/builders');
const {ApplicationCommandType} = require('discord-api-types/v9');
const rankCommand = require('./rank');

module.exports = {
	data: new ContextMenuCommandBuilder()
		.setName('rank')
		.setType(ApplicationCommandType.User)
	,
	async execute(interaction) {
		await rankCommand.execute(interaction)
	},
};