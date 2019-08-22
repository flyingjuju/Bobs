const User = require('../models/users.js');

const findUserAndLogin = (newUser,callback) => {
  // console.log('db',newRsv)
  User.create(newUser,(err)=>{
    if(err){
      callback(err) 
    }
  })
};
module.exports = findUserAndLogin;
