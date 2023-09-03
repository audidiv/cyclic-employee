const pg = require('pg');
require('dotenv').config();


var client = new pg.Client(process.env.DB_URL);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  return console.log("client connected");
});

module.exports = client;