const express = require('express');
const router = express.Router();
const monk = require('./monk');

router.get('/seed', (req, res) => {
  const denver = monk.get('denver');
  denver.insert([
    {
      places: {
        name: 'Denver Beer Co',
        address: '1695 Platte Street, Denver, CO 80202',
        type: 'brewery'
      }
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
