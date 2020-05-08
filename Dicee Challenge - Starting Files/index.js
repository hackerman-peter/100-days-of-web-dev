var randomNumber1 = Math.random();
randomNumber1 = Math.ceil(randomNumber1 * 6);
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1.toString() + ".png");


var randomNumber2 = Math.random();
randomNumber2 = Math.ceil(randomNumber2 * 6);
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2.toString() + ".png");

if (randomNumber1 > randomNumber2) {
     document.querySelector("h1").innerHTML = "Alice wins! &#128169";
} else if (randomNumber1 < randomNumber2) {
     document.querySelector("h1").innerHTML = "Peter wins! &#129395";
} else {
     document.querySelector("h1").innerHTML = "Draw!";
}
