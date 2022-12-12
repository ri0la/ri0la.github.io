let video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}
/* https://youtu.be/aEj0Wu33hJM */
const txt1 = document.getElementById('chatterbox');
const submitbtn = document.getElementById('submitbtn');
const out1 = document.getElementById('output1');

  function orbit() {
        out1.innerHTML = txt1.value;
  }
  submitbtn.addEventListener('click',orbit);
/*
let current = new Date();
let dt = new Date();
dt.toLocaleTimeString();
current.toLocaleTimeString();

let current = new Date();
console.log(current)
current.toLocaleString();
*/