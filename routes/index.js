var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

let users = []
let found = 0

router.post("/todo", (req, res) => {
  found = 0
  let name = req.body.name
  let todo = req.body.task
  users.forEach(user => {
    if(user.name == name) {
      found = 1
      user.todos.push(todo)
      res.send("Todo added")
      return
    }
  });
  if(!found) {
    let user = {name: name, todos: [todo]}
    users.push(user)
  }
  console.log(users)

  res.send("User added")
})

module.exports = router;
