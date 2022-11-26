const mongoose = require('mongoose')

const QuizModule = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Category'
    },
    noOfQuestions:{
        type:Number,
        required:true
    }
}, { timestamps: true })

module.exports = mongoose.model("QuizModule", QuizModule)