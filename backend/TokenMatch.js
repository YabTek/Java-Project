const jwt = require("jsonwebtoken")

function verifyToken(req,res,next){
    const get_token = req.headers.jwtToken;
    if(get_token){
        const token = get_token.split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET,(err,user) =>{
            if(err) res.status(403).json("Invalid token");
            req.user = user;
            next();
        })
    }
    else{
        return res.status(401).json("You are unable to authenticate")
    }
}

module.exports = verifyToken