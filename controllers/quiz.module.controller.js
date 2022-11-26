const QuizModule = require('../models/quiz.module.model')

exports.create =async (req, res , next) =>{
    try{
        const quizModule = new QuizModule(req.body)
        const savedQuizModule = await quizModule.save()
        res.status(200).send({
            success: true,
            data:savedQuizModule,
            message:"Quiz module created successfully"
        })
    }catch(error){
        next(error)
    }
}

exports.getModules = async(req, res, next) =>{
    try{
        const data = await QuizModule.find({}).sort({createdAt:-1}).populate("category")
        res.status(200).send({
            success: true,
            data,
            message:"Quiz module fetched successfully"
        })
    }catch(error){
        next(error)
    }
}

exports.moduleByCategory = async(req, res, next) =>{
    try{
        const data = await QuizModule.find({category: req.params.id})
        .populate('category')
        .sort({createdAt:-1})
        res.status(200).json({
            success: true,
            data,
            message:"Quiz module fetched successfully"
        })
    }catch(error){

    }
}

exports.updateModules = async (req, res, next) =>{
    try{
        const updated = await QuizModule.findByIdAndUpdate(req.params.id , req.body,{new:true})
        res.status(200).send({
            success:true,
            data: updated,
            message:"Quiz module updated successfully"
        })
    }catch(error){
        next(error)
    }
}

exports.deleteModules = async (req, res, next) =>{
    try{
        const deleted = await QuizModule.findByIdAndDelete(req.params.id)
        res.status(200).send({
            success:true,
            data: deleted,
            message:"Quiz module deleted successfully"
        })
    }catch(error){
        next(error)
    }
}