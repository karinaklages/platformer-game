let canvas;
let world;
let keyboard;
let sound;
let dialog;
let intervalIds = [];

const fullscreenIcon = document.getElementById("fullscreenIcon");
const miniscreenIcon = document.getElementById("miniscreenIcon");
const fullscreenElement = document.getElementById("fullscreen");

/**
 * Initializes the application by setting up canvas, dialog, sound, and sound buttons.
 */
function initApp() {
    setupCanvas();
    setupDialog();
    setupSound();
    setupSoundButtons();
}

/**
 * Initializes the game world, keyboard, and event listeners.
 */
function initGame() {
    initLevel();
    keyboard = new Keyboard();
    world = new World(canvas, keyboard, sound);
    initMobileControls();
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
}

// Initialize app when window loads
window.addEventListener("load", initApp);

/**
 * Sets up the game canvas and adjusts for device pixel ratio.
 */
function setupCanvas() {
    canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 960 * dpr;
    canvas.height = 540 * dpr;
    canvas.style.width = "960px";
    canvas.style.height = "540px";
    ctx.scale(dpr, dpr);
}

/**
 * Sets up the dialog element and its close event handler.
 */
function setupDialog() {
    dialog = document.getElementById("dialog");
    dialog.addEventListener("close", () => {
        document.body.style.overflow = "";
    });
}

/**
 * Initializes the sound manager and registers button sounds.
 */
function setupSound() {
    sound = new Sound();
    sound.applyMuteState();
    registerButtonSounds();
}

/**
 * Sets up event listeners for sound toggle buttons.
 */
function setupSoundButtons() {
    document.getElementById("soundIconOff").addEventListener("click", () => sound.toggleMute());
    document.getElementById("soundIconOn").addEventListener("click", () => sound.toggleMute());
}

/**
 * Initializes mobile control buttons for touch input.
 */
function initMobileControls() {
    bindButton("mobileButtonLeft", "LEFT");
    bindButton("mobileButtonRight", "RIGHT");
    bindButton("mobileButtonUp", "UP");
    bindButton("mobileButtonThrow", "THROW");
}

/**
 * Disables all mobile control buttons by setting pointer events to none.
 */
function disableMobileControls() {
    ["mobileButtonLeft", "mobileButtonRight", "mobileButtonUp", "mobileButtonThrow"].forEach(id => {
        const button = document.getElementById(id);
        if (button) button.style.pointerEvents = 'none';
    });
}

/**
 * Re-enables all mobile control buttons by restoring pointer events.
 */
function enableMobileControls() {
    ["mobileButtonLeft", "mobileButtonRight", "mobileButtonUp", "mobileButtonThrow"].forEach(id => {
        const button = document.getElementById(id);
        if (button) button.style.pointerEvents = 'auto';
    });
}

/**
 * Binds a mobile button to a keyboard key for touch controls.
 * @param {string} buttonId - The ID of the button element.
 * @param {string} key - The keyboard key to bind.
 */
function bindButton(buttonId, key) {
    const button = document.getElementById(buttonId);
    button.addEventListener("pointerdown", (e) => { e.preventDefault(); keyboard[key] = true; });
    button.addEventListener("pointerup", () => { keyboard[key] = false; });
    button.addEventListener("pointerleave", () => { keyboard[key] = false; });
}

/**
 * Handles keydown events and updates keyboard state.
 * @param {KeyboardEvent} event - The keydown event.
 */
function handleKeyDown(event) {
    if (!keyboard) return;
    if (event.key === "ArrowRight" || event.key === "d") keyboard.RIGHT = true;
    if (event.key === "ArrowLeft" || event.key === "a") keyboard.LEFT = true;
    if (event.key === "ArrowUp" || event.key === "w" || event.key === " ") keyboard.UP = true;
    if (event.key === "ArrowDown" || event.key === "s") keyboard.DOWN = true;
    if (event.key === "f") keyboard.THROW = true;
    if (event.key === "g") keyboard.FIGHT = true;
    if (event.key === "Space") keyboard.SPACE = true;
}

/**
 * Handles keyup events and updates keyboard state.
 * @param {KeyboardEvent} event - The keyup event.
 */
function handleKeyUp(event) {
    if (!keyboard) return;
    if (event.key === "ArrowRight" || event.key === "d") keyboard.RIGHT = false;
    if (event.key === "ArrowLeft" || event.key === "a") keyboard.LEFT = false;
    if (event.key === "ArrowUp" || event.key === "w" || event.key === " ") keyboard.UP = false;
    if (event.key === "ArrowDown" || event.key === "s") keyboard.DOWN = false;
    if (event.key === "f") keyboard.THROW = false;
    if (event.key === "g") keyboard.FIGHT = false;
    if (event.key === "Space") keyboard.SPACE = false;
}

/**
 * Displays the game information screen and plays a button sound.
 */
function showGameInformation() {
    const startContent = document.querySelector(".content-start");
    const infoContent = document.querySelector(".content-game-information");
    startContent.classList.add("d-none");
    infoContent.classList.remove("d-none");
    sound.play('button');
}

