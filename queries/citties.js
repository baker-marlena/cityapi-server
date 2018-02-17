const monk = require('../database/monk');

module.exports = {
  getAllByCity: () => {
    let denver = monk.get('denver');
    return denver
  }

}
