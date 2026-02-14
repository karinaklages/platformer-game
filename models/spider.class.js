class Spider extends MovableObject {
    width = 100;
    height = 100;

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
        this.x = 400 + Math.random() * 1000;
        this.speed = 0.15 + Math.random() * 0.4; 
        this.y = 436;
        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALK);
        }, 170);
    }
}