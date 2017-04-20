var express = require('express');
var app = express.Router()
var Article = require('../models/article')
var User = require('../models/user')
let methods = {}

methods.create = function (req,res) {
  let article = new Article({
    content : req.body.content,
    title : req.body.title,
    _author : req.body.authorId
  })

  article.save(function (err, response) {
    if (err) {res.json(err)}
    else {
      User.findByIdAndUpdate(req.body.authorId,
            { $push: { "_articles": response._id}},
            {safe: true, upsert: true, new: true},
            function (err,result) {
              if (err) {res.json(err) }
              else{ res.json(result) }
            }
          )
    }
  })
}

methods.findAll = function (req,res) {

  Article
  .find({})
  .populate('_author')
  .exec(function (err, data) {
    if (err) { res.json(err) }
    else {res.json(data)}
  })
}

methods.findById = function (req,res) {

  Article.findOne({ _id:req.params.id})
  .populate('articles')
  .exec(function (err, data) {
    if (err) { res.json(err) }
    else {res.json(data)}
  })
  
}

methods.update = function (req,res) {
  Article.findByIdAndUpdate({'_id' : req.params.id}, {$set : req.body},{new : true}, function (err,result) {
    if (err) {
      res.json(err)
    }else{
      res.json(result)
    }
  })
}

methods.delete = function (req,res) {
  Article.findByIdAndRemove(req.params.id, function (err, result) {
    if (err) {
      res.json(err)
    }else{
      res.json(result)
    }
  })
}

module.exports = methods
