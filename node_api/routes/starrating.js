const express = require('express');
const router = express.Router();
const rating = require('../schemas/rating');
//for post starating
router.post("/",async (req,res)=>{
   postRating =await new rating({
      userid : req.body.userid,
      resumeid : Number(req.body.resumeid),
      stars : req.body.stars
   });
  await postRating.save();
  res.status(200).json('inserted');
});


module.exports = router;