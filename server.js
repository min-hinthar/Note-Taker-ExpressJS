// require express module
const express = require('express');
// require path module
const path = require('path');

// create app by using express server 
const app = express();

// create local port || environment port for Heroku
const PORT = process.env.PORT || 3001;

// middleware for parsing JSON and urlencoded form data
app.use(express.json);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));

// import API and HTML routes
require('./routes/apiRoute')(app);
require('./routes/htmlRoute')(app);

app.listen(PORT, ()=>{
    console.log(`APP is now active at PORT: ${PORT}`);
});