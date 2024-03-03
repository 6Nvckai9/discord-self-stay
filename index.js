const request = require("request");
const express = require("express");
require("./uptime.js")();
const app = express();
const port = 3000;
const fs = require('fs')
require('dotenv').config()

const { Client, CustomStatus, RichPresence, getUUID } = require('discord.js-selfbot-v13');

const client = new Client();

client.on("ready", async () => {
	console.log(`✅ ${client.user.username} Started Online`);
  client.user.setHypeSquad('HOUSE_BRILLIANCE');
  client.user.setPresence({ activities: [r],});
	const {joinVoiceChannel} = require('@discordjs/voice');
	const channel = client.channels.cache.get("1213823978884567070"); // voice channel's id
	if (!channel) return console.log("The channel does not exist !");
	setInterval(() => {
			const connection = joinVoiceChannel({
				channelId: channel.id, // the voice channel's id
				guildId: channel.guild.id, // the guild that the channel is in
				adapterCreator: channel.guild.voiceAdapterCreator, // and setting the voice adapter creator
				selfDeaf: false,
				selfMute: true,
			});
		  }, 6000)
		});   
    
const r = new RichPresence() 
	.setApplicationId('1213729004301852722')
	.setType('PLAYING')
	.setURL('https://www.twitch.tv/discord')
	.setState('890897404')
	.setName('Genshin Impact')
	.setDetails('Amanda')
	.setParty({
		max: 5,
		current: 3,
		id: getUUID(),
	})
	.setStartTimestamp(Date.now())
	.setAssetsLargeImage('https://media.discordapp.net/attachments/1079316964608065566/1213041878207954955/GABwR-yXMAAGerK.jpg_large.jpg?ex=65f40848&is=65e19348&hm=cbb89feda92ab1989c7755d6f79b0e1ed5ea0386f00d4d94b8f845e0c633a379&')
	.setAssetsLargeText('Furina')
	.addButton('Genshin Profile', 'https://enka.network/u/890897404/')

client.login(process.env.TOKEN)
