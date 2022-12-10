const express = require('express')
const router = express.Router()
const {updateMovielist,getMovielist,createMovielist, deleteMovielist} = require('../controllers/movielistController')
const verifyToken = require('../TokenMatch')

//create movielist
router.route('/',verifyToken).post(createMovielist)
//get all movielist
router.route('/',verifyToken).get(getMovielist)
//delete movielist
router.route('/:id',verifyToken).delete(deleteMovielist)



module.exports = router
