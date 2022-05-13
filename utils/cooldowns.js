const Discord = require("discord.js");
const cooldowns = new Map();

module.exports = {
    set: (interaction, command) => {
        console.log(command);
        if (!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Discord.Collection());
        }

        const currentTime = Date.now();
        const timestamps = cooldowns.get(command.name);
        const cooldownAmount = (command.cooldown) * 1000;

        // If timestamps has a key with the author's id then check the expiration time to send a message to a user.
        if (timestamps.has(interaction.user.id)) {
            const expiration_time = timestamps.get(interaction.user.id) + cooldownAmount;

            if (currentTime < expiration_time) {
                const time_left = (expiration_time - currentTime) / 1000;
                interaction.reply({
                    content: `Please wait ${time_left.toFixed(1)} more seconds before using ${command.name}`,
                    ephemeral: true
                });
                return;
            }
        }

        // If the author's id is not in timestamps then add them with the current time.
        timestamps.set(interaction.user.id, currentTime);
        // Delete the user's id once the cooldown is over.
        setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);
        return true;
    }
}