const drumList = document.querySelectorAll(".drum");

for (let i = 0; i < drumList.length; i++) {
    drumList[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
    });
}

document.addEventListener("keypress", function (event) {
    console.log(event.key);
    makeSound(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            new Audio("./sounds/tom-1.mp3").play();
            break

        case "a":
            new Audio("./sounds/tom-2.mp3").play();
            break

        case "s":
            new Audio("./sounds/tom-3.mp3").play();
            break

        case "d":
            new Audio("./sounds/tom-4.mp3").play();
            break

        case "j":
            new Audio("./sounds/snare.mp3").play();
            break

        case "k":
            new Audio("./sounds/crash.mp3").play();
            break

        case "l":
            new Audio("./sounds/kick-bass.mp3").play();
            break

        default:
            console.log(key);
    }
}
