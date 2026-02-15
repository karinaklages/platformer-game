class Dino extends MovableObject {
    width = 100;
    height = 100;

    IMAGES_WALK = [
        'img/dino/walk1.png',
        'img/dino/walk2.png',
        'img/dino/walk3.png',
        'img/dino/walk4.png'
    ];

    constructor() {
        super();
        this.loadImage('img/dino/walk1.png');
        this.loadImages(this.IMAGES_WALK);
        this.x = 1000 + Math.random() * 1700;
        this.speed = 0.15 + Math.random() * 0.4; 
        this.y = 434;
        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALK);
        }, 170);
    }
}