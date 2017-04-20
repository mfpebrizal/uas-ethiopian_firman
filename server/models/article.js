const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('../config/db')

var articleSchema = new Schema({
  content : String,
  title : String,
  author : {type : Schema.Types.ObjectId, ref: 'User'}
},{
  timestamps : true
})

var Article = mongoose.model('Article', articleSchema)

module.exports = Article
