const express = require("express")
const Questions = require("../db/modelQues.js")
const allQues = require("../db/allQues.js")
const connectToMongoDB = require("../db/connectDB.js");

const allQuestionController = async (req, res) => {
    try {
        const questions = await Questions.find();
        res.json(questions);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const topicQuestionController = async (req, res) => {
    const topic = req.params.topic
    try {
        const questions = await Questions.find({ topic: topic });
        if (questions.length === 0) {
            return res.status(404).json({ message: 'No questions found for this topic' })
        }
        res.json(questions)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = { allQuestionController, topicQuestionController }