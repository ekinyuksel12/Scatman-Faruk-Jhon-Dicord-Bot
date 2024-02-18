const Discord = require('discord.js');
const botConfig = require('../config.json');

exports.run = (bot, message, args, permlvl) => {
	if (message.channel.type !== 'dm'){
    console.log(`\nFaruk Abi™ Kapatılıyor...`);
    bot.destroy();
    console.log('Faruk Abi™ Kapandı.');
    process.exit();
  }
};

exports.properties = {
  name: 'close',
  permlvl: 4,
  description: 'Botu kapatır.',
  usage: 'close'
};
