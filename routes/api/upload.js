const express = require('express');

const router = express.Router();

const multer = require('multer');
const Config = require('../../config');

const upload = multer({ dest: Config.upload.directory });

router.post('/', upload.single('file'), (req, res) => {
  res.status(200).json({
    status: 0,
    title: req.body.title,
    author: req.body.author,
  });
});

module.exports = router;
