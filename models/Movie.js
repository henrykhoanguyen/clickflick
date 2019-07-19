const mysql = require("mysql");

// Create connection
const db = mysql.createPool({
    connectionLimit: 10,
    host     : 'localhost',
    user     : 'root',
    password : '10Dieuran!', // Paul: PEOPle1234 Khoa: 10Dieuran!
    database : 'moviedb'
});

// Connect
db.connect((err) => {
    if(err) throw err;

    console.log("MySQL Connected...");
});

module.exports = db;