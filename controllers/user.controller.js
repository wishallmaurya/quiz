const userModel = require("../models/users.model")
const bcrypt = require('bcrypt')
const { createError } = require('../utils/error');
const { hashSync, genSaltSync } = require("bcrypt");
const jwt = require('jsonwebtoken')

exports.createUser = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const user = new userModel({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            address: req.body.address,
            referralCode: req.body.username.toLowerCase().slice(0, 4) + (Math.floor(Math.random() * 999) + 100)
        })
        const savedUser = await user.save();
        savedUser.password = undefined;
        res.status(200).send({
            success: true,
            data: savedUser,
            message: "User created successfully"
        })
    } catch (error) {
        next(error)
    }
}

exports.getUsers = async (req, res, next) => {
    try {
        const data = await userModel.find({}, { password: 0 })
        res.status(200).json({
            success: true,
            data,
            message: "Users fetched successfully"
        })
    } catch (error) {
        next(error)
    }
}

exports.updateById = async (req, res, next) => {
    const { id } = req.params;
    let hashPassword
    const {
        username,
        address,
        password
    } = req.body;
    if (password) {
        const salt = genSaltSync(10);
        hashPassword = hashSync(password, salt);
    }
    try {
        let updated;
        const options = {
            new: true
        }
        if (req.file) {
            const baseUrl = `${req.protocol}://${req.headers.host}`;
            const fullPath = `${baseUrl}/uploads/${req.file?.filename}`
            updated = await userModel.findByIdAndUpdate(id, {
                profilePhoto: fullPath,
                password: hashPassword,
                username,
                address
            }, options)
        } else {
            updated = await userModel.findByIdAndUpdate(id, {
                password: hashPassword,
                username,
                address
            }, options)
        }
        updated.password = undefined
        res.status(200).send({
            success: true,
            data: updated,
            message: "User updated successfully"
        })
    } catch (error) {
        next(error)
    }

}

exports.deleteUser = async (req, res, next) => {
    try {
        const deleted = await userModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            data: deleted,
            message: "User deleted successfully"
        })
    } catch (error) {
        next(error)
    }
}

exports.UserSignIn = async (req, res, next) => {
    try {
        const { username } = req.body
        const user = await userModel.findOne({ $or: [{ "username": username }, { "email": username }] })
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

exports.getUserById = async (req, res, next) => {
    try {
        const user = req.user;
        const User = await userModel.findById(user.id, { password: 0, role: 0 });
        res.status(200).json({
            success: true,
            data: User,
            message: "User fetched successfully"
        })
    } catch (error) {
        next(error)
    }
}
