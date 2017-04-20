var express = require('express');
var jwt = require('jsonwebtoken')
require('dotenv').config() ;

module.exports = function (req,res) {
  // console.log(res.req.user);
  data = {
    '_id' : res.req.user._id,
    'username' : res.req.user.username,
    'email' : res.req.user.email,
    'name' : res.req.user.name,
  }
  let token = jwt.sign(data, process.env.SECRET_FOR_JWT)
  res.json(token)

}
