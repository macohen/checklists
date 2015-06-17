/**
 * Created by cohenma on 6/12/15.
 */
var db = require('../db');

var Checklist = db.model('Checklist', {
    title: { type: String, required: true },
    dateCreated : { type : Date, required : true, default : Date.now }
})
module.exports = Checklist