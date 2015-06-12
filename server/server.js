/**
 * Created by cohenma on 6/10/15.
 */
var mongoose = require('mongoose');
var express = require('express');

mongoose.connect("mongodb://localhost/checklists");

var app = express();

var Checklist = mongoose.model('Checklist', { title : String});

var checklist = new Checklist({title : "testlist"});

checklist.save(function(err) {
    if(err) {
        console.log('failed');
    } else {
        console.log('success');
    }
})

app.get("/", function(req, res) {
    Checklist.find(function(err, checklists) {
        res.send(checklists);
    })
})

app.listen(3100);


