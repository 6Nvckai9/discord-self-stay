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
	const channel = client.channels.cache.get("1235905329510875168"); // voice channel's id
	if (!channel) return console.log("The channel does not exist !");
	setInterval(() => {
			const connection = joinVoiceChannel({
				channelId: channel.id, // the voice channel's id
				guildId: channel.guild.id, // the guild that the channel is in
				adapterCreator: channel.guild.voiceAdapterCreator, // and setting the voice adapter creator
				selfDeaf: false,
				selfMute: false,
			});
		  }, 6000)
		});   
    
const r = new RichPresence() 
	.setApplicationId('1215620258669273118')
	.setType('LISTENING')
	.setURL('https://youtube.com/@avengedsevenfold?si=eMw6e52kY_PkiuKR')
	.setState('💀')
	.setName('Avenged Sevenfold')
	.setDetails('Life Is But a Dream')
	.setParty({
		max: 1,
		current: 1,
		id: getUUID(),
	})
	.setStartTimestamp(Date.now())
	.setAssetsLargeImage('https://media.discordapp.net/attachments/1090893989206573126/1215880501726806127/i-interchanged-the-colours-and-removed-the-background-off-v0-o9ghvjhn73ob1.png?ex=65fe5bf5&is=65ebe6f5&hm=83ab4f83ef30e030563bac04a82bfcbe76b0aa173ad055f6e51b15b18a05bca7&')
	.setAssetsLargeText('Sevenfoldism')

client.login(process.env.TOKEN)
