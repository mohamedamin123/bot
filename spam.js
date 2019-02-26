const Discord = require('discord.js');
const client = new Discord.Client();





client.on('ready', async() => {
var server = "519915294739660800"; // ايدي السيرفر
var channel = "550006421706506251";// ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Darkness Spam ,Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam ,  ')
    },305);
})
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
