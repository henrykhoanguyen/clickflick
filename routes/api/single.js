/**
 * single.js is meant to portray single movie/stars
 * We are supposed to receive a GET request for server.js and portray
 * either a movie or star depending on id.
 */
const express = require('express');
const router = express.Router();

// Import db
const db = require('../../models/Movie');


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

module.exports = router;

