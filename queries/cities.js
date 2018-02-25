const monk = require('../database/monk');

module.exports = {
  getAllByCity: (city) => {
    let collection = monk.get(city);
    return collection.find({})
  },
  getOneCatergoryByCity: (city, categoryName) => {
    let collection = monk.get(city);
    return collection.find({category: categoryName})
  }
}
