require("dotenv").config()
const Discord = require("discord.js")

const client = new Discord.Client()

client.on("ready", () => {
    console.log("bot is now running!")
})

client.login(process.env.CLIENT_TOKEN)