let canvas;
let world;
let keyboard = new Keyboard();
const dialog = document.getElementById("imprint");

function init() {
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);
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
    if (event.key === "Space") {
        keyboard.SPACE = false;
    }
    // console.log(keyboard);
});

function openDialog() {
    dialog.showModal();
}

function closeDialog() {
    dialog.close();
}