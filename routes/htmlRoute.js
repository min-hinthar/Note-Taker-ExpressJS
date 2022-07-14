// require express module
const express = require('express');
// require path module
const path = require('path');

// // create app by using express router 
// const app = express.Router();

// Route user to notes.html (located one folder up and inside public folder) when requested by path /notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// Route user to index.html (located one folder up and inside public folder) when requested by path /
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// export module as app
module.exports = app;