const express = require('express');
const router = express.Router();
const rating = require('../schemas/rating');
//check aleardy reviwed user
router.post("/",async(req,res)=>{
    rating.find({
       userid : req.body.userid,
       resumeid :req.body.resumeid
    }).then(e=>{
       if(e.length!=0)
       {
          res.status(200).json('Exists');
       }else 
       {
          res.status(200).json('not exists');
       }
    });
 })

 module.exports = router