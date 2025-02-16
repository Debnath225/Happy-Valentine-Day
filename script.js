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
  let person = prompt("What is your name ?");
  if (person != null) {
   ask.innerHTML = "Hello, " + person + " Will You Be My Valentine?";
  } else {
   ask.innerHTML = "No Cheating...";
    return 0;
}
  no.style.visibility = "visible";
  return (yes.disabled = true);
/*  switch(person){
    case `${!=null}`:
      ask.innerHTML = "Hello, " + person + " Will You Be My Valentine?";
      no.style.visibility = "visible";
      break;
    case `${null}`:
      ask.innerHTML = "No Chetting...";
      break;
    case default:
      ask.innerHTML = "Somthing Went Wrong";
      break;
  }
}
*/
}
function req() {
  no.innerHTML = "Yes";
  no.style.scale =7;
  no.style.backgroundColor ="green";
  ask.innerHTML = "Yes, I Love You Too..";
}
