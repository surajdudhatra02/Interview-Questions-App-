const express = require("express")
const Questions = require("./db/modelQues.js")
const allQues = require("./db/insertToDB.js")
const connectToMongoDB = require("./db/connectDB.js");
const path = require("path");

const questionRouter = require("./routes/questionRoute.js")
const port = process.env.PORT || 3000

const dotenv = require("dotenv")
const app = express()

dotenv.config()

const _dirname = path.resolve()

app.use(express.json())
app.use("/api", questionRouter)

app.use(express.static(path.join(_dirname, "/frontend/dist")))
app.get("*", (req, res) => {
    res.send(path.resolve(_dirname, "frontend", "dist", "index.html"))
})

connectToMongoDB();

app.listen(port, () => {
    console.log("Server started")
})

