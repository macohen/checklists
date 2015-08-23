/**
 * Created by cohenma on 6/10/15.
 */
var express = require('express');
var bodyParser = require('body-parser');
var env = require('node-env-file');

var app = express();
var env_cfg = app.get('env');
var cfg_file = __dirname + '/' + env_cfg + '.cfg';
console.log("Environment = " + env_cfg);
console.log("Loading config from " + cfg_file);
env(__dirname + '/' + env_cfg + '.cfg');
console.log(process.env);
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile('./layouts/checklists.html', { root : __dirname});
})

app.use('/api/checklists',require('./controllers/api/checklists'));
app.use(require('./controllers/static'));


var port = process.env.NODE_PORT || process.env.PORT || 3100;
app.listen(port, function() {
    console.log('Server listening on ', port);

});


