import Discord, { Collection, Routes } from 'discord.js';
import { REST } from '@discordjs/rest';
import dotenv from 'dotenv';
dotenv.config();
import fs from 'fs';
import path from 'path'

// Google Cloud
// const vision = require('@google-cloud/vision').v1;
// const client = new vision.ImageAnnotatorClient();


// Discord
const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds] });

client.once('ready', async (client) => {
    
    const commands = [];
    const commandFiles = fs.readdirSync(path.resolve(__dirname, './commands')).filter(file => file.endsWith('.ts'));
    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        commands.push(command?.data?.toJSON());
        
    }

    const rest = new REST({ version: '10' }).setToken(process.env.TOKEN as string);


    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);
        const data = await rest.put(
            Routes.applicationCommands(client.user.id),
            { body: commands },
        );
        //@ts-ignore
        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        console.error(error);
    }
})

client.on('messageCreate', (message) => {
    console.log(message);
});

client.on('interactionCreate', async(interaction) => {
    if(!interaction.isChatInputCommand()) return;

    if(interaction.commandName === "ping") {
        interaction.reply("Pong!");
    }

    if(interaction.commandName === "upload") {
        
    }

	
});


client.login(process.env.TOKEN as string);