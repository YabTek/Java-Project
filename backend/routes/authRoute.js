const express = require('express')
const router = express.Router()
const {registerUser,logUser } = require('../controllers/authController')

router.route('/register').post(registerUser)
router.route('/login').post(logUser)

module.exports = router
