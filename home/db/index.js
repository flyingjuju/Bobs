const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/boba', { useNewUrlParser: true });

const userSchema = mongoose.Schema({
    name: {type:String, uniqe:true},
    email: {type:String, uniqe:true},
    password: String,
    orders: {}
});

const User = mongoose.model('User', userSchema);

module.exports.User = User;