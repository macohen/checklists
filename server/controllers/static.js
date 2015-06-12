/**
 * Created by cohenma on 6/12/15.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
        res.sendFile('layouts/checklists.html');
});

router.use(express.static(__dirname + '/../assets'));

module.exports = router;
