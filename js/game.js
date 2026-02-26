let canvas;
let world;
let keyboard;
let sound;
let dialog;
let intervalIds = [];

window.addEventListener("load", () => {
    canvas = document.getElementById("canvas");
    dialog = document.getElementById("dialog");
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 960 * dpr;
    canvas.height = 540 * dpr;
    canvas.style.width = "960px";
    canvas.style.height = "540px";
    ctx.scale(dpr, dpr);
});

window.addEventListener("load", () => {
    dialog = document.getElementById("dialog");
    dialog.addEventListener("close", () => {
        document.body.style.overflow = "";
    });
});

function init() {
    initLevel();
    canvas = document.getElementById("canvas");
    keyboard = new Keyboard();
    sound = new Sound();
    world = new World(canvas, keyboard, sound);
}

window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "d") {
        keyboard.RIGHT = true;
    } 
    if (event.key === "ArrowLeft" || event.key === "a") {
        keyboard.LEFT = true;
    } 
    if (event.key === "ArrowUp" || event.key === "w" || event.key === " ") {
        keyboard.UP = true;
    }
    if (event.key === "ArrowDown" || event.key === "s") {
        keyboard.DOWN = true;
    }
    if (event.key === "f") {
        keyboard.THROW = true;
    }
    if (event.key === "Space") {
        keyboard.SPACE = true;
    }
    // console.log(keyboard);
});

window.addEventListener("keyup", (event) => {
    if (event.key === "ArrowRight" || event.key === "d") {
        keyboard.RIGHT = false;
    } 
    if (event.key === "ArrowLeft" || event.key === "a") {
        keyboard.LEFT = false;
    } 
    if (event.key === "ArrowUp" || event.key === "w" || event.key === " ") {
        keyboard.UP = false;
    }
    if (event.key === "ArrowDown" || event.key === "s") {
        keyboard.DOWN = false;
    }
    if (event.key === "f") {
        keyboard.THROW = false;
    }
    if (event.key === "Space") {
        keyboard.SPACE = false;
    }
    // console.log(keyboard);
});

function showGameInformation() {
    const startContent = document.querySelector(".content-start");
    const infoContent = document.querySelector(".content-game-information");
    startContent.classList.add("d-none");
    infoContent.classList.remove("d-none");
    sound.play('button');
}

document.getElementById("startInformationButton").addEventListener("click", showGameInformation);

function startGame() {
    const infoContent = document.querySelector(".content-game-information");
    const startScreen = document.getElementById("startScreen");
    const canvas = document.getElementById("canvas");
    infoContent.classList.add("d-none");
    startScreen.classList.add("d-none");
    canvas.classList.remove("d-none");
    sound.play('gameSound');
    init();
}

document.getElementById("startGame").addEventListener("click", startGame);

function restartGame() {
    const startContent = document.querySelector(".content-start");
    const infoContent = document.querySelector(".content-game-information");
    const startScreen = document.getElementById("startScreen");
    const canvas = document.getElementById("canvas");
    startContent.classList.add("d-none");
    infoContent.classList.add("d-none");
    startScreen.classList.add("d-none");
    canvas.classList.remove("d-none");
    sound.play('button');
    init();
}

// function setStoppableInterval(func, time) {
//     let id = setInterval(func, time);
//     intervalIds.push(id);
// }

// function stopGame() {
//     intervalIds.forEach(clearInterval);
//     intervalIds = [];
// }

function openDialog() {
    dialog.showModal();
    sound.play('button');
}

function closeDialog() {
    dialog.close();
    sound.play('button');
}