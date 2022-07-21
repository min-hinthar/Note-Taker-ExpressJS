// require express module
const express = require('express');

// create router using express router
const router = express.Router();

// require path module
const path = require('path');

// require fs to write files
const fs = require('fs');

// import db.json located one folder up and inside db folder
const notesDB = require('../db/db.json');

// require uniqid for unique id
const { uuid } = require('uuidv4');


// Create GET, POST, DELETE api routes
// Create Get api request to Read existing note
// /notes
router.get('/notes', (req, res) => {
    console.log('Loading notes as requested');

    // Return notes as response
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

// Create POST api request to Create new notes
router.post('/notes', (req, res) => { 
    let db = fs.readFileSync('./db/db.json');
    db = JSON.parse(db);
    //res.JSON(db);
    // Create new notes variable from request title and text from body
    let newNotes = {
        title: req.body.title,
        text: req.body.text,

        // Create unique id for new notes
        id: uuid(),
    };

    // Read db.json and push newNotes to notes and writeFile
    db.push(newNotes);
    
    // write new data and update json file
    writeFileDB(db);

    // Return notes to display title on console
    console.log('Successfully saved note: '+newNotes.title);
    res.json(db)
});

// create GET route to read note with id
router.get('/notes/:minid', (req, res) => {
    console.log('Loading notes as requested');

    let notes = fs.readFileSync('./db/db.json');
    notes = JSON.parse(notes);
    // Return notes as response
    const index = notes.findIndex(el => el.id === req.params.minid)
    res.json(notes[index]);
});

// create DELETE route to delete note with unique id
router.delete('/notes/:id', (req, res) => {
    let notes = fs.readFileSync('./db/db.json');
    notes = JSON.parse(notes);
    // use splice method to remove from array
    const index = notes.findIndex(el => el.id === req.params.id)
    notes.splice(index, 1);

    // write updated array to file
    writeFileDB(notes);

    // Return notes to display id on console
    res.send();
    console.log('Successfully deleted note: '+req.params.id);
});

// create writeFileDB function for POST/DELETE routes
function writeFileDB(notes) {
    fs.writeFileSync('./db/db.json', JSON.stringify(notes), err => {
        // catch error and return true 
        if (err) throw err;
        // return true;
    })
};

// export module as router
module.exports = router;