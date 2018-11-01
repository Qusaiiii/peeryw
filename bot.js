const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "spam"




 client.on("message", message => {

 if (message.content === prefix + "-help") {

if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: | `Adminstrator`للاسف ليس لديك صلاحية يجي ان يكون لديك برمشن!');	 

  const embed = new Discord.RichEmbed()

      .setColor("RANDOM")

      .setDescription(`

─════════════ {✯SpamHelp♧✯} ════════════─

❖-|spam1on| حتى تشغل السبام

❖-|spam2on| حتى تشغل السبام

❖-|spam3on| حتى تشغل السبام

❖-|spam4on| حتى تشغل السبام


❖-|spamon| حتى تشغل السبام

❖-|spamsay|حتى تتحكم بلبوت من حسابك 

  **spamsay #credit**

  **#credit البوت يقول**   

─════════════ {✯Spam Help♧✯} ════════════─

      `)

   message.channel.sendEmbed(embed)

    }

   });















client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;



  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);



let args = message.content.split(" ").slice(1);

if(!args) return message.channel.send('${prefix}say <words>');	



if (command == "say") {

if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("*لا تملك الصلاحيات المطلوبه**");



message.channel.send(args.join("  "))

    message.delete();

  }

});













 

 

client.on("message", msg => {  

if(msg.content.startsWith(prefix + `on`)) {

if(!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send(':no_entry: | `Adminstrator`للاسف ليس لديك صلاحية يجي ان يكون لديك برمشن!');

let spam = msg.guild.channels.find('name', 'spam');

 if (!spam) return msg.channel.send('**`spam`يرجى اضافة روم باسم**' );

setInterval(function(){

	spam.send(Math.random().toString(36).substring(7))

}, 500);

setInterval(function(){

	spam.send(Math.random().toString(36).substring(7))

}, 1000);

setInterval(function(){

	spam.send(Math.random().toString(36).substring(7))

}, 1500);	

	}

});

client.on("message", msg => {  

if(msg.content.startsWith(prefix + `1on`)) {

if(!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send(':no_entry: | `Adminstrator`للاسف ليس لديك صلاحية يجي ان يكون لديك برمشن!');

let spam = msg.guild.channels.find('name', '1spam');

 if (!spam) return msg.channel.send('**`spam`يرجى اضافة روم باسم**' );

setInterval(function(){

	spam.send(Math.random().toString(36).substring(7))

}, 500);

setInterval(function(){

	spam.send(Math.random().toString(36).substring(7))

}, 1000);

setInterval(function(){

	spam.send(Math.random().toString(36).substring(7))

}, 1500);	

	}

});

client.on("message", msg => {  

if(msg.content.startsWith(prefix + `2on`)) {

if(!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send(':no_entry: | `Adminstrator`للاسف ليس لديك صلاحية يجي ان يكون لديك برمشن!');

let spam = msg.guild.channels.find('name', '2spam');

 if (!spam) return msg.channel.send('**`2spam`يرجى اضافة روم باسم**' );

setInterval(function(){

	spam.send(Math.random().toString(36).substring(7))

}, 500);

setInterval(function(){

	spam.send(Math.random().toString(36).substring(7))

}, 1000);

setInterval(function(){

	spam.send(Math.random().toString(36).substring(7))
}, 1500);	

	}

});	  

client.on("message", msg => {  

if(msg.content.startsWith(prefix + `3on`)) {

if(!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send(':no_entry: | `Adminstrator`للاسف ليس لديك صلاحية يجي ان يكون لديك برمشن!');

let spam = msg.guild.channels.find('name', '3spam');

 if (!spam) return msg.channel.send('**`3spam`يرجى اضافة روم باسم**' );

setInterval(function(){

	spam.send(Math.random().toString(36).substring(7))
}, 500);

setInterval(function(){

	spam.send(Math.random().toString(36).substring(7))

}, 1000);

setInterval(function(){

	spam.send(Math.random().toString(36).substring(7))

}, 1500);	

	}

});	  

client.on("message", msg => {  

if(msg.content.startsWith(prefix + `4on`)) {

if(!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send(':no_entry: | `Adminstrator`للاسف ليس لديك صلاحية يجي ان يكون لديك برمشن!');

let spam = msg.guild.channels.find('name', '4spam');

 if (!spam) return msg.channel.send('**`4spam`يرجى اضافة روم باسم**' );

setInterval(function(){

       spam.send(Math.random().toString(36).substring(7))
	
}, 500);

setInterval(function(){

	spam.send(Math.random().toString(36).substring(7))

}, 1000);

setInterval(function(){

	spam.send(Math.random().toString(36).substring(7))

}, 1500);	

	}

});









    client.on('message',async message => {

    if(message.content.startsWith(prefix + "off")) {

       if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':no_entry: | `Adminstrator`للاسف ليس لديك صلاحية يجي ان يكون لديك برمشن!');

        message.channel.send('**Stopping.**').then(msg => {

            setTimeout(() => {

               msg.edit('**Stoppping..**');

            },1000);

            setTimeout(() => {

               msg.edit('**Done i will relunch early...**');

            },2000);

        });

        setTimeout(() => {

            client.destroy();

client.login(process.env.BOT_TOKEN);

        },3000);

    }

});





client.on('message', message => {

 if(message.content.startsWith(prefix + "come")) {

message.member.voiceChannel.join();

}

});



client.login(process.env.BOT_TOKEN);
