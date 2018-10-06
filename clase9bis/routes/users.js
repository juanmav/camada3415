const express = require('express');
const router = express.Router();

const MongoClient = require('mongodb');
const ObjectID = MongoClient.ObjectID;

let db;

MongoClient.connect('mongodb://localhost:27017/camada3415', function(err, database){
    if(err){
        throw err
    } else {
        console.log('DB OK');
        db = database;
    }
});


router.get('/', function (req, res) {
    // Listado
    db
        .collection('User')
        .find({})
        .toArray(function (err, users) {
            console.log(users);
            res.json(users);
        })

});

router.get('/:userId', function (req, res) {
    let id = req.params.userId;
    let o_id = new ObjectID(id);

    db.collection('User')
        .find({ _id : o_id})
        .toArray(function (err, users) {  // [ {...} ]
            let user = users[0];
            res.json(user);
        })
});

router.post('/', function (req, res) {
    let user = req.body;
    console.log(user);
    db.collection('User')
        .insertOne(user, function (err, result) {

            if(err){
                res.json({ message: 'FALLO ALGO!'});
            } else {
                res.json(result);
            }
        })

});

router.put('/:id', function (req, res) {
    let user = req.body;
    let id = req.params.id;
    let o_id = new ObjectID(id);

    delete user._id;

    db
        .collection('User')
        .updateOne(
            { _id: o_id},
            { $set: user },
            function (err, result) {
                if(err){
                    res.json({ message: 'FALLO ALGO!'});
                } else {
                    res.json(result);
                }
            }
        )
});

router.delete('/:id', function (req, res) {
    let id = req.params.id;
    let o_id = new ObjectID(id);

    db
        .collection('User')
        .deleteOne(
            { _id: o_id},
            function (err, result) {
                if(err){
                    res.json({ message: 'FALLO ALGO!'});
                } else {
                    res.json(result);
                }
            }
        )
});


module.exports = router;