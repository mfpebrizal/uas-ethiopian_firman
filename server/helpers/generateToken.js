var express = require('express');
var jwt = require('jsonwebtoken')

module.exports = function (req,res) {
  // console.log(res.req.user);
  data = {
    '_id' : res.req.user._id,
    'username' : res.req.user.username,
    'email' : res.req.user.email
  }
  let token = jwt.sign(data, 'hacktivoverflow')
  console.log(typeof token);
  res.json(token)

}
