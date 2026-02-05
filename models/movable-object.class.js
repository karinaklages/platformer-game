class MovableObject {
    x = 120;
    y = 400;
    img;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
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