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

audioPlayer();
function audioPlayer(){
  let currentSong = 0;
  $("#audioPlayer")[0].src = $("#playlist li a")[0];
  $("audioPlayer")[0].play();
  $("playlist li a").click(function(e){
      e.preventDefault();
      $("#audioPlayer")[0].src = this;
      $("#audioPlayer")[0].play();
      $("#playlist li").removeClass(current-song);
      currentSong = $(this).parent().index();
      $(this).parent.addClass("current-song");
  });
 
/* https://youtu.be/vtZCMTtP-0Y */
 /* $("#audioPlayer")[0].addEventListener("ended",function(){
    currentSong++;
      if(currentSong == $("#playlist li a").length)
        currentSong = 0;
      $("#playlist li").removeClass("current-song");
      $("#playlist li:eq("+currentSong+")").addClass("current-song");
      $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
      $("audioPlayer")[0].play();
  });
} */



/*
i tried to get the date and time show in the output when the submit button was pressed but i couldn't get it to work
https://www.howtocodeschool.com/2020/05/display-current-date-and-time-using-html-javascript.html

let current = new Date();
let dt = new Date();
dt.toLocaleTimeString();
current.toLocaleTimeString();

let current = new Date();
console.log(current)
current.toLocaleString();
*/