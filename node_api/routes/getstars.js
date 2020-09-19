const express = require('express');
const router = express.Router();
const rating = require('../schemas/rating');
router.get("/",(req,res)=>{
   rating.aggregate([
    {$group:{_id:"$resumeid",stars:{$avg:"$stars"}}
}]).then(e=>{
    res.status(200).json(e);
});
});

module.exports = router