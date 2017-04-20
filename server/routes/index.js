var express = require('express');
var router = express.Router()
var passport = require('passport');
var helper = require('../helpers/generateToken')
var User = require('../controllers/index')

router.post('/login', passport.authenticate('local'), helper)
router.post('/register', User.register)

module.exports = router
