const {Client} = require('discord.js');
const client = new Client({intents:519});
const fs = require('fs');

client.on("ready",async () => {

    console.log("Bot Hizmete Hazır!");
    client.user.setActivity("MrSn-LetC", {type:"WATCHING"});
    
});
//#endregion
client.login(process.env.token);