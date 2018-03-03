const connection = require('./connection');
const {city} = require('./models');

function run() {
  return city.remove({})
  .then(() => {
    return city.insertMany(cityData);
  })
}

run()
  .then(console.log.bind(console, 'inserted data!'))
  .catch(console.error.bind(console, 'FAILED to insert data!'))

const cityData = [{
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
}]

