class Bear extends MovableObject {
    width = 120;
    height = 120;

    offset = {
        top: 50,
        left: 30,
        right: 10,
        bottom: 10
    };

    IMAGES_WALK = [
        'img/bear/walk1.png',
        'img/bear/walk2.png',
        'img/bear/walk3.png',
        'img/bear/walk4.png',
        'img/bear/walk5.png'
    ];
    IMAGES_ATTACK = [
        'img/bear/attack1.png',
        'img/bear/attack2.png',
        'img/bear/attack3.png',
        'img/bear/attack4.png',
        'img/bear/attack5.png'
    ];

    constructor() {
        super();
        this.loadImage('img/bear/walk1.png');
        this.loadImages(this.IMAGES_WALK);
        // this.loadImages(this.IMAGES_ATTACK);
        this.x = 1900 + Math.random() * 2100;
        this.speed = 0.2 + Math.random() * 0.4; 
        this.y = 398;
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