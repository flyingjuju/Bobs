const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const PORT = process.env.PORT || 8001;
const path = require('path')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db =  require('../../home/db/index')
app.use(bodyParser.json())
//EJS
// app.use(expressLayouts);
// app.set('view engine','ejs');





//Routes
// app.use('/',require('./routes/index'));
// app.use('/', express.static(path.join("/Users/yisun/desktop/home/client","dist")));
app.use('/order',require('./routes/order'));
app.use('/:name',express.static(path.join("/Users/yisun/desktop/Bobs/order/client","dist")));
app.get('/:name/order',(req,res)=>{
    const {name} = req.params
    db.User.find({name:name})
    .then(user=>{console.log('mongo data',user)})
    .catch(err=>{console.log(err)})
})
app.use('/user',express.static(path.join("/Users/yisun/desktop/Bobs/home/client","dist")));
app.get('/user',(req,res)=>{
     res.render(path.resolve(__dirname,'../../client/src/view','welcome'))
})

app.use('/user',require('../../home/server/routes/welcome'))
// app.listen(PORT, console.log(`listening on port ${PORT}`));