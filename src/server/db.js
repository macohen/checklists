/**
 * Created by cohenma on 6/12/15.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/checklists', function() {
    console.log('mongodb connected');
})

module.exports = mongoose;