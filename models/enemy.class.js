class Enemy extends MovableObject {
    IMAGES_WALK = [
        'img/spider/walk1.png',
        'img/spider/walk2.png',
        'img/spider/walk3.png',
        'img/spider/walk4.png',
        'img/spider/walk5.png',
        'img/spider/walk6.png',
    ];

    constructor() {
        super();
        this.loadImage('img/spider/walk1.png');
        this.loadImages(this.IMAGES_WALK);
        this.x = 400 + Math.random() * 700;
        this.speed = 0.15 + Math.random() * 0.4; 
        this.y = 420;
        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALK.length;
            let path = this.IMAGES_WALK[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 170);
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