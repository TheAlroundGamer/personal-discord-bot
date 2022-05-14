const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bans a user from the server.'),
    async execute(interaction) {
        const member = interaction.message.mentions.members.first();
        if (!member) {
            return interaction.reply('You need to mention a user to ban.');
        }
        if (!member.bannable) {
            return interaction.reply('I cannot ban this user.');
        }
        await member.ban();
        await interaction.reply(`Banned ${member.user.tag}`);
    }
}