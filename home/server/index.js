const express = require('express')
const app = express();
const expressLayouts = require('express-ejs-layouts');
const PORT = process.env.PORT || 8000;
const path = require('path')
const bodyParser = require('body-parser');
const flash = require('connect-flash')
const session = require('express-session');
const db =  require('../db');
const passport = require('passport');

require('../passport')(passport);


//BodyParser
// app.use(bodyParser.json())
app.use(express.urlencoded({extended:false}));

//express-session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

//connect flash;
app.use(flash())

//Global
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg  = req.flash('error_msg');
    res.locals.error = req.flash('error'); 
    next();
})

//EJS
app.use(expressLayouts);
app.set('view engine','ejs');

//Routes
app.use('/',express.static(path.join("client","dist")));
app.use('/order',express.static(path.join("/Users/yisun/desktop/Bobs/order/client","dist")));
app.use('/user', require("./routes/welcome"));

app.use('/:name/order',express.static(path.join("/Users/yisun/desktop/Bobs/order/client","dist")));

app.use('/:name/orderHistory', express.static(path.join("/Users/yisun/desktop/Bobs/orderhistory/client","dist")));

app.get('/:name/orderHistory/order',(req,res)=>{
    const {name} = req.params
    db.User.find({name:name})
    .then(data=>{res.json(data[0])})
    .catch(err=>{console.log(err)})
});

app.get('/:name/orderHistory/logout',(req,res)=>{
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/user/login')
})

app.listen(PORT, console.log(`listening on port ${PORT}`));