const mongoose = require('mongoose');

const URL = process.env.DBURL;
const db = mongoose.connect(URL, {
  useNewUrlParser: true, useUnifiedTopology: true
})

module.exports = db