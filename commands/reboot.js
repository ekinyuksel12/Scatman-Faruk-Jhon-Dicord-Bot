const Discord = require('discord.js');
const botConfig = require('../config.json');

exports.run = (bot, message, args, permlvl) => {
	if (message.channel.type !== 'dm'){
    console.log(`\nFaruk Abi™ Kapatılıyor...`);
    bot.destroy();
    console.log('Faruk Abi™ Kapandı.');
    bot.login(botConfig.token);
    console.log('Faruk Abi™ Açıldı.\n');
  }
};

exports.properties = {
  name: 'reboot',
  permlvl: 4,
  description: 'Botu yeniden başlatır.',
  usage: 'reboot'
};
