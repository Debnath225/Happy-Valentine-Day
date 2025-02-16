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
let love = document.getElementById("love");

function Qustion() {
  let person = prompt("What Is Your Name ?,Enter Your Name");
  let store =person;
  if ( store!= null) {
    ask.innerHTML = "Hi Miss "+store+" Will You Be My Valentine ?";
    no.style.visibility = "visible";
    yes.style.visibility = "hidden";
    let elem = document.createElement("button");
    let node = document.createTextNode("Yes ❤");
    elem.appendChild(node);
    love.appendChild(elem);
    // elem.style.height = "3.2rem";
    // elem.style.width = "6.7rem";
    // elem.style.backgroundColor = "green";
    // elem.style.borderRadius = "2px";
    // elem.style.fontSize = "20px";
    elem.classList.add("btnStyle", "YES");
  }
  else {
    ask.innerHTML = "No Cheating....";
    no.style.visibility = "hidden";
    return 0;
  }
}
function lov() {
  ask.innerHTML = "I Love You Too..";
}

function get() {
  no.innerHTML = "Yes";
  no.style.backgroundColor="green";
  no.style.scale = 6;
}
