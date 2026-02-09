class MovableObject {
    x = 10;
    y = 400;
    img;
    width = 120;
    height = 120;
    imageCache = {};
    currentImage = 0;

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

    walkRight() {
        this.x += 5;
    }

    walkLeft() {
        this.x -= 5;
    }

    idle() {

    }

    hurt() {

    }

    death() {

    }
}