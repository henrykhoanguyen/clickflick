/**
 * single.js is meant to portray single movie/stars
 * We are supposed to receive a GET request for server.js and portray
 * either a movie or star depending on id.
 */
const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'PEOPle1234', // Paul: PEOPle1234 Khoa: 10Dieuran!
    database : 'moviedb'
});

// Connect
db.connect((err) => {
    if(err) throw err;
    console.log("MySQL Connected...");
});

const app = express();


// @route GET Movie
// @desc Retrieve single movie item
// @access Public

router.get('/', (req, res) => {
    let sql = 'select m.id, m.title ,m.year, m.director, r.rating from movies m, ratings r where r.movieId = m.id order by m.id';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send('Gets fetched...');
    });
});


