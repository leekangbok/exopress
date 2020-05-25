const elasticsearch = require('elasticsearch');
const {
    host
} = require('../esconfig');
const {
    getGeoEsQuery
} = require('./query');

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

console.log(host);

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
    name: "cafe",
    actions: {
        getCafeById: {
            params: {
                id: "string"
            },
            handler(ctx) {
                return elasticClient
                    .get({
                        index: 'cafe',
                        id: ctx.params.id
                    })
                    .then(result => result._source);
            }
        },
        getCafeByDist: {
            params: {
                lon: 'string',
                lat: 'string',
                distance: 'string'
            },
            handler(ctx) {
                /* jshint ignore:start */
                return elasticClient
                    .search({
                        index: 'cafe',
                        ...getGeoEsQuery(ctx.params.lat, ctx.params.lon, ctx.params.distance)
                    })
                    .then(result => {
                        let r = result.hits.hits.map(v => v._source);
                        return r;
                    });
                /* jshint ignore:end */
            }
        }
    }
};