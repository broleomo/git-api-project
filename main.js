
const container = document.querySelector(".container");
let header = document.querySelector(".heading");


function reqListener () {
let data = JSON.parse(this.responseText);
let basics = document.querySelector(".basics");
let story = document.querySelector("story");
  // console.log(data);
  let heading = document.querySelector(".heading");
  let name = data.name;
  heading.append(name);
  let basicsh2 = document.createElement("h2");
  basics.appendChild(basicsh2);

  // heading.textContent = name
  // container.appendChild(h1);

}


// console.log(req);

// build template with h1, h2,

let req = new XMLHttpRequest();
req.open("GET","https://api.github.com/users/broleomo");
req.addEventListener("load",reqListener);
req.send();
