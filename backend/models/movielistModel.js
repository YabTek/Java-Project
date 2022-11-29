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
     isSeries : {
        type: Boolean,
        default: false
     },
    },
    {
        timestamps: true
    }
)

const Movielist = mongoose.model('list',movielistSchema)
module.exports = Movielist