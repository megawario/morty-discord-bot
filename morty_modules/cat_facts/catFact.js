var Client = require('node-rest-client').Client;
var OperationBaseClass = require("../../core/OperationBaseClass.js");

var options = {
    host: 'http://catfact.ninja/fact',
    reply_success: "\n {0} \n :cat::cat::cat::cat::cat::cat:",
    reply_fail: "could not get the facts for you, sorry :("
};

class CatFacts extends OperationBaseClass {

    catFact(){
        return new Promise(
            (resolve, reject) => {
                var client = new Client();
                client.get(options.host, function (data) {
                    resolve(data.fact);
                })
            })
    }

    //overrides:
    isOperation(message) {
        return message.content.match(/^catfacts/);
    }

    execute(message) {
        this.catFact()
            .then((fact)=>{this.reply(message,options.reply_success.format(fact));})
            .catch((err)=>this.reply(message,options.reply_fail));
    }

    help() {
        return "ohh Jeez, call catfacts and i will print a cactfacts for you, simple eh?"
    }
}

module.exports = new CatFacts("catFacts");