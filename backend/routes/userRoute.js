const express = require('express')
const router = express.Router()
const {updateUser,getUser, getUserById,deleteUser} = require('../controllers/userController')
const verifyToken = require('../TokenMatch')

//get all users
router.route('/').get(getUser)

//get a user by id
router.route('/:id').get(getUserById)

//update user
router.route('/:id',verifyToken).put(updateUser)

//delete
router.route('/:id',verifyToken).delete(deleteUser)

//get user stats


module.exports = router
