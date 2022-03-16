//DICE ONE
var randomNumber1, randomNumber2;
randomNumber1 = Math.round(Math.random() * (6 - 1) + 1);
var image1 = "images/dice"+randomNumber1+".png";
var imageDefault1 = document.querySelectorAll("img")[0];
imageDefault1.setAttribute("src", image1);


//DICE TWO
randomNumber2 = Math.round(Math.random()*(6-1)+1);
var image2 = "images/dice" + randomNumber2 + ".png";
var imageDefault2 = document.querySelectorAll("img")[1];
imageDefault2.setAttribute("src", image2);


//CHANGE THE TEXT OF THE H1 DEPENDS OF WHO WINS 
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "🚩 Player 1 WINS"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent = "Player 2 WINS 🚩"
}
else{
    document.querySelector("h1").textContent = "Nobody Wins"
}