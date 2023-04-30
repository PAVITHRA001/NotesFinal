const noteServices = require('../services/notes-service');
function saveNotes(req, res){
 const { message } = req.body;
 noteServices.saveNotes(message);
 res.status(200).send('Notes saved successfully !!!');
}

module.exports = { saveNotes };