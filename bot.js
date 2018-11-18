const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
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
