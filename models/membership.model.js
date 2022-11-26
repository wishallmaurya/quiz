const mongoose = require("mongoose");

const MembershipSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required: true
        },
        features: [
            {
                type: String
            }
        ],
        membershipType: {
            type: String
        },
        price: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Membership", MembershipSchema);