const Discord = require('discord.js');

exports.run = (client, message, args) => {

  const yazi = args.slice(0).join('+'); 
  if(!yazi) return message.channel.send(`**Lütfen yazı yazın! <a:red:706930179255304293>**`)
  const logo1 = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=fluffy-logo&text=${yazi}`
  .replace(' ', '+')

  const logo2 = new Discord.RichEmbed()

  .setTitle(`İşte Logon Burada`)
  .setColor("RANDOM")
  .setImage(logo1)

  message.channel.send(logo2)

}

exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 0

}

exports.help = {
    name: 'logo',
    description: '.',
    usage: 'logo <yazı>'
}