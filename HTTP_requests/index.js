import express from 'express';

const app = express();

app.route("/register")
    .get((req, res) => {
    res.send('all students');
    })
    .post((req, res) => {
    res.send("update student")
    })
    .put((req, res) => {
    res.send("Create student")
    })
    .delete((req, res) => {
    res.send("delete student")
    })

app.listen(8000, ()=>console.log("Server is running on 8000 port"))