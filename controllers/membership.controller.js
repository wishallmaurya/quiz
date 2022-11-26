const Membership = require('../models/membership.model')

exports.createMembership = async(req, res, next) =>{
    try{
        const membership = new Membership(req.body);
        const savedMembership = await membership.save()
        res.status(200).send({
            success: true,
            data: savedMembership,
            message:"Membership created successfully"
        })
    }catch(error){
        next(error)
    }
}

exports.getMemberships = async (req, res, next) =>{
    try{
        const data = await Membership.find({}).sort({createdAt:-1}).exec()
        res.status(200).send({
            success:true,
            data,
            message:"Memberships fetched successfully"
        })
    }catch(error){
        next(error)
    }
}

exports.updateMemberships = async (req, res, next) =>{
    try{
        const updated = await Membership.findByIdAndUpdate(req.params.id , req.body , {new:true})
        res.status(200).send({
            success: true,
            data: updated,
            message:"Membership updated successfully"
        })
    }catch(error){
        next(error)
    }
}

exports.deleteMemberships = async (req, res, next) =>{
    try{
        const deleted = await Membership.findByIdAndDelete(req.params.id);
        res.status(200).send({
            success: true,
            data: deleted,
            message:"Membership deleted successfully"
        })
    }catch(error){
        next(error)
    }
}