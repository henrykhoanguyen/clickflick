const mysql = require("mysql");

// Create connection
const db = mysql.createPool({
    connectionLimit: 10,
    host     : 'localhost',
    user     : 'root',
    password : 'PEOPle1234', // Paul: PEOPle1234 Khoa: 10Dieuran!
    database : 'moviedb'
});

module.exports = db;