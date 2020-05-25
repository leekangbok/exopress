const elasticsearch = require('elasticsearch');
const {
    host
} = require('../esconfig');

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const elasticClient = new elasticsearch.Client({
    host,
    ssl: {
        rejectUnauthorized: false
    }
});
const {
    MoleculerClientError
} = require("moleculer").Errors;

module.exports = {
    name: "book",
    actions: {
        getBookById: {
            params: {
                id: "string"
            },
            handler(ctx) {
                return elasticClient
                    .get({
                        index: 'bookstore',
                        requestTimeout: 30000,
                        id: ctx.params.id
                    })
                    .then(result => result._source);
            }
        }
    }
};