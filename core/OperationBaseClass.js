/**
 * OperationBaseClass must be used to use modules with morty.
 * All classes must extend from this one.
 * @regex - regex that activates the execution
 * @executionFunciton - funcion what should execute when regex hits
 */
class OperationBaseClass {
    constructor(name){
        this.name=name;
    }

    //check if it is command
    isOperation(message) {
        return false;
    }

    //returns an execution promisse
    execute(message) {}

    //shows help
    help(){
        return "Help message";
    }

    //replies to a message
    reply(message,reply){
        message.reply(reply)
            .then(msg => console.log(`Sent a reply to ${msg.author}`))
            .catch(console.error);
    };
}

module.exports=OperationBaseClass;