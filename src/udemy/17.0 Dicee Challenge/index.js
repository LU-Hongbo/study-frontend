let randomNumber1 = 1 + Math.floor(5 * Math.random());
let randomNumber2 = 1 + Math.floor(5 * Math.random());

let dice1 = document.querySelector(".img1");
let dice2 = document.querySelector(".img2");

dice1.setAttribute("src", `./images/dice${randomNumber1}.png`)
dice2.setAttribute("src", `./images/dice${randomNumber2}.png`)

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Play 2 Wins! 🚩"
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}
