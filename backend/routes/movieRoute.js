const express = require('express')
const router = express.Router()
const {updateMovie,getMovie,createMovie, getMovieById,deleteMovie,getRandomMovie} = require('../controllers/movieController')
const verifyToken = require('../TokenMatch')

//create movies 
router.route('/',verifyToken).post(createMovie)
//get all movies
router.route('/',verifyToken).get(getMovie)
//get random movie
router.route('/random',verifyToken).get(getRandomMovie)
//get a movie by id
router.route('/find/:id',verifyToken).get(getMovieById)
//update movie
router.route('/:id',verifyToken).put(updateMovie)

//delete movie
router.route('/:id',verifyToken).delete(deleteMovie)



module.exports = router
