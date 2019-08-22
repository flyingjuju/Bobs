const express = require('express');
const router = express.Router();
const path = require('path');

// router.get('/order',(req,res)=> {
//    res.render(path.resolve(__dirname,'../../client/dist/','index.html'))
// });
router.get('/:name/order',(req,res)=> {
    const {name} = req.params
    res.send(name)
    res.render(path.resolve(__dirname,'../../client/dist/','index.html'));
    
 });

module.exports = router;