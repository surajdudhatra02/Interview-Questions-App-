const express = require("express")
const { allQuestionController, topicQuestionController } = require("../controller/questionController")
const router = express.Router()

router.get("/question", allQuestionController)
router.get("/question/:topic", topicQuestionController)

module.exports = router