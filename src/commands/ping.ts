import { SlashCommandBuilder } from "discord.js";

const data = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with ping!');