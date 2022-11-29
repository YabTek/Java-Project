const express = require('express')
const router = express.Router()
const {updateUser,getUser} = require('../controllers/userController')

//get all users
router.route('/').get(getUser)
//get a user by id
router.route('/:id').get
//update
router.route('/:id').put(updateUser)

//delete
//router.route('./:id').delete(deleteUser)


module.exports = router
