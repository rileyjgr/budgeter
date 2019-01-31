const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    user: String,
    password: String,
    email: String
});

const User = mongoose.model('users', userSchema);

module.exports = User;

