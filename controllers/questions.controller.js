const { default: mongoose } = require('mongoose')
const Questions = require('../models/questions.model')

exports.create = async (req, res, next) => {
    try {
        const questions = new Questions(req.body)
        const savedQuestions = await questions.save()
        res.status(200).send({
            success: true,
            data: savedQuestions,
            message: "Questions created successfully"
        })
    } catch (error) {
        next(error)
    }
}

exports.questionsByModule = async (req, res, next) => {
    try {
        const quizModule = new mongoose.Types.ObjectId(req.params.id)
        const size = req.query.noOfQuestions || 1

        const data = await Questions.aggregate(
            [{$match:{quizModule}},{ $sample: { size: parseInt(size) } } ,{$limit:parseInt(size)}]
        )

        // .populate('quizModule')
        // .sort({ createdAt: -1 })
        // .limit(1)
        res.status(200).json({
            success: true,
            data,
            message: "Questions fetched successfully"
        })
    } catch (error) {

    }
}

exports.updateQuestions = async (req, res, next) => {
    try {
        const updated = await Questions.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).send({
            success: true,
            data: updated,
            message: "Question updated successfully"
        })
    } catch (error) {
        next(error)
    }
}

exports.deleteQuestions = async (req, res, next) => {
    try {
        const deleted = await Questions.findByIdAndDelete(req.params.id)
        res.status(200).send({
            success: true,
            data: deleted,
            message: "Question deleted successfully"
        })
    } catch (error) {
        next(error)
    }
}