const mongoose = require('mongoose')

const movielistSchema = new mongoose.Schema({
    title : {
       type: String,
       required: true,
       unique: true,
    },
    type : {
        type: String,
     },
    content : {
        type: Array,
     },
    genre : {
      type: String
     },
    },
    {
        timestamps: true
    }
)

const Movielist = mongoose.model('movielist',movielistSchema)
module.exports = Movielist