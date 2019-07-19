const express = require('express');
const router = express.Router();


// @route   POST api/login
// @desc    Get user info and log them in
// @access   Private
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    //res.json({ data: email })
    res.send("Login Succesfully!");
});


module.exports = router;