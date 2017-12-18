// Reads from env variables for each of use
'use strict'

//required env variables
var enviromentVariables = [
    'DISCORD_TOKEN'
]

enviromentVariables.forEach((name) => {
    if (!process.env[name]) throw new Error(`Environment variable ${name} is missing`);
});


//app definition for env variables
const config = {
    discord:{
        token: process.env.DISCORD_TOKEN
    }
};


//register operation configurations here:
//const authorization = require("morty_modules/authorization"); authorization

module.exports = Object.assign({},config);