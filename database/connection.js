const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cities');
const db = module.exports = mongoose.connection;
