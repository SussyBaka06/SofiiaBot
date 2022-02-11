const bot = require("lavaplayer") // required module
const Discord = require("discord.js") //required module
const client = new Discord.Client()


client.on("message", async message => {

const music = new bot.Client(client, {
  guild: message.guild.id, //the guild where players connect
  textChannel: message.channel.id, //the channel where player messages send
  voiceChannel: message.member.voice.channel.id, //the channel that where player join and connect
  host: "localhost", //default is lavalink.something.host
  port: 80, //default port 80
  password: "youshallnotpass" //default password youshallnotpass
})});
client.login("token")
