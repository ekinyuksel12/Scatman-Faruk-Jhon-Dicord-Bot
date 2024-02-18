exports.run = (bot, message, args) => {
    message.channel.send("Hello World!");
};

exports.properties = {
    name: 'hello',
    permlvl: 5, 
    description: 'Hello World yazar.',
    usage: 'hello'
};
