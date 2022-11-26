const mongoose = require('mongoose')

const Question = new mongoose.Schema({
    quizModule:{
        type: mongoose.Types.ObjectId,
        ref: 'QuizModule'
    },
    question:{
        type:String,
        required: true
    },
    options:[
        {
            option:{type:String , required: true},
            isCorrect:{type:Boolean , required:true,default:false}
        }
    ]
}, { timestamps: true })

module.exports = mongoose.model("Question", Question)