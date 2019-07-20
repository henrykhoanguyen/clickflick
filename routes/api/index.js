const express = require('express');
const router = express.Router();

// Main Page
router.get('/', (req, res) => {
    res.send("Welcome!")
});


module.exports = router;