const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create user Schema
const UserSchema = new Schema({
    login: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    amount: {
        type: Number,
        require: true
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
