const { ContextMenuCommandBuilder } = require('@discordjs/builders');
const {ApplicationCommandType} = require('discord-api-types/v9');
const statusCommand = require('./status');

module.exports = {
	data: new ContextMenuCommandBuilder()
		.setName('Status')
		.setType(ApplicationCommandType.User)
	,
	execute(interaction) {
		statusCommand.execute(interaction)
	},
};