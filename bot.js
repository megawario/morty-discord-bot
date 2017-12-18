const utils = require('./utils.js');
const config = require('./config.js');
const Discord = require('discord.js');
const client = new Discord.Client();
const operations = require('./morty_modules/operations.js');

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    console.log("Received: "+message.content);

    //filter by mention and remove mention from message
    if(message.isMemberMentioned(client.user)) {
        message.content=message.content.replace(client.user,"").trim();
        operations.execute(message);
    }

});

console.log(config);
client.login(config.discord.token);