const express = require('express');
const router = express.Router();
const queries = require('../queries/citties');

router.get('/denver', (req, res) => {
  res.send(queries.getAllByCity());
})


module.exports = router;
