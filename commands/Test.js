client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { SlashCommandBuilder } = require('@discordjs/builders');

	module.exports = {
		data: new SlashCommandBuilder()
			.setName('test')
			.setDescription('Comando de testar o bot e suas funcionalidades!'),
		async execute(interaction) {
			await interaction.reply('Informações');
		},
	};

	if (interaction.commandName === 'Testar') {
		await interaction.reply('Oie, estou funcionando perfeitamente :3. E para eu provar que não estou mentindo eu vou mandar as informações atuais do server <3\n O nome do servidor é ${interaction.guild.name} Nome bonitinhu ^-^ \n Numeros de 👩Humanos e robôs🤖: ${interaction.guild.memberCount} de membros legais :)');
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