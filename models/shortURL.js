const mongoose = require('mongoose');
const { nanoid } = require('nanoid');

const shortURLSchema = new mongoose.Schema({
  fullurl: {
    type: String,
    required: true
  },
  shorturl: {
    type: String,
    required: true,
    default: nanoid()
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  }
})

module.exports = mongoose.model('ShortURL', shortURLSchema);