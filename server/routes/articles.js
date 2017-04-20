var express = require('express');
var router = express.Router()
var article = require('../controllers/article')

router.post('/', article.create)
router.get('/', article.findAll)
router.get('/:id', article.findById)
router.put('/:id', article.update)
router.delete('/:id', article.delete)

module.exports = router
