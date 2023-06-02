const Admin = require('../models/admin.model')
var bcrypt = require('bcryptjs');
const { createError } = require('../utils/error');
const jwt = require('jsonwebtoken')


exports.register = async (req, res, next) => {
    console.log('admin up')
    try {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
        
        const admin = new Admin({
            username: req.body.username,
            password: hash,
            email: req.body.email
        })
        const savedAdmin = await admin.save();
        res.status(201).send({
            success: true,
            data: savedAdmin,
            message: "Admin created successfully"
        })
    } catch (err) {
        next(err)
    }
}

exports.login = async (req, res, next) => {
    try {
        const { username } = req.body
        if(!username){
            return res.status(200).send({
              success: false,
              message: "Enter Username or Email",
            });
          }
        const user = await Admin.findOne({ $or: [{ username: username }, { email: username }] })
        if (!user){
            return res.status(200).send({
              success: false,
              message: "Admin Not Found",
            });
          }
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect){
            return res.status(200).send({
              success: false,
              message: "Incorrect Password",
            });
          }
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT)
        const { password, role, ...options } = user._doc
        res.status(200).json({
            success: true,
            data: { token, ...options },
            message: "Logged In Successfully"
        })
    } catch (error) {
        next(error)
    }
}