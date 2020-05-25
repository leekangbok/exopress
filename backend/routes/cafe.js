var express = require('express');
var router = express.Router();
var cafeController = require('../controllers/cafe/cafeController');

router.get('/:cafeId', cafeController.getcafebyid);
router.get('/search/dist', cafeController.getcafebydist);

module.exports = router;