const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kicks a user from the server.'),

    async execute(interaction) {
        const member = interaction.message.mentions.members.first();
        if (!member) {
            return interaction.reply('You need to mention a user to kick.');
        }
        if (!member.bannable) {
            return interaction.reply('I cannot kick this user.');
        }
        await member.kick();
        await interaction.reply(`Kicked ${member.user.tag}`);
    }
}