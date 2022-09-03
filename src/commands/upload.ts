import { SlashCommandBuilder } from "discord.js"

export const data = new SlashCommandBuilder()
	.setName('upload')
	.setDescription('Send an image to be uploaded!')
    //@ts-ignore
    .addAttachmentOption(option => {
        option.setName("image")
            .setRequired(true)
            
    })