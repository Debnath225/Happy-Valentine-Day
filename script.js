// function store() {
//   let user = prompt("Enter Your Name:");
//   if (user != null) {
//     document.querySelectorAll("h1").innerHTML =
//       "Hello " + person + "Will You Be My Valentine?";
//   } else {
//     document.querySelectorAll("h1").innerText = "Please Enter Your Name Mylove";
//   }
// }
let no = document.getElementById("no");
let yes = document.getElementById("yes");
let ask = document.getElementById("ask");
let me = 1;
function store() {
  let person = prompt("Please enter your name :");
  if (person != null) {
    ask.innerHTML = "Hello, " + person + " Will You Be My Valentine?";
  } else {
    ask.innerHTML = "No Chetting...";
  }
  return (no.style.visibility = "visible");
}

function req() {
  no.innerHTML = "Yes";
  ask.innerHTML = "Yes, I Love You Too..";
}
