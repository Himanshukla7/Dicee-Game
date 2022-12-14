var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
console.log(randomNumber1);

var image1 = document.getElementsByTagName('img')[0];
image1.setAttribute('src' , "images/dice"+randomNumber1+".png");

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
console.log(randomNumber2);

var image2 = document.getElementsByTagName('img')[1];
image2.setAttribute('src' , "images/dice"+randomNumber2+".png");

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML= "Player 1 Wins! 🚩"
}

else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML= "🚩 Player 2 Wins!"
}

else{
    document.querySelector("h1").innerHTML= "Draw!"
}