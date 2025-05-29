//Application of regEx in frequent and structured queries (paths):
import express from 'express';
const app = express();
app.get("/iphone/", (req,res)=>{
    res.send("iphone");
})
app.listen(8000, ()=>console.log("Server started on port 8000"));

