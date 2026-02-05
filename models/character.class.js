class Character extends MovableObject {
    constructor() {
        super();
        this.loadImage('../img/knight/walk1.png');
    }

    jump() {
        this.y -= 10;
    }

    jumpHigh() {
        this.y -= 20;
    }

    walkAttackRight() {
        this.x += 10;
    }

    walkAttackLeft() {
        this.x -= 10;
    }

    runRight() {
        this.x += 10;
    }

    runLeft() {
        this.x -= 10;
    }

    runAttackRight() {
        this.x += 20;
    }

    runAttackLeft() {
        this.x -= 20;
    }
}