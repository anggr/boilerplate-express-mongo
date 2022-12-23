const express = require('express')
const router = express.Router()
const { home } = require('../controller/auth')
// const auth = require('../middleware/authMiddleware')
router.get('/login', home)

module.exports = router
