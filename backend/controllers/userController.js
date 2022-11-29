const User = require('../models/userModel')
const asyncHandler = require('express-async-handler');


const getUser = asyncHandler(async(req,res)=>{
    User.find((error, user) => {
        if (error) {
          return next(error)
        } else {
          res.json(user)
        }
      })
});
const getUserById = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    User.findById(id, function (error, user) {
        res.json(user)
    });
})
const updateUser =  asyncHandler(async(req,res) =>{
        User.findById(req.params.id, function (err, user) {
        if (!user){
            throw new Error('No user with this id')
        }
        else {
            user.username = req.body.username;
            user.email = req.body.email;
            user.password = req.body.password;
        
        user.save().then(userr => {
        res.json('user updated Successfully');
        })
        .catch(err => {
        res.status(400).send("unable to update user");
        });
        }
        });
})
const deleteUser = asyncHandler(async(req,res) =>{
        User.findByIdAndRemove({ _id: req.params.id }, 
        function (err, user) {
        if (err) {
            res.json(err);
        }    
        else {
            res.json('user deleted successfully');
        }    
        });
})

module.exports = {updateUser,getUser,getUserById,deleteUser}