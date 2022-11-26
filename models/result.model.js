const mongoose = require('mongoose')

const Result = new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    quizModule:{
        type:mongoose.Types.ObjectId,
        ref:"QuizModule"
    },
    totalQuestions:{
        type:Number,
        required: true
    },
    questionAttempted:{
        type:Number,
        required:true
    },
    correctAnswers:{
        type:Number,
        required: true
    },
    wrongAnswers:{
        type:Number,
        required: true
    },  
    score:{
        type:Number,
        required:true
    } 
}, { timestamps: true })

module.exports = mongoose.model("Result", Result)