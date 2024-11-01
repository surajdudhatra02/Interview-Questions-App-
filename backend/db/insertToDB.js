const QuestionModel = require('./modelQues.js');
const newQuestions = require('./allQues.js');
const connectToMongoDB = require("./connectDB.js");

setTimeout(() => {
    QuestionModel.insertMany(newQuestions, { ordered: false })
        .then(result => {
            console.log(`${result.length} new question(s) added.`);
        })
        .catch(err => {
            if (err.code === 11000) {
                console.log('Duplicate question(s) skipped.');
            } else {
                console.error('Error inserting questions:', err.message);
            }
        });
}, 20000);

