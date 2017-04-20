var express = require('express');
var router = express.Router()
var user = require('../controllers/user')

// router.post('/', user.create)
router.get('/', user.findAll)
router.get('/:id', user.findById)
router.put('/:id', user.update)
router.delete('/:id', user.delete)

module.exports = router
