const express = require('express');
const path = require('path');
const config = require('config');
//const mysql = require('mysql');


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