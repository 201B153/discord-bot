const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generate-img")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
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

const welcomeChannelId = "974358895264948274"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}>Welcome to Serve!`,
        files: [img]
    })
})


client.login(process.env.TOKEN)