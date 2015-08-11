/**
 * Created by cohenma on 6/12/15.
 */
var Checklist = require('../../models/checklist');
var router = require('express').Router();

router.get('/:id', function(req, res, next) {
    return res.json(req.params.id);
})

router.get('/', function(req, res, next) {
    console.log('getting checklists');
    Checklist.find()
        //.sort('-dateCreated')
        .exec(function (err, checklists) {
            if (err) {
                return next(err)
            }
            res.json(checklists);
        })
})

router.post('/', function(req, res, next) {
    var checklist = new Checklist({
        title : req.body.title
    });

    checklist.save(function(err, checklist) {
        if(err) { return next(err) }
        res.status(201).json(checklist);
    })

})

module.exports = router;