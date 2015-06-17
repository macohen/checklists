/**
 * Created by cohenma on 6/12/15.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/checklists', function() {
    console.log('mongodb connected');
})

module.exports = mongoose;