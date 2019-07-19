const express = require('express');
const path = require('path');
const config = require('config');
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
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

const app = express();

// Middleware
app.use(express.json());

// User Routes - Khoa
app.use('/', require('./routes/api/index'));
app.use('/users', require('./routes/api/users'));




// User Router - Paul
app.use('/api/single', require('./routes/api/single'));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));