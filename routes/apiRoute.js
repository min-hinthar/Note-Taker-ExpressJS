// require express module
const express = require(express);

// create app using express router
const app = express.Router();

// require fs to write files
const fs = require('fs');

// import db.json located one folder up and inside db folder
const notesDB = require('../db/db.json');

// require v4:uuid to create unique id for new saves
const { v4: uuidv4 } = require('uuid');

// Create GET, POST, DELETE api routes
// Create Get api request to Read existing note
app.get('/api/notes', (req, res) => {
    console.log('Loading notes as requested');
    // Create notes variable for reading db.json by parsing
    let notes = JSON.parse(fs.readFileSync(notesDB, 'utf-8'));
    // Return notes as response
    res.json(notes);
});

// Create POST api request to Create new notes
app.post('/api/notes', (req, res) => {
    // Create new notes variable from request body
    let newNotes = request.body;

    // 

    let notes = JSON.parse(fs.readFileSync(notesDB, 'utf-8'));
    // Return notes as response
    res.json(notes);
});