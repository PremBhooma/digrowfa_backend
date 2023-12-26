const express = require("express")
const cors = require("cors")

const { connection } = require("./config/db")
const { formRouter } = require("./routes/form.routes")


require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors({
    origin: "*"
}))

app.get("/", (req, res) => {
    res.send("HomeRoute")
})

app.use("/formData", formRouter)


app.listen(8010, async () => {
    try {
        await connection
        console.log("DB Success to Connected")
    } catch (err) {
        console.log("DB Failed to Connect")
        console.log(err)
    }
    console.log("Listening on 8010 Port")
})