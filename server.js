const express = require('express');
const path = require('path');
const config = require('config');
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '10Dieuran!',
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

// User Routes
app.use('/api/login', require('./routes/api/login'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));