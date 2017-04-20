var express = require('express');
var app = express.Router()
var User = require('../models/user')
let methods = {}

methods.create = function (req,res) {
  let user = new User({
    name : req.body.name,
    email : req.body.email,
    password : req.body.password,
    username : req.body.username,
    _articles : []
  })

  user.save(function (err, response) {
    if (err) res.json(err)
    res.json(response)
  })
}

methods.findAll = function (req,res) {
  User.find({})
  .populate('articles')
  .exec(function (err, data) {
    if (err) { res.json(err) }
    else {res.json(data)}
  })
}

methods.findById = function (req,res) {
  User.findOne({ _id:req.params.id})
  .populate('articles')
  .exec(function (err, data) {
    if (err) { res.json(err) }
    else {res.json(data)}
  })
}
//
// methods.update = function (req,res) {
//   User.findByIdAndUpdate({'_id' : req.params.id}, {$set : req.body},{new : true}, function (err,result) {
//     if (err) {
//       res.json(err)
//     }else{
//       res.json(result)
//     }
//   })
// }
//
// methods.delete = function (req,res) {
//   User.findByIdAndRemove(req.params.id, function (err, result) {
//     if (err) {
//       res.json(err)
//     }else{
//       res.json(result)
//     }
//   })
// }

module.exports = methods
