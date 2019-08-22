const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../../db/index');
const passport = require('passport');
require('../../passport')(passport)

router.get('/',(req,res)=>
    res.render(path.resolve(__dirname,'../../client/src/view','welcome'))
)
router.get('/login',(req,res)=>{
    res.render(path.resolve(__dirname,'../../client/src/view/','login'))
})

//Register page
router.get('/register',(req,res)=>{
    res.render(path.resolve(__dirname,'../../client/src/view/','register'))
})


router.post('/register',(req,res)=>{
    const newUser = req.body;
    const  {name, email, password, password2} = req.body;
    const order =  {}
    let errors = [];
    if(!name  || !email || !password || !password2) {
        errors.push({msg: 'Please fill in all fields'})
    }
    if(password !== password2){
        errors.push({msg: 'Passwords do not math'})
    }
    if(password.length<6){
        errors.push({msg: 'Password should be at least 6 characters'})
    }
    // console.log(errors)
    if(errors.length>0){
        res.render(path.resolve(__dirname,'../../client/src/view/','register'),{
            errors,
            name,
            email,
            password,
            password2
        })
    } else {
        db.User.findOne({name:name})
         .then (user  =>{
            if(user){
                errors.push({msg:'Name is already registered'})
                res.render(path.resolve(__dirname,'../../client/src/view/','register'),{
                    errors,
                    name,
                    email,
                    password,
                    password2
                });
            } else {
                const newUser = {
                    name,
                    email,
                    password,
                    order
                }
                db.User.create(newUser)
                .then(users=>{
                    req.flash('success_msg', 'You are successfully registered')
                    res.redirect('/user/login')
                })
                .catch(err=>console.log(err))
                // console.log(newUser)
            }
        }) 
    }
})

//Login page
router.post('/login',  (req,res,next)=>{
    const {name} = req.body
  passport.authenticate('local', { 
    successRedirect: `/${name}/order`,
    failureRedirect: `/user/login`,
    failureFlash: true 
    })(req,res,next)
});

module.exports = router;