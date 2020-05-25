const esServiceBroker = require('../../services/elastic');
const {
    ApiResult
} = require('../utils');

function getcafebyid(req, res, next) {
    esServiceBroker
        .helper('cafe.getCafeById', {
            id: req.params.cafeId
        })
        .then(result => res.json(ApiResult.success(result)))
        .catch(error => {
            next(error);
        });
}

function getcafebydist(req, res, next) {
    esServiceBroker
        .helper('cafe.getCafeByDist', {
            lat: req.query.lat,
            lon: req.query.lon,
            distance: req.query.distance
        })
        .then(result => res.json(ApiResult.success(result)))
        .catch(error => {
            next(error);
        });
}

module.exports = {
    getcafebyid,
    getcafebydist
};