const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        unique: true,  
    },
    topic: {
        type: String,
        required: true,  
    }
});

const QuestionModel = mongoose.model('Questions', questionSchema); 

module.exports = QuestionModel; 
