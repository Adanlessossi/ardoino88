var express = require('express');
var router = express.Router();

var ctrlHome = require('../controllers/home');
var ctrlAbout = require('../controllers/about');
var ctrlServices = require('../controllers/services');

/* GET home page. */
router.get('/', ctrlHome.index);
router.get('/direction', ctrlServices.direction);
router.get('/description', ctrlServices.description);
router.get('/costs', ctrlServices.costs);
router.get('/about', ctrlAbout.about);



module.exports = router;