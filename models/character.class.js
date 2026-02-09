class Character extends MovableObject {
    IMAGES_WALK = [
        'img/knight/walk1.png',
        'img/knight/walk2.png',
        'img/knight/walk3.png',
        'img/knight/walk4.png',
        'img/knight/walk5.png',
        'img/knight/walk6.png',
    ];

    constructor() {
        super();
        this.loadImage('img/knight/walk1.png');
        this.loadImages(this.IMAGES_WALK);
        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALK.length;
            let path = this.IMAGES_WALK[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 150);
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