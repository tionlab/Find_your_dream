module.exports = {
    name:"테스트",
    execute(message){
        const embeding = new (require("discord.js")).MessageEmbed()
            .setTitle("성공")
            .addField("성공하셨습니다!")
            .setTimestamp()
            .setColor("GREEN")
        message.reply(embeding)
