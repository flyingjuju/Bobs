const express = require('express');
const router = express.Router();
const path = require('path');

//Login Page
router.get('/login',(req,res)=> {
   res.send("Login")
});

//Registration Page
router.get('/register',(req,res)=>{
    res.send('register')
})

module.exports = router;