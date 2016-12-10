var express = require('express');
var router = express.Router();
var multer = require('multer');
const Config = require('../../config');

var upload = multer({dest: Config.upload.directory});

router.post('/', upload.single('file'), (req, res) => {

  console.log(req.file);

  res.status(202).json({
    status: 0,
    title: req.body.title,
    author: req.body.author
  });
});

module.exports = router;
