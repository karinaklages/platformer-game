class MovableObject {
    x = 10;
    y = 400;
    img;
    width = 120;
    height = 120;
    imageCache = {};
    currentImage = 0;
    speed= 0.15;
    otherDirection = false;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        this.x += 5;
    }
        
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    idle() {

    }

    hurt() {

    }

    death() {

    }
}