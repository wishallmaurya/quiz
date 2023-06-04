const Result = require('../models/result.model')

exports.createResult = async (req, res, next) => {
    console.log(req.body)
    try {
        const userId = req.user?.id;
        const result = new Result({
            userId,
            quizModule:req.body.quizModule,
            totalQuestions: req.body.totalQuestions,
            questionAttempted: req.body.questionAttempted,
            correctAnswers: req.body.correctAnswers,
            wrongAnswers:req.body.wrongAnswers,
            score:req.body.score
        })
        const savedResult =await result.save();
        res.status(200).send({
            success: true,
            data: savedResult,
            message:"Result creeated Successfully"
        })
    } catch (error) {
        next(error)
    }
}

exports.getAllResults = async (req, res, next) =>{
    try{
        const data = await Result.find({}).populate('userId quizModule').sort({createdAt:-1})
        res.status(200).send({
            success: true,
            data,
            message:"Result fetched successfully"
        })

    }catch(error){
        next(error)
    }
}

exports.getResultbyUser = async(req, res, next) =>{
    try{
        // console.log(req.user,'this')
        // const userId = req.user?.id
        const userId = req.params.id

        const results = await Result.find({userId}).populate('userId quizModule').sort({createdAt:-1})
        res.status(200).send({
            success: true,
            data: results,
            message:"Results fetched successfully"
        })
    }catch(error){
        next(error)
    }
}