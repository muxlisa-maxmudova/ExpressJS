//Application of regEx in frequent and structured queries (paths):
import express from 'express';
const app = express();
app.get(/^\/iphone$/i, (req, res) => {
    res.send("iphone");
});
app.listen(8000, ()=>console.log("Server started on port 8000"));
/*
hello my name is Mukhlisa
*/

