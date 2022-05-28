var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0;
var start = false;

$(document).keydown(function(){

  if(!start){

    $("#level-title").text("LEVEL " + level);

    nextSequence();

    start = true;

  }

});

$(".btn").click(function(){

  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  var aud = new Audio("sounds/" + userChosenColour + ".mp3");
  aud.play();

  $("#" + userChosenColour).addClass("pressed");

  setTimeout(function () {
      $("#" + userChosenColour).removeClass("pressed");
  }, 100);

  checkAnswer(userClickedPattern.length-1);

});

function checkAnswer(currentLevel) {

  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    if(gamePattern.length === userClickedPattern.length){

    setTimeout(function(){

      nextSequence();

    },700);
  }
}
  else{

  var audw = new Audio("sounds/wrong.mp3");
  audw.play();

  $("body").addClass("game-over");

  setTimeout(function () {
      $("body").removeClass("game-over");
  }, 200);

  $("#level-title").html("Wrong Choice...<br><br>Score : "+(level-1)+"<br><br>Press any Key to Restart");
  startOver();
}
}

function nextSequence(){

  userClickedPattern = [];

  level+=1;

  $("#level-title").text("LEVEL " + level);

  var randomNumber = Math.floor(Math.random()*4);

  var randomColour = buttonColours[randomNumber];

  gamePattern.push(randomColour);

  $("#" + randomColour).fadeIn(100).fadeOut(100).fadeIn(100);

  var aud = new Audio("sounds/" + randomColour+ ".mp3");
  aud.play();

}

function startOver(){
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  start = false;
}
