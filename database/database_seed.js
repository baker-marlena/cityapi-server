const express = require('express');
const router = express.Router();
const monk = require('./monk');

router.post('/seed', (req, res) => {
  const denver = monk.get('denver');
  denver.insert([
    {
      catergory: 'breweries',
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
      category: 'places',
      template: {
        name: '',
        address: '',
        type: ''
      },
      entries: [
      {
        name: 'Galvanize - Platte',
        address: '1644 Platte Street, Denver, CO 80202',
        type: 'coworking space',
        dateAdded: Date.now()
      }
    ]
    },
    {
      category: 'events',
      template: {
        name: '',
        address: '',
        time: ''
      },
      entries: [
      {
        name: 'Startup Weekend Boulder - Space!',
        address: '2445 Kittredge Loop Dr, Boulder, CO 80309',
        date: 'March 23 - 25, 2018',
        time: '6:30pm',
        dateAdded: Date.now()
      }
    ]
    }
  ])
  res.send('Done!');
})

router.delete('/delete', (req, res) => {
  const denver = monk.get('denver');
  denver.drop();
  res.send('Done!');
})

module.exports = router;
