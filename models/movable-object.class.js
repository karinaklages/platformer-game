class MovableObject {
    x = 10;
    y = 400;
    img;
    height = 120;
    width = 120;

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