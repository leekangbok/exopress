var express = require('express');
var router = express.Router();
var bookStoreController = require('../controllers/bookStore/bookStoreController');

router.get('/:bookId', bookStoreController.getbookbyid);

module.exports = router;