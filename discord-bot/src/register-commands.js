require('dotenv').config()
const {REST, Routes} = require('discord.js')

const commands = [
    {
        name: 'ping',
        description: 'Pings bot to check that it is working. No response means the bot is down or just offline'
    },
    {
        name: 'ip',
        description: 'Gets the current Minecraft server IP address.'
    }
]

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try{
        console.log("BOT: Registering slash commands...")
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            {body: commands}
        )
        console.log("BOT: Slash commands registered successfully")
    }
    catch(error){
        console.log(`BOT: There was an error: ${error}`)
    }
})()