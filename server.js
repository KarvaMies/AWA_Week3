let hello = {msg: "Hello world"}

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>My todos</h1>");
});

/*
app.get("/hello", (req, res) => {
    res.json(hello)
})

app.get("/echo/:id", (req, res) => {
    let obj = {id: req.params.id}
    res.send(obj);
});

let list = [1, 2, 3]

app.get("/sum", (req, res) => {
    res.send(list)
})

app.post("/sum", (req, res) => {
    let sum = 0
    console.log(req.body)
    req.body.forEach(number => {
        sum =+ number
    });

    console.log(sum)
    res.send(sum)
})
*/

app.listen(port, () => console.log("Server is listening port " + port + "!"));