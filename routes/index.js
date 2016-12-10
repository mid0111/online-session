const express = require('express');
const api = require('./api');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.use('/api', api);

module.exports = router;
