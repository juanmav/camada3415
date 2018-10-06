const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/', function (req, res) {
    // Listado
    User
        .find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
});

router.get('/:userId', function (req, res) {
    let id = req.params.userId;

    User
        .findById(id)
        .then( user => res.json(user))
        .catch( err => res.json(err));
});

router.post('/', function (req, res) {
    let data = req.body;
    let user = new User(data);

    user
        .save()
        .then( result => res.json(result))
        .catch( err => res.json(err))

});

router.put('/:userId', function (req, res) {
    let data = req.body;
    let id = req.params.userId;

    delete data._id;

    User
        .findByIdAndUpdate(id, data)
        .then(result => res.json(result))
        .catch( err => res.json(err));
});


router.delete('/:userId', function (req, res) {
    let id = req.params.userId;

    User
        .findByIdAndRemove(id)
        .then(result => res.json(result))
        .catch( err => res.json(err));
});


module.exports = router;