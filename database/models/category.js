const mongoose = require('mongoose');

const catergorySchema = mongoose.Schema({
  type: String,
  template: Object,
  entries: []
});

const category = mongoose.model('category', categorySchema);

module.exports = category;
