const Movielist = require('../models/movielistModel')

const createMovielist = (req,res) => {
    //if(req.user.isAdmin){
        const newMovielist =  new Movielist(req.body)
        try{
        const movielist =  newMovielist.save()
        res.json(movielist)
        }catch(err){
            res.json(err)
        
     //}
    }
    
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
const getMovielist = async(req,res)=>{
    const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];
  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery, genre: genreQuery } },
        ]);
      } else {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery } },
        ]);
      }
    } else {
      movielist = await Movielist.aggregate([{ $sample: { size: 10 } }]);
    }
    res.status(200).json(movielist);
  } catch (err) {
    res.status(500).json(err);
  }
    
};


const deleteMovielist = (req,res) =>{
    //if(req.user.isAdmin){
        Movielist.findByIdAndRemove({ _id: req.params.id }, 
            function (err, movielist) {
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

module.exports = {createMovielist,getMovielist,deleteMovielist}