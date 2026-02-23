const { Pool } = require ("pg");
require('dotenv').config();

module.exports = new Pool({
    host: process.env.host,
    user: process.env.user,
    database: process.env.database,
    port: parseInt(process.env.port)
})