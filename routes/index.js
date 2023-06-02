var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index');
});

let users = [];

router.post("/todo", (req, res) => {
  let name = req.body.name;
  let todo = req.body.task;

  console.log(`name: ${name}\t todo: ${todo}`);

  let foundUser = users.find(user => user.name === name);
  if (foundUser) {
    foundUser.todos.push(todo);
    res.render('index', {message: "Todo added"});
  } else {
    let newUser = { name: name, todos: [todo] };
    users.push(newUser);
    res.render('index', {message: "User added"});
  }
});

router.get("/user/:id", (req, res) => {
  let name = req.params.id;
  console.log(`index.js - name: ${name}`);
  let foundUser = users.find(user => user.name === name);
  
  if (foundUser) {
    console.log("foundUser is true");
    if (req.xhr || req.headers.accept.includes('json')) {
      res.json(foundUser);
    } else {
      res.render('index', {foundUser: foundUser });
    }
  } else {
    console.log("foundUser is false");
    res.render('index', { message: "User not found" });
  }
});

module.exports = router;
