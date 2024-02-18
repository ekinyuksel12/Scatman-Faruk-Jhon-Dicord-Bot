const Discord = require('discord.js');
const botConfig = require('../config.json');

exports.run = (bot, message, args, permlvl) => {
  if (!args[1]) {
    const commands = bot.commands;
    var helpMsg = '```asciidoc\n= Komutlar Listesi =\n\n';
    const commandNames = [];

    commands.forEach(cmd =>{
      commandNames.push(cmd.properties.name);
    });
    
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

    commands.forEach(cmd => {
      if(cmd.properties.permlvl <= permlvl){
        helpMsg += `${botConfig.prefix}${cmd.properties.name}${' '.repeat(longest - cmd.properties.name.length + 10)}:: ${cmd.properties.description}\n`;
      }
    });
    message.author.send(helpMsg + "```");
  }
};

exports.properties = {
  name: 'help',
  permlvl: 0,
  description: 'Tüm komutları gösterir.',
  usage: 'help [komut]'
};
