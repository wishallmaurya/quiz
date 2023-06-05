const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
    {
        profilePhoto:{
            type:String,
            default: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
        },
        username: {
            type: String,
            required: true,
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
            required: true,
        },
        role: {
            type: String,
            default: "admin"
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Admin", AdminSchema);