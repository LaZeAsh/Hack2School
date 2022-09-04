import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
	.setName('reminder')
	.setDescription('reminds you about something')
    .addStringOption((option) => {
        option.setName('duration')
            .setDescription('Duration of your reminder')
            .setRequired(true)
        return option
    })
    .addStringOption((option) => {
        option.setName('reason')
            .setDescription('Reason to remind you for')
            .setRequired(true)
        return option
    })
    
    