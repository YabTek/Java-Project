const express = require("express")
const app = express()
const mongoose = require("mongoose")
const authRoute = require('./routes/authRoute')

app.use(express.json())

mongoose.connect("mongodb://127.0.0.1/netflix")
.then(()=>console.log("connected to mongoDB"))
.catch(err=>console.log(err))

app.use('/api/users',authRoute)
app.get('/',(req,res)=>{
    res.end('hello world');
})

app.listen(5000,()=>{
    console.log('server running on port 5000')
})

