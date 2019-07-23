const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    last_name: String,
    age: Number,
    country: String,
    city: String,
    gender: String
});

module.exports = mongoose.model('users', UserSchema);