class Endboss extends MovableObject {
    width = 200;
    height = 200;

    offset = {
        top: 60,
        left: 95,
        right: 40,
        bottom: 30
    };

    IMAGES_WALK = [
        'img/boss/walk1.png',
        'img/boss/walk2.png',
        'img/boss/walk3.png',
        'img/boss/walk4.png',
        'img/boss/walk5.png',
        'img/boss/walk6.png',
    ];

    constructor() {
        super();
        this.loadImage('img/boss/walk1.png');
        this.loadImages(this.IMAGES_WALK);
        this.x = 3700;
        this.speed = 0.2 + Math.random() * 0.4; 
        this.y = 342;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALK);
        }, 170);
    }
}