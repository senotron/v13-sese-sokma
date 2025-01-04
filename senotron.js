const { Client } = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");
require("dotenv").config();

const client = new Client({ intents: 519 });

client.once("ready", async () => {
  console.log("Bot online!");
  client.user.setActivity("https://youtube.com/@s3notron", { type: "WATCHING" });

  const channelId = "SES KANALI ID";
  const guildId = "SUNUCU ID";
  const guild = client.guilds.cache.get(guildId);

  if (guild) {
    joinVoiceChannel({
      channelId: channelId,
      guildId: guildId,
      adapterCreator: guild.voiceAdapterCreator,
    });
    console.log("Ses kanalına bağlandı!");
  } else {
    console.error("Sunucu bulunamadı, ses kanalına bağlanılamadı.");
  }
});

client.login(process.env.token);
