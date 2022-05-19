var rand1 = Math.floor(Math.random()*6)+1;                                      //generationg random no from 1 - 6
var diceimg = "images/dice" + rand1 + ".png";                                   //concatenating location of all 6 images
document.querySelector(".img1").setAttribute("src",diceimg);                    //modulating img location in src

var rand2 = Math.floor(Math.random()*6)+1;
var diceimg2 = "images/dice" + rand2 + ".png";
document.querySelector(".img2").setAttribute("src",diceimg2);

//Checking Winner

if(rand1>rand2){
  document.getElementsByTagName("h1")[0].textContent="🎆Player 1 Wins";
}

else if(rand1<rand2){
  document.getElementsByTagName("h1")[0].textContent="Player 2 Wins🎇";
}

else{
  document.getElementsByTagName("h1")[0].textContent="🎆Draw🎇";
}
