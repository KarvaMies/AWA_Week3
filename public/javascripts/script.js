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
  