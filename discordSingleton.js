const Discord = require('discord.js');

const DISCORD_KEY = Symbol.for("discordbot.discord");

var globalSymbols = Object.getOwnPropertySymbols(global);
var hasDiscord = (globalSymbols.indexOf(DISCORD_KEY) > -1);

if (!hasDiscord){
    global[DISCORD_KEY] = {
        discord: new Discord.Client()
    };
}

var singleton = {};

Object.defineProperty(singleton, "instance", {
    get: function(){
        return global[DISCORD_KEY];
    }
});

// ensure the API is never changed
Object.freeze(singleton);

module.exports = singleton;