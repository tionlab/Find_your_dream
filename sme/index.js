//기본 세팅
require("dotenv").config();
const { Client } = require("discord.js");
const { token } = process.env;
const client = new Client({ intents: 32767 });
client.login(token);
client.once("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
process.on("unhandledRejection", (err) => {
  if (err == "DiscordAPIError: Missing Access")
    return console.log("봇에게 슬래쉬 커맨드 푸쉬 권한이 없습니다.");
  console.error(err);
});

//부서채팅 백업
client.on("messageCreate", (message) => {
  if (message.channel.id != "1066717717677215814") return;
  if (message.channel.id == "1066717717677215814") {
    const timestamps =  `${message.createdTimestamp}`
    const timestamp = timestamps.slice(0, -3)
    const [attachments] = message.attachments.values();
    const url = attachments ? attachments.url : null;
    if (url == null) {
      const scteamdata = client.channels.cache.get("1067122579405541377");
      scteamdata.send(
        `**${message.author.username} : ${message} \n||USER ID : ${message.author.id} Time : <t:${timestamp}:f>||**`
      );
    } else {
      const scteamdata = client.channels.cache.get("1067122579405541377");
      scteamdata.send(
        `**${message.author.username} : ${message}${url} \n||USER ID : ${message.author.id} Time : <t:${timestamp}:f>||**`
      );
    }
  }
}); 
//보안팀 백업
client.on("messageCreate", (message) => {
  if (message.channel.id != "1066717720810360952") return;
  if (message.channel.id == "1066717720810360952") {
    const timestamps =  `${message.createdTimestamp}`
    const timestamp = timestamps.slice(0, -3)
    const [attachments] = message.attachments.values();
    const url = attachments ? attachments.url : null;
    const secteamdata = client.channels.cache.get("1067105168111439892");
    if (url == null) {
      secteamdata.send(
        `**${message.author.username} : ${message} \n||USER ID : ${message.author.id} Time : <t:${timestamp}:f>||**`
      );
    } else {
      secteamdata.send(
        `**${message.author.username} : ${message}${url} \n||USER ID : ${message.author.id} Time : <t:${timestamp}:f>||**`
      );
    }

  }
}); 
//기획팀 백업
client.on("messageCreate", (message) => {
  if (message.channel.id != "1066717722978832476") return;
  if (message.channel.id == "1066717722978832476") {
    const timestamps =  `${message.createdTimestamp}`
    const timestamp = timestamps.slice(0, -3)
    const [attachments] = message.attachments.values();
    const url = attachments ? attachments.url : null;
    if (url == null) {
      client.channels.cache.get("1065117981803282513").send(
        `**${message.author.username} : ${message} \n||USER ID : ${message.author.id} Time : <t:${timestamp}:f>||**`
      )
    } else {
      client.channels.cache.get("1065117981803282513").send(
        `**${message.author.username} : ${message}${url} \n||USER ID : ${message.author.id} Time : <t:${timestamp}:f>||**`
    );
    }

  }
});

module.exports.discord = client;
