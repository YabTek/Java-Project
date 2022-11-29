const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const authRoute = require('./routes/authRoute')
const userRoute = require('./routes/userRoute')


app.use(express.json());
dotenv.config()

mongoose.connect("mongodb://127.0.0.1/netflix")
.then(()=>console.log("connected to mongoDB"))
.catch(err=>console.log(err))

app.use('/api/users',authRoute)
app.use('/api/users',userRoute)
app.get('/',(req,res)=>{
    res.end('hello world');
})

app.listen(5000,()=>{
    console.log('server running on port 5000')
})

