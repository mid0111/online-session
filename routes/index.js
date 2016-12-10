var express = require('express');
var api = require('./api');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/api', api);

module.exports = router;
