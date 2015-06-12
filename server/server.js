/**
 * Created by cohenma on 6/10/15.
 */
var express = require('express');
var bodyParser = require('body-parser');
var Checklist = require('./models/checklist.js')

var app = express();
app.use(bodyParser.json());

app.get('/api/checklists', function(req, res) {
    Checklist.find(function(err, checklists) {
        if(err) { return next(err) }
        res.json(checklists);
    })
})

app.post('/api/checklists', function(req, res, next) {
    var checklist = new Checklist({
        title : req.body.title
    });

    checklist.save(function(err, checklist) {
        if(err) { return next(err) }
        res.status(201).json(checklist);
    })

})
var port = 3100;
app.listen(port, function() {
    console.log('Server listening on ', port);

});


