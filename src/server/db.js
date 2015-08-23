/**
 * Created by cohenma on 6/12/15.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://' + process.env.MONGO_HOST + ':' + process.env.MONGO_PORT + '/checklists', function() {
    console.log('mongodb connected');
})

module.exports = mongoose;