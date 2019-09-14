const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Logged in as ${client.user.tag}!');
});

client.on('ready', async () => {
        console.log('I am ready!');
        setTimeout( () => client.user.setPresence({ status: 'online', game: { name: `daft's little peepee` } }), 60000);
});

client.on('message', msg => {
  if (msg.author.bot) return undefined;

  if (msg.content.includes(' gone'))
    msg.channel.send(':crab: :crab: :crab:' + msg.content + ':crab: :crab: :crab: ');

  else if (msg.content.includes('gone '))
    msg.channel.send(':crab: :crab: :crab:' + msg.content + ':crab: :crab: :crab: ');

  else if (msg.content.includes('crab'))
    msg.channel.send(':crab:');

  else if (msg.content.includes('🦀'))
    msg.channel.send(':crab:');

});

client.login('YOUR TOKEN HERE');
