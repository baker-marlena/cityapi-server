const express = require('express');
const router = express.Router();
const mongoose = require('./mongoose');

router.post('/seed', (req, res) => {
  mongoose.once('open', function() {
    // we're connected!
    var placeSchema =
    var catergorySchema = {
      type: String,
      entries: []
    }
    var citySchema = mongoose.Schema({
      name: String,
      places: Array,
      events: Array,
      cityData: Array
    });

    citySchema.methods.getCatergory = (catergory) => {
      return this[catergory]
    }

    var city = mongoose.model('city', citySchema);

    var denver = new city({
      name: 'Denver',
      places: [
        {
          type: 'breweries',
          template: {
            name: '',
            address: ''
          },
          entries: [
            {
              name: 'Denver Beer Co',
              address: '1695 Platte Street, Denver, CO 80202',
              dateAdded: Date.now()
            },
            {
              name: 'Lone Tree Brewing Company',
              address: '8200 Park Meadows Dr #8222, Lone Tree, CO 80124',
              dateAdded: Date.now()
            },
            {
              name: 'Dry Dock Brewing Co',
              address: '15120 E Hampden Ave, Aurora, CO 80014',
              dateAdded: Date.now()
            }
          ]
        },
        {
          type: 'coworking spaces',
          template: {
            name: '',
            address: ''
          },
          entries: [
            {
              name: 'Galvanize - Platte',
              address: '1644 Platte Street, Denver, CO 80202',
              dateAdded: Date.now()
            }
          ]
        }
      ]
    });

    denver.save(function (err, denver) {
      if (err) return console.error(err);
      denver.getCatergory();
    });
  });
});

module.exports = router;
