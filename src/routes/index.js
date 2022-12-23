const express = require('express')
const { home } = require('../controller/auth')
const router = express.Router()
const auth = require('./auth')
router.use('/user', auth)
router.get('/', home)
module.exports = router
