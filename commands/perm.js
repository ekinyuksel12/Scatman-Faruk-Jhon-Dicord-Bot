const botConfig = require('../config.json');

exports.run = (bot, message, args, permlvl) => {
    message.channel.send(`${message.author}, Yetki seviyeniz: ${permlvl}`);
};

exports.properties = {
    name: 'perm',
    permlvl: 0,
    description: 'Yetki seviyesini gösterir.',
    usage: 'perm'
};
