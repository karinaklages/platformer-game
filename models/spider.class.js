class Spider extends MovableObject {
    width = 100;
    height = 100;

    offset = {
        top: 30,
        left: 25,
        right: 30,
        bottom: 30
    };

    IMAGES_WALK = [
        'img/spider/walk1.png',
        'img/spider/walk2.png',
        'img/spider/walk3.png',
        'img/spider/walk4.png',
        'img/spider/walk5.png',
        'img/spider/walk6.png',
    ];
    IMAGES_ATTACK = [
        'img/spider/attack1.png',
        'img/spider/attack2.png',
        'img/spider/attack3.png'
    ];

    constructor() {
        super();
        this.loadImage('img/spider/walk1.png');
        this.loadImages(this.IMAGES_WALK);
        // this.loadImages(this.IMAGES_ATTACK);
        this.x = 400 + Math.random() * 1000;
        this.speed = 0.15 + Math.random() * 0.4; 
        this.y = 436;
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