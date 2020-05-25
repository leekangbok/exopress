const {
    ServiceBroker
} = require("moleculer");
let broker = new ServiceBroker({
    logger: console,
    transporter: null
});

broker.loadServices(__dirname + '/cafe', "*Service.js");
broker.loadServices(__dirname + '/bookStore', "*Service.js");

module.exports = {
    host: 'https://elastic:Genidks123!@13.124.183.148:9200',
    broker,
    helper(svc, param) {
        return broker
            .start()
            .then(() => broker.call(svc, param));
    }
};