class Enemy extends MovableObject {
    constructor() {
        super();
        this.loadImage('../img/spider/walk1.png');
        this.x = 400 + Math.random() * 500;
        this.y = 420;
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