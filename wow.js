module.exports = {
    name:"화이자",
    execute(message){
        const embeding = new (require("discord.js")).MessageEmbed()
            .setTitle("성공")
            .setDescription("성공하셨습니다!")
            .setTimestamp()
            .setColor("RANDOM")
        message.reply({ embeds: [embeding] })
    }
}
