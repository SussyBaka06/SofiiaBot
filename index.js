const { REST } = require('@discordjs/rest');
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

  client.login(process.env.token);

});

