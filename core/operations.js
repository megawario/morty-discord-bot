class OperationsClass {
    constructor(){
        this.registeredOperations = [];
    }

    execute(message){
        this.registeredOperations.forEach(op => {
            if(op.isOperation(message)){
                return op.execute(message)
            }
        });
    }

    register(operation){
        this.registeredOperations.push(operation);
    }
}

var Operations = new OperationsClass();

//register operations
var catfacts = require("../morty_modules/cat_facts/catFact.js");
Operations.register(catfacts);

var presenceSetter = require("../morty_modules/presence_setter/presenceSetter.js");
Operations.register(presenceSetter);

module.exports = Operations;