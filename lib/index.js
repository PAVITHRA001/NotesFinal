const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const notesController =  require('../lib/controllers/notes-controller');

app.use(express.json());

app.post('/notes', notesController.saveNotes)

app.listen(port, ()=> {
 console.log('Listening to port 3000 ...')
});