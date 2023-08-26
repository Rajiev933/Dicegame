var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6+1;
randomNumber1 = Math.floor(randomNumber1);
console.log(randomNumber1);

var imgPath1 = "./images/dice" + randomNumber1 +".png";

document.getElementById("img1").src=imgPath1;

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6+1;
randomNumber2 = Math.floor(randomNumber2);
console.log(randomNumber2);

var imgPath2 = "./images/dice" + randomNumber2 +".png";

document.getElementById("img2").src=imgPath2;

if(randomNumber1>randomNumber2){
  document.getElementById("heading").textContent="🚩 Player 1 win";
}
else if(randomNumber1==randomNumber2){
  document.getElementById("heading").textContent="Draw!"
}
else {
  document.getElementById("heading").textContent="🚩 Player 2 win"
}