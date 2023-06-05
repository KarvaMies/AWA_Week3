document.getElementById("search").addEventListener("click", function(event) {
  event.preventDefault();
    
  var name = document.getElementById("search-name").value;
  console.log("nimi: " + name);
  console.log(`script.js - name: ${name}`);

  fetch(`/user/${name}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.log(error));
});
  

document.getElementById("submit-data").addEventListener("click", function(event) {
  event.preventDefault();

  var name = document.getElementById("input-name").value;
  var task = document.getElementById("input-task").value;
  console.log("name: " + name);
  console.log("task: " + task);

  fetch("/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: name, task: task })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.text();
    })
    .then(message => {
      console.log(message);
    })
    .catch(error => {
      console.log(error);
    });
});

  

console.log("does this work")