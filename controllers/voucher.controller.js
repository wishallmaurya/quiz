const Voucher = require('../models/voucher.model')
const User = require('../models/users.model')
var voucher_codes = require('voucher-code-generator');

exports.createVoucher = async (req,res,next) =>{
    try{
        const code = await voucher_codes.generate({
            length: 8,
            count: 1
        });
        console.log(code)
        const voucher = new Voucher({
            code : code[0],
            points : req.body.points,
            isActive: req.body.isActive
        })
        const savedVoucher = await voucher.save()
        res.status(200).send({
            success: true,
            data:savedVoucher,
            message:"Voucher created successfully"
        })
    }catch(error){
        next(error)
    }
}

exports.getVoucher = async (req,res,next) =>{
    try{
        const data =  await Voucher.find({}).sort({createdAt:-1})
        res.status(200).send({
            success: true,
            data,
            message:"Voucher fetched successfully"
        })
    }catch(error){
        next(error)
    }
}

exports.updateVoucheer = async ( req, res, next) =>{
    try{
        const updated = await Voucher.findByIdAndUpdate(req.params.id , req.body , {new:true})
        res.status(200).send({
            success: true,
            data: updated,
            message:"Voucher updated successfully"
        })
    }catch(error){
        next(error)
    }
}
exports.deletedVoucheer = async ( req, res, next) =>{
    try{
        const deleted = await Voucher.findByIdAndDelete(req.params.id)
        res.status(200).send({
            success: true,
            data: deleted,
            message:"Voucher updated successfully"
        })
    }catch(error){
        next(error)
    }
}

exports.redeemVoucher = async (req, res, next) =>{
    try{
    const userId  =req.user.id
    const voucherId = req.params.id
    const voucher = await Voucher.findById(voucherId)
    const redeemed =await  User.findByIdAndUpdate(userId,{$push:{rewards:{
        rewardType:"voucher",
        code: voucher.code,
        points:voucher.points,
        date: new Date(),
    }}} ,{new:true})
    res.status(200).send({
        success: true,
        data: redeemed,
        message:"Voucher redeemed successfully"
    })
    // res.send("ok")
    }catch(error){
        next(error)
    }
}
