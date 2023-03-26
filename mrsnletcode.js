const {Client} = require('discord.js');
const client = new Client({intents:519});
const fs = require('fs');

client.on("ready",async () => {

    console.log("Bot Hizmete Hazır!");
    client.user.setActivity("MrSn-LetCode", {type:"WATCHING"});
    
});
client.login(process.env.token);

const { joinVoiceChannel } = require('@discordjs/voice');

client.on('ready', () => {  //MrSn
  joinVoiceChannel({ 
channelId: "SES KANALI İD", //MrSn
guildId: "SUNUCU İD",    //MrSn
adapterCreator: client.guilds.cache.get("SUNUCU İD").voiceAdapterCreator
    }); //MrSn
}); //MrSn