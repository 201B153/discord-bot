const Discord = require("discord.js")
require("dotenv").config()

//const TOKEN = "OTc0MzExMzIyNjU1Mjc3MDc2.GPfwT6.w6GSGZMCV_sqirJ9hhmhluyA7t9ezT_PFUJZSc"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi") {
        message.reply("hello world")
    }
})


client.login(process.env.TOKEN)