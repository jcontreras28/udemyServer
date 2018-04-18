const mongoose = require('mongoose');
const { Schema } = mongoose;  // mongoose has a sub thing called Schema

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);