import { SlashCommandBuilder } from "discord.js"

export const data = new SlashCommandBuilder()
	.setName('upload')
	.setDescription('Send an image to be uploaded!')
    .addAttachmentOption()