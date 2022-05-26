// For Button Clicks
var n = document.querySelectorAll(".drum").length;

for (var i=0; i<n; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var bu = this.innerHTML;
  sound(bu);
});
}

// For Keyboard Press
  document.addEventListener("keydown", function(event) {
    sound(event.key);
    ani(event.key);
  });

//Common Functionality
function sound(key) {
    switch (key) {

      case "w":
      var aud1 = new Audio("sounds/tom-1.mp3");
      aud1.play();
      break;

      case "a":
      var aud2 = new Audio("sounds/tom-2.mp3");
      aud2.play();
      break;

      case "s":
      var aud2 = new Audio("sounds/tom-2.mp3");
      aud2.play();
      break;

      case "a":
      var aud3 = new Audio("sounds/tom-3.mp3");
      aud3.play();
      break;

      case "d":
      var aud4 = new Audio("sounds/tom-4.mp3");
      aud4.play();
      break;

      case "j":
      var aud5 = new Audio("sounds/snare.mp3");
      aud5.play();
      break;

      case "k":
      var aud6 = new Audio("sounds/crash.mp3");
      aud6.play();
      break;

      case "l":
      var aud7 = new Audio("sounds/kick.mp3");
      aud7.play();
      break;


      default:console.log(bu);

    }
  }

// Animation and Stuff

function ani(curr) {
  var but = document.querySelector("."+curr);
  but.classList.add("pressed");

  setTimeout (function(){
    but.classList.remove("pressed");
    },100);
}
