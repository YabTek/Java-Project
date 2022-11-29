const User = require('../models/userModel')
const asyncHandler = require('express-async-handler');

const getUser = asyncHandler(async(req,res)=>{
    User.find((error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
});
const updateUser = (req,res)=>{

}

module.exports = {updateUser,getUser}