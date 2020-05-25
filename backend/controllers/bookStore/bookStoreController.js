const esServiceBroker = require('../../services/elastic');
const {
    ApiResult
} = require('../utils');

function getbookbyid(req, res, next) {
    esServiceBroker
        .helper('book.getBookById', {
            id: req.params.bookId
        })
        .then(result => res.json(ApiResult.success(result)))
        .catch(error => {
            next(error);
        });
}

module.exports = {
    getbookbyid
};