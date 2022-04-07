const cooldowns = new Map();

module.exports = {
    set: (message, args, client, command, _Discord) => {
        
        if (!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new _Discord.Collection());
        }

        const current_time = Date.now();
        const time_stamps = cooldowns.get(command.name);
        const cooldown_amount = (command.cooldown) * 1000;

        // If time_stamps has a key with the author's id then check the expiration time to send a message to a user.
        if (time_stamps.has(message.author.id)) {
            const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

            if (current_time < expiration_time) {
                const time_left = (expiration_time - current_time) / 1000;
                message.reply(`Please wait ${time_left.toFixed(1)} more seconds before using ${command.name}`);
                return;
            }
        }

        // If the author's id is not in time_stamps then add them with the current time.
        time_stamps.set(message.author.id, current_time);
        // Delete the user's id once the cooldown is over.
        setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);
        return true;
    }
}