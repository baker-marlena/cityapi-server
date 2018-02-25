const express = require('express');
const router = express.Router();
const queries = require('../queries/cities');

router.get('/:city', (req, res) => {
  let cityName = req.params.city;
  queries.getAllByCity(cityName)
  .then(cityData => {
    res.json(cityData)
  });
});

router.get('/:city/:category', (req, res) => {
  let cityName = req.params.city;
  let categoryName = req.params.category;
  if(req.query.length === 0){
    queries.getOneCatergoryByCity(cityName, categoryName)
      .then(cityData => {
        res.json(cityData)
      })
      .catch(err => console.error(err))
    } else {
      let query = Object.keys(req.query)[0];
      let queryValue = req.query[query];
      queries.getOneCatergoryByCity(cityName, categoryName)
        .then(cityData => {
          console.log(cityData);
          let results = cityData.entries.filter(entry => {
            return entry[query].includes(queryValue);
          });
          res.json({data: results})
        });
    };
});

module.exports = router;
