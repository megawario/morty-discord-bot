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
var catfacts = require("./cat_facts/catFact.js");
Operations.register(catfacts);


module.exports = Operations;