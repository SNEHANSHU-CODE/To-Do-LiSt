const json  = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
      text:{
        type:String,
        // type:TimeRanges,
      }
});

const user = mongoose.model('user', taskSchema);
module.exports = user;
