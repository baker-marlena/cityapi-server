const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cities');
var db = mongoose.connection;

module.exports = db;
