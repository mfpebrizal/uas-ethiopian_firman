const Strategy = require('passport-local').Strategy;
const User = require('../models/user');


module.exports = function (passport) {
  passport.use(new Strategy(
  function(username, password, cb) {
    User.findOne({username : username}, function (err, user) {
      if (err) {cb(err)}
      else{
        if (!user) {
          cb(null, false)
        }else{
          if (password === user.password) {
            cb(null, user)
          }else{
            cb(null, false)
          }
        }
      }
    })
  }));
}
