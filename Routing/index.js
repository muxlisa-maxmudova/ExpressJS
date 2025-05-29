import express from "express"
const app = express()
app.get("/", (req, res)=>{
    res.send("Welcome")
})
app.get("/about", (req, res)=>{
    res.send("<h1>About us</h1?")
})
app.listen(8000, ()=>console.log("Server is running on 8000 port"))