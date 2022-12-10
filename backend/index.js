const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const authRoute = require('./routes/authRoute')
const userRoute = require('./routes/userRoute')
const movieRoute = require('./routes/movieRoute')
const movielistRoute = require('./routes/movielistRoute')


app.use(express.json());
dotenv.config()

mongoose.connect("mongodb://127.0.0.1/netflix")
.then(()=>console.log("connected to mongoDB"))
.catch(err=>console.log(err))

app.use('/api/users',authRoute)
app.use('/api/users',userRoute)
app.use('/api/movies',movieRoute)
app.use('/api/movielist',movielistRoute)



app.get('/',(req,res)=>{
    res.end('hello world');
})

app.listen(process.env.PORT,()=>{
    console.log('server running on port 5000')
})

