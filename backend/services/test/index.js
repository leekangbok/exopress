const {
    ServiceBroker
} = require("moleculer");
let broker = new ServiceBroker({
    logger: console,
    transporter: null
});

broker.loadServices(__dirname, "*Service.js");

module.exports = {
    broker,
    helper(svc, param) {
        return broker
            .start()
            .then(() => broker.call(svc, param));
    }
};