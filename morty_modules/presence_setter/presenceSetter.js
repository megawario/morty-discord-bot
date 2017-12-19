var OperationBaseClass = require("../OperationBaseClass.js");
var client = require("../../discordSingleton").instance.discord;

/**
 * sets the presence for the bot
 */
class PresenceSetter extends OperationBaseClass {

    constructor(name) {
        super(name);
        this.regularX =  /^presence/;
    }

    //overrides:
    isOperation(message) {
        return message.content.match(this.regularX);
    }

    execute(message) {
        var gameString = message.content.replace(this.regularX,"");
        //parse message content
        client.user.setPresence({game: {
            name: gameString,
            type: 0
        }});
    }

    help() {
        return "ohh Jeez, call presence and i will set as my game being played!!!"
    }
}

module.exports = new PresenceSetter("presenceSetter");