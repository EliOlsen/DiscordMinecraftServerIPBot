require('dotenv').config()
var http = require('http');
const {Client, IntentsBitField} = require('discord.js')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.on('ready', (c) => {
    console.log(`BOT: ${c.user.tag} is online.`)
})

client.on('interactionCreate', (interaction) =>{
    if(!interaction.isChatInputCommand()){return;}
    console.log(`BOT: ${interaction.commandName}`);
})

client.on('interactionCreate', (interaction) =>{
    if(!interaction.isChatInputCommand()){return;}
    //console.log(`BOT: ${interaction.commandName}`);
    if(interaction.commandName === "ping"){
        interaction.reply('This Bot is Currently Functioning')
    }
})

client.on('interactionCreate', async (interaction) => {
    if(!interaction.isChatInputCommand()){return;}
    //console.log(`BOT: ${interaction.commandName}`);
    if(interaction.commandName === "ip"){
        http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
            resp.on('data', function(ip) {
              interaction.reply("The current server IP is: " + ip);
            });
          });
    }
})

client.login(process.env.TOKEN);