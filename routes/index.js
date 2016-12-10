const express = require('express');
const api = require('./api');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => res.render('index'));
router.get('/upload', (req, res) => res.render('upload'));

router.use('/api', api);

module.exports = router;
