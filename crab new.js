const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Logged in as ${client.user.tag}!');
});

client.on('ready', async () => {
        console.log('I am ready!');
        setTimeout( () => client.user.setPresence({ status: 'online', game: { name: `with daft's little peepee` } }), 60000);
});

client.on('message', message => {

  message.content.toLowerCase;

  if (message.author.bot) return;

  msg = message.content.toLowerCase();

  if (msg.includes(' gone'))
    message.channel.send(':crab: :crab: :crab:' + msg + ':crab: :crab: :crab: ') + message.delete();

  else if (msg.includes('gone '))
    message.channel.send(':crab: :crab: :crab:' + msg + ':crab: :crab: :crab: ') + message.delete();

  else if (msg.includes('crab'))
    message.channel.send(':crab:');

  else if (msg.includes('🦀'))
    message.channel.send(':crab:');

  else if (msg.includes('borderlands'))
    message.channel.send(':crab: Poop Joke Poop Joke :crab:');

  else if (msg.includes('cogger'))
    message.channel.send('https://cdn.frankerfacez.com/emoticon/316078/4');

  else if (msg.includes('eggo'))
    message.channel.send('https://www.youtube.com/watch?v=aYLhFZvSE4s') + message.delete();

  else if (msg.includes('gay horse'))
    message.channel.send('https://cdn.discordapp.com/attachments/602300754463686670/620019915067490305/fiuxc82mr3e31.png') + message.delete();

  else if (msg.includes('two face'))
    message.channel.send('https://media.discordapp.net/attachments/602300754463686670/620020789197930572/7a3112fe8f0f3c0ecda7b943f12ff195.png') + message.delete();

  else if (msg.includes('south square'))
    message.channel.send('https://www.youtube.com/watch?v=X26aEYby-BA')  + message.delete();

  else if (msg.includes('my son is dead'))
    message.channel.send('https://www.youtube.com/watch?v=ha6SEzjgR2k')  + message.delete();

  else if (msg.includes('bug'))
    message.channel.send(':crab:undefined:crab:');
});

client.login('YOUR TOKEN HERE');
