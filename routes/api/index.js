var express = require('express');
var upload = require('./upload');

var router = express.Router();

router.use('/upload', upload);

module.exports = router;
