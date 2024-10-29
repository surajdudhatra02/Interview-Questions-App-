const express = require("express")
const Questions = require("./db/modelQues.js")
const allQues = require("./db/insertToDB.js")
const connectToMongoDB = require("./db/connectDB.js");

const questionRouter = require("./routes/questionRoute.js")
const port = process.env.PORT || 3000

const dotenv = require("dotenv")
const app = express()

dotenv.config()


app.use(express.json())

app.use("/api", questionRouter)


app.listen(port, () => {
    connectToMongoDB();
    console.log("Server started")
})

