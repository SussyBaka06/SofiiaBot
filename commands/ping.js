client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Comando de testar o bot!'),
    async execute(interaction) {
        await interaction.reply('Pong! :3');
    },
};
	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong! :3 **\n ${ping}ms**');
	} else if (commandName === 'servidor') {
		await interaction.reply('Server info.');
	} else if (commandName === 'membro') {
		await interaction.reply(`Sua taguizinha: ${interaction.user.tag}\nSeu idezinho: ${interaction.user.id}`);
    }
});

const rest = new REST({ version: '9' }).setToken('token');

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

client.login(token);
