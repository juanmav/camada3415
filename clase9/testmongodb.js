const MongoClient = require('mongodb');
const ObjectID = require('mongodb').ObjectID;


MongoClient.connect('mongodb://localhost:27017/camada3415', function(err, db){

    if (err){
        console.error('EXPLOTO ALGO');
        throw err;
    } else {
        /*db
            .collection('User')
            .find({})
            .toArray(function (err, users) {
                console.log(users);
            })*/


        /*let user = {
            "usename": "fausto",
            "password": "12345",
            "email": "a@a.com"
        };

        db.collection('User')
            .insertOne(user, function(err, result){
                console.log('Usuario creado!!!!');
            })*/


        /*let userId = "5bb8c985fe889c2f85bbd04d";
        let o_id = new ObjectID(userId);
        let nuevosDatos = {
            "usename": "Modificadoooo",
            "password": "12345",
            "email": "a@a.com"
        };

        db
            .collection('User')
            .updateOne(
                { _id: o_id },
                { $set: nuevosDatos },
                function (err, result) {
                    console.log('Usuario modificado con exito!');
                })*/

        let userId = "5bb8c985fe889c2f85bbd04d";
        let o_id = new ObjectID(userId);

        db
            .collection('User')
            .deleteOne({ _id: o_id }, function (err, result) {
                console.log('Borrado con exito!!!');
            });

    }


});

