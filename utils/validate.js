const jwt = require('jsonwebtoken')
const {createError} = require('../utils/error')


exports.verifyToken = (req, res, next) =>{
    let token = req.headers.authorization || req.headers.token;
    if(!token) return next(createError(401 ,"You are not authenticated!"))
    token = token.replace("Bearer ", "");
    jwt.verify(token , process.env.JWT , (err, user) =>{
        if (err) next(createError(403, "Token is not valid!"))
        req.user = user;
        next() 
    })
}

exports.verifyUser =(req, res, next) =>{

    this.verifyToken(req,res,next, ()=>{
        console.log("req.user --" , req.user)
        if(req.user.id === req.params.id || req.user.role ==="admin"){
            next()
        } else{ 
            return next(createError(403,"You are not authorized!"))
        }
    })
}
exports.verifyAdmin =(req, res, next) =>{
    this.verifyToken(req,res, ()=>{
        if(req.user?.role === "admin"){
            next()
        } else{
            return next(createError(403,"You are not authorized!"))
        }
    })
}