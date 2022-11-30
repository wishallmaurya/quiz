const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    profilePhoto:{
        type:String,
        default: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        match: /^\S+@\S+\.\S+$/,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default:"user"
    },
    referralCode:{
        type:String,
    },
    rewards:[{
        rewardType:{
            type:String,
            required: true
        },
        points:{
            type:Number,
            required: true
        },
        date:{
            type:Date
        },
        code:{
            type:String,
        }
    }],
    address:{
        type:String,
    }
}, { timestamps: true })

module.exports = mongoose.model('User', UserSchema)