/**
 * Created by cohenma on 6/10/15.
 */
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile('./layouts/checklists.html', { root : __dirname});
})

app.use('/api/checklists',require('./controllers/api/checklists'));
app.use(require('./controllers/static'));


var port = 3100;
app.listen(port, function() {
    console.log('Server listening on ', port);

});


