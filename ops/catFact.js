var Client = require('node-rest-client').Client;
var options = {
    host: 'http://catfact.ninja/fact',
};

var catFact = function (fact) {
    return new Promise(
        (resolve,reject) => {
            var client = new Client();
            client.get(options.host, function (data) {
            resolve(data.fact);
    })
})};

module.exports = catFact;