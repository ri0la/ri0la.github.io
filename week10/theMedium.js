console.log("the message!")

const theButton = document.querySelector('button')
console.log(theButton)
let theMain = document.querySelector('main')
let theTxt = document.getElementById('theText')

theButton.addEventListener('click', changeColor)

function changeColor(){
  console.log("horray!")
  theTxt.textContent = "you clicked button"
  theMain.style.backgroundColor = "yellow"
  
}

let button = document.createElement("button");
button.innerHTML = "Forward";

// 2. Append somewhere
let body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("You went forward");
});
