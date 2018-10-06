const mongoose = require('mongoose');

let userSchem = mongoose.Schema({
    username: String,
    email: String,
    password: String
});

let User = mongoose.model('User', userSchem);

module.exports = User;


// let user1 = new User({...});
// let user2 = new User({...});