const Discord = require('discord.js');
const config = require('./config.js');
const catFacts = require('./ops/catFact.js');
const banner = require('./ops/banned.js');
const client = new Discord.Client();
const token = process.env.token;


client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    console.log("Received: "+message.content)

    //mentioned messages for morty
    if(message.isMemberMentioned(client.user) && !banner.isBanned(message.author)){

        //non auth commands
        if(message.content.includes("facts")){
            catFacts().then(
                (fact)=>{reply(message,"\n "+fact + "\n :cat:");});
        }
        //admin only commands

    }
});

client.login(token);

var reply = function (message,reply){
    message.reply(reply)
        .then(msg => console.log(`Sent a reply to ${msg.author}`))
        .catch(console.error);
};