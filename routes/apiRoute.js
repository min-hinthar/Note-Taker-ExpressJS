// require express module
const express = require('express');

// create app using express router
const app = express();

// require path module
const path = require('path');

// require fs to write files
const fs = require('fs');

// import db.json located one folder up and inside db folder
const notesDB = require('../db/db.json');



// Create GET, POST, DELETE api routes

// Create Get api request to Read existing note
app.get('/api/notes', (req, res) => {
    console.log('Loading notes as requested');
    
    // Create notes variable for reading db.json by parsing
    let notes = JSON.parse(data);
    // Return notes as response
    res.json(notes);
});

// Create POST api request to Create new notes
app.post('/api/notes', (req, res) => {
    // Create new notes variable from request body
    let newNotes = request.body;

    // Read db.json and push newNotes to notes and writeFile
    notes.push(newNotes);
    
    // write new data and update json file
    writeFileDB(newNotes);

    // Return notes to display title on console
    return console.log('Successfully saved note: '+newNotes.title);
});

// create GET route to read note with id
app.get('/api/notes/:id', (req, res) => {
    console.log('Loading notes as requested');

    // Return notes as response
    res.json(notes[req.params.id]);
});

// create DELETE route to delete note with unique id
app.get('/api/notes/:id', (req, res) => {
    // use splice method to remove from array
    notes.splice(req.params.id, 1);

    // write updated array to file
    writeFileDB(notes);

    // Return notes to display id on console
    return console.log('Successfully deleted note: '+req.params.id);
});


// create writeFileDB function for POST/DELETE routes
function writeFileDB() {
    fs.writeFileSync('../db/db.json', JSON.stringify(notes, ''), err => {
        // catch error and return true 
        if (err) throw err;
        return true;
    })
};


// export module as app
module.exports = app;