// Show game information when info button is clicked
document.getElementById("startInformationButton").addEventListener("click", showGameInformation);

/**
 * Starts the game, hides info/start screens, shows canvas, and plays background music.
 */
function startGame() {
    const infoContent = document.querySelector(".content-game-information");
    const startScreen = document.getElementById("startScreen");
    const canvas = document.getElementById("canvas");
    infoContent.classList.add("d-none");
    startScreen.classList.add("d-none");
    canvas.classList.remove("d-none");
    if (!sound.isMuted) sound.sounds.gameSound.play();
    initGame();
}

// Start game when start button is clicked
document.getElementById("startGame").addEventListener("click", startGame);

/**
 * Restarts the game and resets UI screens.
 */
function restartGame() {
    const startContent = document.querySelector(".content-start");
    const infoContent = document.querySelector(".content-game-information");
    const startScreen = document.getElementById("startScreen");
    const canvas = document.getElementById("canvas");
    startContent.classList.add("d-none");
    infoContent.classList.add("d-none");
    startScreen.classList.add("d-none");
    canvas.classList.remove("d-none");
    document.getElementById('contentWinner').classList.add('d-none');
    document.getElementById('contentGameOver').classList.add('d-none');
    sound.play('button');
    enableMobileControls();
    initGame();
}

/**
 * Handles the Home button click on the Game Over screen. Plays a button sound and redirects to the home page after a short delay.
 */
document.getElementById("gameOverHomeButton").addEventListener("click", (event) => {
    sound.play('button');
    setTimeout(() => {
        window.location.href = "index.html";
    }, 300);
});

/**
 * Handles the Restart button click on the Game Over screen. Restarts the game by calling restartGame().
 */
document.getElementById("gameOverRestartButton").addEventListener("click", () => {
    restartGame();
});

/**
 * Registers click sounds for specified UI buttons.
 */
function registerButtonSounds() {
    const buttons = [ "homeIcon", "fullscreenIcon", "miniscreenIcon"];
    buttons.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener("click", () => {
                sound.play('button');
            });
        }
    });
}

// Play button sound and redirect to home after click
document.getElementById("homeIcon").addEventListener("click", (event) => {
    event.preventDefault();
    sound.play('button');
    setTimeout(() => {
        window.location.href = "index.html";
    }, 300);
});

/**
 * Toggles the mute state of the sound manager.
 */
function toggleSound() {
    if (!sound) return;
    sound.toggleMute();
}

/**
 * Opens the dialog modal and plays a button sound.
 */
function openDialog() {
    dialog.showModal();
    sound.play('button');
}

/**
 * Closes the dialog modal and plays a button sound.
 */
function closeDialog() {
    dialog.close();
    sound.play('button');
}

/**
 * Initiates fullscreen mode for the fullscreen element.
 */
function fullscreen() {
    const fullscreen = document.getElementById("fullscreen");
    enterFullscreen(fullscreen);
}

/**
 * Requests fullscreen mode for a given element.
 * @param {HTMLElement} element - The element to enter fullscreen.
 */
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

/**
 * Exits fullscreen mode for the document.
 */
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

// Fullscreen icon event listeners
fullscreenIcon.addEventListener("click", () => {
    enterFullscreen(fullscreenElement);
});

// Miniscreen icon event listeners
miniscreenIcon.addEventListener("click", () => {
    exitFullscreen();
});

// Listen for fullscreen changes to update icons
document.addEventListener("fullscreenchange", updateFullscreenIcon);
document.addEventListener("webkitfullscreenchange", updateFullscreenIcon);
document.addEventListener("mozfullscreenchange", updateFullscreenIcon);
document.addEventListener("MSFullscreenChange", updateFullscreenIcon);

/**
 * Updates the fullscreen and miniscreen icons based on fullscreen state.
 */
function updateFullscreenIcon() {
    const isFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
    fullscreenIcon.classList.toggle("d-none", isFullscreen);
    miniscreenIcon.classList.toggle("d-none", !isFullscreen);
}

/**
 * Requests fullscreen mode for a given element and resets canvas styles.
 * @param {HTMLElement} element - The element to enter fullscreen.
 */
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
    const canvas = document.getElementById("canvas");
    canvas.style.width = "";
    canvas.style.height = "";
    canvas.style.maxWidth = "";
    canvas.style.maxHeight = "";
}

/**
 * Draws a debug frame around movable objects for collision visualization.
 */
function drawFrame() {
    if (motive instanceof Character || motive instanceof Spider || motive instanceof Dino || motive instanceof Bear || motive instanceof Endboss) {
        let offsetLeft = motive.otherDirection ? motive.offset.right : motive.offset.left;
        let offsetRight = motive.otherDirection ? motive.offset.left : motive.offset.right;
        this.ctx.beginPath();
        this.ctx.lineWidth = "2";
        this.ctx.strokeStyle = "#9446c1";
        this.ctx.rect(motive.x + offsetLeft, motive.y + motive.offset.top, motive.width - offsetLeft - offsetRight, motive.height - motive.offset.top - motive.offset.bottom);
        this.ctx.stroke();
    }
}