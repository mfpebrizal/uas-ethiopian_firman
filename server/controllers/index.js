const User = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config() ;
const methods = {}
const passwordHash = require('password-hash');

methods.register = function (req,res,next) {

  User.findOne({username : req.body.email}, function (err, result) {
    if(err) {res.json(err)}
    else {
      if (!result) {

        req.body.password = passwordHash.generate(req.body.password)

        User.create(req.body, function (err, result) {
          if(err){
            res.json(err)
          }else{
            let data ={
              name : result.name,
              username : result.username,
              email : result.email,
              _id : result._id,
              _articles : result._articles
            }
            res.json(data)
          }
        })
      }else{
        res.json("username is already used")
      }
    }
  })
}



module.exports = methods
