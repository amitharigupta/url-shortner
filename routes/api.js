var express = require('express');
var router = express.Router();
const ShortURL = require('../models/shortURL');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/shorturl', async (req, res) => {
  let url = await ShortURL.create({ fullurl: req.body.fullurl });
  res.json({ "status": 200, "data": url, "message": 'URL Created Successfully' });
})

router.get('/:shorturl', async (req, res) => {
  const shortUrl = await ShortURL.findOne( { 'shorturl': req.params.shorturl });
  if(shortUrl === null) {
    return res.json({ status: 404, message: 'URL not Found' });
  } else {
    shortUrl.clicks++
    shortUrl.save()
    return res.json({ status: 200, data: shortUrl, message: "URL Found" });
  }
})

module.exports = router;