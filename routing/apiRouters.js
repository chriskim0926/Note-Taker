const noteData = require ('../db/noteData.js');

module.exports = function(app) {

    app.get('/api/notes', function (req, res){
        res.json(noteData);
    })
}