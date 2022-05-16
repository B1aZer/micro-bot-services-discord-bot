const { ContextMenuCommandBuilder } = require('@discordjs/builders');
const {ApplicationCommandType} = require('discord-api-types/v9');
const rankCommand = require('./rank');

module.exports = {
	data: new ContextMenuCommandBuilder()
		.setName('rank')
		.setType(ApplicationCommandType.User)
	,
	execute(interaction) {
		rankCommand.execute(interaction)
	},
};