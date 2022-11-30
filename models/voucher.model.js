const mongoose = require('mongoose')

const VoucherSchema = new mongoose.Schema({
    code:{
        type:String,
        required: true,
        unique: true
    },
    points:{
        type:Number,
        required: true
    },
    isActive:{
        type:Boolean,
        required:true,
        default:true
    }
})

module.exports = mongoose.model('Voucher', VoucherSchema)