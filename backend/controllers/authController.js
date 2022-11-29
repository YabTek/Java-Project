const User = require('../models/userModel')

const registerUser = async(req,res) => {
   const {username,email,password} = req.body
   const newUser = await new User({username,email,password})

   try{
      const user = await newUser.save()
      res.json({
       usename : user.username,
       email: user.email,
       
   
      })
   }
   catch(err){
      throw new Error('error occured')
   }
   
}

module.exports = registerUser