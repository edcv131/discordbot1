const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame()
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:rose: واللهي هم عملين جيف اواي علي 300 الف كريديت وانا نفسي افوز  :rose: 

*:small_orange_diamond: واللهي انت محترم وهتخش بالسيرفر بشان خاطري :rose: :small_orange_diamond: *
                               [ https://discord.gg/2V8vnCQ ] 
 :small_blue_diamond: الرابط : :small_blue_diamond: ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:rose: واللهي هم عملين جيف اواي علي 300 الف كريديت وانا نفسي افوز  :rose: 

*:small_orange_diamond: واللهي انت محترم وهتخش بالسيرفر بشان خاطري :rose: :small_orange_diamond: *
                               [ https://discord.gg/2V8vnCQ ] 
 :small_blue_diamond: الرابط : :small_blue_diamond: ... [ ${member}  ]
**`)
}).catch(console.error)

})
client.login(process.env.BOT_TOKEN);
