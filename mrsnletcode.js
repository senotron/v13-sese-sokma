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
channelId: "1088766869860786187", //MrSn
guildId: "1055105621327888394",    //MrSn
adapterCreator: client.guilds.cache.get("1055105621327888394").voiceAdapterCreator
    }); //MrSn
}); //MrSn