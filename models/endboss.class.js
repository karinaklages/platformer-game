class Endboss extends MovableObject {
    width = 200;
    height = 200;
    state = 'magic';

    offset = {
        top: 60,
        left: 95,
        right: 40,
        bottom: 30
    };

    IMAGES_MAGIC_LIGHTNING = [
        'img/boss/magic_lightning1.png',
        'img/boss/magic_lightning2.png',
        'img/boss/magic_lightning3.png',
        'img/boss/magic_lightning4.png',
        'img/boss/magic_lightning5.png'
    ];
    IMAGES_WALK = [
        'img/boss/walk1.png',
        'img/boss/walk2.png',
        'img/boss/walk3.png',
        'img/boss/walk4.png',
        'img/boss/walk5.png',
        'img/boss/walk6.png'
    ];

    constructor() {
        super();
        this.loadImage('img/boss/magic_lightning1.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_MAGIC_LIGHTNING);
        this.x = 3200;
        this.speed = 0.2 + Math.random() * 0.4; 
        this.y = 342;
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.state === 'walk') {
                this.moveLeft();
            }
        }, 1000 / 60);
        setInterval(() => {
            if (this.state === 'magic') {
                this.playAnimation(this.IMAGES_MAGIC_LIGHTNING);
                if (this.world.character && this.world.character.x > 2750 && !this.magicTimerStarted) {
                    this.magicTimerStarted = true;
                    setTimeout(() => {
                        this.state = 'walk';
                    }, 1500);
                }
            } else if (this.state === 'walk') {
                this.playAnimation(this.IMAGES_WALK);
            }
        }, 170);
    }
}