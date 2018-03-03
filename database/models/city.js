const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
  name: String,
  places: Array,
  events: Array,
  cityData: Array
});

citySchema.methods.getCatergory = function(catergory) {
  return this[catergory]
};

const city = mongoose.model('city', citySchema);

module.exports = city;
