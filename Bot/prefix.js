client.on('messageCreate', async message => {
	// ...
	if (command === 'prefix') {
		// if there's at least one argument, set the prefix
		if (args.length) {
			await prefixes.set(message.guild.id, args[0]);
			return message.channel.send(`Funcionou agora o meu novo prefix 🎆\`${args[0]}\`🎆`);
		}

		return message.channel.send(`Prefix é ${await prefixes.get(message.guild.id) || globalPrefix}\``);
	}
});
