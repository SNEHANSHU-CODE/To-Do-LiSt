
const express = require('express');
const app = express();
const cors = require("cors");
//const router = express.Router();
//const database = require('./database');
const port = 5000
const user = require("./models/user")

app.use(express.json());
app.use(cors());

const mongoose = require('mongoose');
const db_link='mongodb+srv://Admin:t4UaVnaztokq36sm@mernuser.mzkelwc.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(db_link)
.then(function(db){
    // console.log(db)
    console.log("db connected");
})
.catch(function(err){
    console.log(err);
})

 app.post("/", middleware1 , middleware2);

 app.get("/", middleware2 );

 app.delete("/", middleware3 , middleware2);

async function middleware1(req, res ,next){
  try{
  let taskitem = req.body;
  //await userModel.create(dataObj);
  await user.create(taskitem);
  res.status(201).send();
  next();
  }catch (error) {
    res.status(404).json({ message: error.message });
  }
}

async function middleware2 (req, res){
  try {
    let taskitem = await user.find();
    res.status(200).json(taskitem);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

async function middleware3(req, res ,next){
  try{
  let objId = req.body.elementId;
  console.log(objId);
  await user.deleteOne({"_id":objId});
  res.status(201).send();
  next();
  }catch (error) {
    res.status(404).json({ message: error.message });
  }
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})