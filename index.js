const Discord = require('discord.js-selfbot-v13')
const client = new Discord.Client({
    checkUpdate: false
});
const token = 'Mon Token'; // mon token
const targetChannelID = '1130233793257672715'; // id où il faut envoyer les messages
const monid = "Mon id" // mon id
const iddubot = "510016054391734273" // id du bot qui gère les nombres

client.once('ready', () => {
    console.log('Bot prêt !');
});

const isValidNumber = (number) => {
    const regex = /^[0-9]+$/;
    return regex.test(number);
};

client.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.message.channel.id === targetChannelID && !reaction.message.author.bot && reaction.message.author.id !== `${monid}`) {
        const firstWord = await reaction.message.content.split(" ")[0];

        if (isValidNumber(firstWord)) {
                if (reaction.emoji.name === '✅' || reaction.emoji.name === '💯' || reaction.emoji.name === '☑️') {
                    if (user.id === `${iddubot}`) {
                            setTimeout(async () => {
                            const lastNumber = parseInt(firstWord);
                            const incrementedNumber = lastNumber + 1;
                            reaction.message.channel.send(`${incrementedNumber}`);
                            }, 500)
                    }
                }
        }
    }
});

client.login(token);