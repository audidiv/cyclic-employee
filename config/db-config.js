// const { Pool } = require('pg');
const pg = require('pg');

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'employees',
//     password: 'PHOBOS88deimos',
//     port: 5432,
//     // ssl: true,
//     max: 20,
//     idleTimeoutMillis: 1000,
//     connectionTimeoutMillis: 1000,
//     allowExitOnIdle: false
// });

var conString = "postgres://ljouvuyp:ZHQKGZa-kS2ubgIMWG8kbv35ScvF349E@tiny.db.elephantsql.com/ljouvuyp"

var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  return console.log("client connected");
//   client.query('SELECT NOW() AS "theTime"', function(err, result) {
//     if(err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0].theTime);
//     // >> output: 2018-08-23T14:02:57.117Z
//     client.end();
//   });
});

module.exports = client;