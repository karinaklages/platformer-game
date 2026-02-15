class Bear extends MovableObject {
    width = 120;
    height = 120;

    IMAGES_WALK = [
        'img/bear/walk1.png',
        'img/bear/walk2.png',
        'img/bear/walk3.png',
        'img/bear/walk4.png',
        'img/bear/walk5.png'
    ];

    constructor() {
        super();
        this.loadImage('img/bear/walk1.png');
        this.loadImages(this.IMAGES_WALK);
        this.x = 1900 + Math.random() * 2300;
        this.speed = 0.15 + Math.random() * 0.4; 
        this.y = 398;
        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALK);
        }, 170);
    }
}