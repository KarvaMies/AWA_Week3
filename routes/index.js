var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index');
});

let users = []
let found = 0

router.post("/todo", (req, res) => {
  let name = req.body.name
  let todo = req.body.task

  let foundUser = users.find(user => user.name === name);
  if (foundUser) {
    foundUser.todos.push(todo);
    res.send("Todo added");
  } else {
    let newUser = { name: name, todos: [todo] };
    users.push(newUser);
    res.send("User added");
  }
});

module.exports = router;
