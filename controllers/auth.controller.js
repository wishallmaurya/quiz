const Admin = require('../models/admin.model')
var bcrypt = require('bcryptjs');
const { createError } = require('../utils/error');
const jwt = require('jsonwebtoken')


exports.register = async (req, res, next) => {
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
        const user = await Admin.findOne({ $or: [{ "username": username }, { "email": username }] })
        if (!user) return next(createError(404, "User not found!"))
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) return next(createError(400, "Wrong password"))
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