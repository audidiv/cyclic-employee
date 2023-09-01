const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'employees',
    password: 'PHOBOS88deimos',
    port: 5432,
    // ssl: true,
    max: 20,
    idleTimeoutMillis: 1000,
    connectionTimeoutMillis: 1000,
    allowExitOnIdle: false
});

module.exports = pool;