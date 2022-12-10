const Movie = require('../models/movieModel')

const createMovie = async(req,res) => {
    //if(req.user.isAdmin){
        const newMovie = await new Movie(req.body)
        try{
        const movie = await newMovie.save()
        res.json(movie)
        }catch(err){
            res.json(err)
        
     }
    //}
    
//     const {title,description} = req.body
//    const newMovie= await new Movie({title,description})

//    try{
//       const movie = await newMovie.save()
//       res.json({
//        title : movie.title,
//        description: movie.description
   
//       })
//    }
//    catch(err){
//       throw new Error('error occured')
//    }
    
}
const getMovie = (req,res)=>{
    //if(req.user.isAdmin){
        Movie.find((error, movie) => {
            if (error) {
              return next(error)
            } else {
              res.json(movie.reverse())
            }
          })
    }
    
//};
const getRandomMovie = (req,res) =>{
    const type = req.query.type;
    let movie;
    try {
      if (type === "series") {
        movie =  Movie.aggregate([
          { $match: { isSeries: true } },
          { $sample: { size: 1 } },
        ]);
      } else {
        movie =  Movie.aggregate([
          { $match: { isSeries: false } },
          { $sample: { size: 1 } },
        ]);
      }
      res.status(200).json(movie);
    } catch (err) {
      res.status(500).json(err);
    }
}

const getMovieById =(req,res)=>{
    const id = req.params.id;
    Movie.findById(id, function (error, movie) {
        res.json(movie)
    });
};

const updateMovie =  (req,res) =>{ 
      // if(req.user.isAdmin){
         Movie.findById(req.params.id, function (err, movie) {
            if (!movie){
                throw new Error('No movie with this id')
            }
            else {
                movie.title = req.body.title;
                movie.description = req.body.description;
            movie.save().then(film => {
            res.json('movie updated Successfully');
            })
            .catch(err => {
            res.status(400).send("unable to update movie");
            });
            }
            });
        // }
        // else{
        //     res.json("you are not allowed")
        // }
             };
        

const deleteMovie = (req,res) =>{
    //if(req.user.isAdmin){
        Movie.findByIdAndRemove({ _id: req.params.id }, 
            function (err, movie) {
            if (err) {
                res.json(err);
            }    
            else {
                res.json('movie deleted successfully');
            }    
            });
    // }
    // else{
    //     res.json("this is not your account")
    // }
      
};

module.exports = {createMovie,updateMovie,getMovie,getRandomMovie,getMovieById,deleteMovie}