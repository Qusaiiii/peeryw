const Discord = require('discord.js');
const peery = new Discord.Client();
const pfix = 'P'; 
const peeryid = ['324672376455299074'];

    peery.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!peeryid.includes(message.author.id)) return;
      
  if (message.content.startsWith(pfix + 'p')) {
    peery.user.setGame(argresult);
      message.channel.send(``)     
  } else  
  if (message.content.startsWith(pfix + 'w')) {
    peery.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(``)
  } else 
  if (message.content.startsWith(pfix + 'l')) {
    peery.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(``)
  } else 
  if (message.content.startsWith(pfix + 's')) {
    peery.user.setGame(argresult, "https://www.twitch.tv/peery13");
      message.channel.send(``)
  }
  if (message.content.startsWith(pfix + 'n')) {
    peery.user.setUsername(argresult).then
      message.channel.send(``)
} else
if (message.content.startsWith(pfix + 'a')) {
    peery.user.setAvatar(argresult);
    message.channel.send(` `);
}
});






peery.login(process.env.BOT_TOKEN);
