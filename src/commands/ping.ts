import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
	.setName('ping')
	.setDescription('Sends a random gif!')