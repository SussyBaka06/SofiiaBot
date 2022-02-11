const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('Ready!', () => {
	console.log('Ready!');
});

client.login(token);

