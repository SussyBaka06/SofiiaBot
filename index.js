const { REST } = require('@discordjs/rest');
const { Client, Intents } = require('discord.js');
const { Routes } = require('discord-api-types/v9');
const { token } = require('./config.json');
const express = require('express');
const config = require('./config.json');

const app = express();

app.get('/', (req, res) => {
  res.send('Starting!')
});

app.listen(3000, () => {
  console.log('server started :3');
});

const discord = require("discord.js");

const config  = require("./config.json");

const application = require("./Aplicattion");

const express = require("./express");

const app = express(); 


const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('Ready!', () => {
	console.log('Ready!');
});

client.login(token);

const emojiCharacters = require('./emojiCharacters.js');

console.log(emojiCharacters.a); // 🇦
console.log(emojiCharacters[10]); // 🔟
console.log(emojiCharacters['!']); // ❗

client.login(process.env.token);




