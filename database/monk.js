const monk = require('monk');

const db = monk(process.env.MONGODB_URI || 'localhost/cities');

db.addMiddleware(require('monk-middleware-debug'))

module.exports = db;
