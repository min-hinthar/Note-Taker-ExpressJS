// require express module
const express = require('express');
// require path module
const path = require('path');

// create router by using express 
const router = express.Router();

// Route user to notes.html (located one folder up and inside public folder) when requested by path /notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// Route user to index.html (located one folder up and inside public folder) when requested by path /
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// export module as router
module.exports = router;