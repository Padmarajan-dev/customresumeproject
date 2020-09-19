const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const starrouting = require('./routes/starrating');
const checkreview = require('./routes/checkrating');
const getstars = require('./routes/getstars');
const mongo = require('mongoose');
require('dotenv/config');
//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//port 
const port = 3000;

//router
app.use("/starrating",starrouting);
app.use("/checkreview",checkreview);
app.use("/avgrating",getstars);

//connection for db
mongo.set('useNewUrlParser',true);
mongo.set('useUnifiedTopology',true);
mongo.connect(process.env.RATING_DB ,(err)=>{
  if(!err)
  {
    console.log('db connected successfully');
  }else 
  {
    console.log('connection failed');
  }
});

app.listen(port,()=>{
  console.log('server started on '+port);
});