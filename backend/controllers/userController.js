const User = require('../models/userModel')


const getUser = (req,res)=>{
    //if(req.user.isAdmin){
        User.find((error, user) => {
            if (error) {
              return next(error)
            } else {
              res.json(user)
            }
          })
    }
    
//};

const getUserById =(req,res)=>{
    const id = req.params.id;
    User.findById(id, function (error, user) {
        res.json(user)
    });
};

const updateUser =  (req,res) =>{ 
     //  if(req.user.id === req.params.id || req.user.isAdmin){
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
        // }
        // else{
        //     res.json("this is not your account")
        // }
};

const deleteUser = (req,res) =>{
    //if(req.user.id == req.params.id || req.user.isAdmin){
        User.findByIdAndRemove({ _id: req.params.id }, 
            function (err, user) {
            if (err) {
                res.json(err);
            }    
            else {
                res.json('user deleted successfully');
            }    
            });
    // }
    // else{
    //     res.json("this is not your account")
    // }
      
};

module.exports = {updateUser,getUser,getUserById,deleteUser}