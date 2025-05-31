import express from 'express';
const app = express();
app.get("/single-cb", (req,res, next)=>{
    console.log("GET /single-cb");
    next()
}, (req,res)=>{
    res.send("Got second callback function ❤")
})

app.listen(8000, ()=>console.log("Server is running on 8000 port"))