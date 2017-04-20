const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('../config/db')

var userSchema = new Schema({
  name : String,
  username : String,
  email : String,
  password : String,
  articles : [{type : Schema.Types.ObjectId, ref: 'Article'}]
},{
  timestamps : true
})

var User = mongoose.model('User', userSchema)

module.exports = User
