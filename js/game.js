let canvas;
let world;
let keyboard;
let sound;
let dialog;
let intervalIds = [];

const fullscreenIcon = document.getElementById("fullscreenIcon");
const miniscreenIcon = document.getElementById("miniscreenIcon");
const fullscreenElement = document.getElementById("fullscreen");

function init() {
    initLevel();
    canvas = document.getElementById("canvas");
    keyboard = new Keyboard();
    world = new World(canvas, keyboard, sound);
}

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
    sound = new Sound();
    registerButtonSounds();
    document.getElementById('soundIconOff').addEventListener('click', () => sound.toggleMute());
    document.getElementById('soundIconOn').addEventListener('click', () => sound.toggleMute());
    dialog.addEventListener("close", () => { document.body.style.overflow = "";});
});

// window.addEventListener("load", () => {
//     dialog = document.getElementById("dialog");
//     dialog.addEventListener("close", () => {
//         document.body.style.overflow = "";
//     });
// });

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
    if (!sound.isMuted) sound.sounds.gameSound.play();
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

function registerButtonSounds() {
    const buttons = [ "homeIcon", "fullscreenIcon", "miniscreenIcon", "soundIconOff", "soundIconOn"];
    buttons.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener("click", () => {
                sound.play('button');
            });
        }
    });
}

document.getElementById("homeIcon").addEventListener("click", (event) => {
    event.preventDefault();
    sound.play('button');
    setTimeout(() => {
        window.location.href = "index.html";
    }, 300);
});

function toggleSound() {
    if (!sound) return;
    sound.toggleMute();
}

function openDialog() {
    dialog.showModal();
    sound.play('button');
}

function closeDialog() {
    dialog.close();
    sound.play('button');
}

function fullscreen() {
    const fullscreen = document.getElementById("fullscreen");
    enterFullscreen(fullscreen);
}

function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

fullscreenIcon.addEventListener("click", () => {
    enterFullscreen(fullscreenElement);
    // fullscreenCanvas(fullscreenElement);
});

miniscreenIcon.addEventListener("click", () => {
    exitFullscreen();
});

document.addEventListener("fullscreenchange", updateFullscreenIcon);
document.addEventListener("webkitfullscreenchange", updateFullscreenIcon);
document.addEventListener("mozfullscreenchange", updateFullscreenIcon);
document.addEventListener("MSFullscreenChange", updateFullscreenIcon);

function updateFullscreenIcon() {
    const isFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
    fullscreenIcon.classList.toggle("d-none", isFullscreen);
    miniscreenIcon.classList.toggle("d-none", !isFullscreen);
}

// function fullscreenCanvas() {
//     const canvas = document.getElementById("canvas");
//     const wrapper = document.getElementById("fullscreen");
//     canvas.classList.remove("d-none");
//     enterFullscreen(wrapper);
// }