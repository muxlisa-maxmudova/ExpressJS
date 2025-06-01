import express from "express"
const app = express()
const cb1 = (req, res, next) => {
    console.log("First")
    next()
}
const cb2 = (req, res, next) => {
    console.log("Second")
    next()
}
const cb3 = (req, res) => {
    res.send("Third")
}

app.get("/", [cb1,cb2,cb3])
app.listen(8000, ()=>console.log("Running..."))