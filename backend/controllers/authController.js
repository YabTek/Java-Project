const User = require('../models/userModel')
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');



const registerUser = asyncHandler(async(req,res) => {
   const {username,email,password} = req.body
   const newUser = await new User({username,email,password})

   try{
      const user = await newUser.save()
      res.json({
       usename : user.username,
       email: user.email,
       _id: user._id,
       token: generateToken(user._id)


   
      })
   }
   catch(err){
      throw new Error('error occured')
   }
   
});

const logUser = asyncHandler(async(req,res) => {
   const {email,password} = req.body
   const user = await User.findOne({email})

  if (user && (await user.matchPassword(password))){
   res.json({
       username: user.username,
       email: user.email,
       _id : user._id,
       token: generateToken(user._id)

   })
  }
  else{
   res.sendStatus(400);
   throw new Error('Invalid email or password');
}
})

module.exports = {registerUser,logUser}