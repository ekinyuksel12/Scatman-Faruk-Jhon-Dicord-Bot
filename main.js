//Imports
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const botConfig = require('./config.json');

//Bot configuration
const token = botConfig.token;
const prefix = botConfig.prefix;
//If the option tag_before_prefix is true in the config then add the bot's tag to the prefix.
const fullPrefix = ((botConfig.require_tag_before_prefix) ? botConfig.bot_id + " " : prefix)

//Printing bot information to the console
console.log(`\n${botConfig.botName}\n`);

console.log(`Token : \u001b[1;33m${botConfig.token}`);
console.log(`Prefix: \u001b[1;33m'${prefix}'\n`);

//Setting up permisions function
//Returns the permission level of the issuer based on some rules.
bot.elevation = message => {
    var permlvl = 0;

    if (message.author.id === botConfig.owner) permlvl = 5;
    else if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 4;
    else permlvl = 0;

    return permlvl;
};

//Loading up commands
bot.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
    if (err) console.error(err);
    console.log(`Found ${files.length} commands.\n`); //Displaying the amount of commands

    //
    files.forEach(f => {
        if (f.slice(-3) != ".js") return; //if the current file is not a JavaScript file skip it.

        let command = require(`./commands/${f}`); //Load the JavaScript file of the command.
        bot.commands.set(command.properties.name, command);

        console.log(`Command loaded: ${command.properties.name}`);
    });
});


//Handling messages
bot.on('message', message => {
    if (message.author.bot) return; //If the messages comes from the bot itself do nothing.

    if (!message.content.startsWith(fullPrefix)) return; //If the message doesn't start with the preffix ignore the message.

    let args = message.content.substring(fullPrefix.length).split(" "); //Remove the prefix from the message and split the args into an array.
    var userPermlvl = bot.elevation(message); //Get the permission level of the user who issued the command.
    let cmd = bot.commands.get(args[0]); //Get the command's name.

    //If there is an invalid command.
    if (cmd == undefined) {
        message.reply("Verilen komut bulunamadı.");
        if (botConfig["log-Errors"]) console.log(`\u001b[1;31m[${moment().format('DD-MM-YYYY HH:mm:ss')}] {${message.author.username}} hatalı bir komut gönderdi : ${message.content}`);
        return;
    }

    //Check if the permission level of the user is not high enough reply to the message and exit.
    if (cmd.properties.permlvl > userPermlvl) {
        if (botConfig["log-Errors"]) console.log(`\u001b[1;31m[${moment().format('DD-MM-YYYY HH:mm:ss')}] {${message.author.username}} yetki seviyesinin üstünde bir komut çalıştımayı denedi : ${message.content}`);
        message.reply(`bu komutu çalıştırmak için gerekli yetki seviyesine sahip değilsin. Bu komut için en az ${cmd.properties.permlvl} yetki seviyesinde olmalısın. Yetki seviyenizi konteol etmek için '${prefix}perm' komutunu kullanabilirsin.`);
        return;
    }

    //Running and logging the command.
    if (botConfig["log-Commands"]) console.log(`\u001b[1;33m[${moment().format('DD-MM-YYYY HH:mm:ss')}] {${message.author.username}} bir kod çalıştırdı : ${message.content}`);
    cmd.run(bot, message, args, userPermlvl); //Run the command
    message.delete(); //Delete the user's message to run the command.
});


//Bot on ready
bot.on('ready', () => {
    //Make bot appear online.
    bot.user.setPresence({ activity: { name: botConfig.status_message }, status: botConfig.status.online });

    console.log(`${botConfig.botName} is open to business!!!\n`);
});

bot.login(token);