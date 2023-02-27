const mysql = require('mysql2');
require('dotenv').config();

let sql = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    multipleStatements: true
});

module.exports = sql;