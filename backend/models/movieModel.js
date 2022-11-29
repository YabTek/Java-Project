const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title : {
       type: String,
       required: true,
       unique: true,
    },
    description : {
        type: String,
     },
     img : {
        type: String,
     },
     imgtitle : {
        type: String,
     },
     imgtiny : {
        type: String,
     },
     trailer : {
        type: String,
     },
     video : {
        type: String,
     },
     isSeries : {
        type: Boolean,
        default: false
     },
    },
    {
        timestamps: true
    }
)

const Movie = mongoose.model('movie',movieSchema)
module.exports = Movie