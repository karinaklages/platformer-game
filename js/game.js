let canvas;
let ctx;
let characterKnight = new Image();


function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    characterKnight.src = "../img/knight/walk1.png";

    setTimeout(function() {
        ctx.drawImage(characterKnight, 50, 50, 100, 100);
    }, 500);
}