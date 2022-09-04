import { SlashCommandBuilder } from "discord.js"

export const data = new SlashCommandBuilder()
	.setName('upload')
	.setDescription('Send an image URL to be uploaded!')
    .addStringOption((option) => {
        option.setName('pdf')
            .setDescription('Image of the item')
            
        return option
    })
        
    