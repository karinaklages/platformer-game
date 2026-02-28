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
    IMAGES_ATTACK = [
        'img/boss/attack1.png',
        'img/boss/attack2.png',
        'img/boss/attack3.png',
        'img/boss/attack4.png',
        'img/boss/attack5.png',
        'img/boss/attack6.png',
        'img/boss/attack7.png'
    ];

    constructor() {
        super();
        this.loadImage('img/boss/magic_lightning1.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_MAGIC_LIGHTNING);
        this.loadImages(this.IMAGES_ATTACK);
        this.x = 3200;
        this.speed = 0.2 + Math.random() * 0.4; 
        this.y = 342;
        this.animate();
        this.canAttack = true;
    }

    animate() {
        setInterval(() => {
            if (this.state === 'walk') {
                this.moveLeft();
            }
        }, 1000 / 400);
        setInterval(() => {
            if (this.state === 'magic') {
                this.playAnimation(this.IMAGES_MAGIC_LIGHTNING);
                if (this.world.character && this.world.character.x > 2750 && !this.magicTimerStarted) {
                    this.magicTimerStarted = true;
                    setTimeout(() => {
                        this.state = 'walk';
                    }, 500);
                }
            } else if (this.state === 'walk') {
                this.playAnimation(this.IMAGES_WALK);
            } else if (this.state === 'attack') {
                this.playAnimation(this.IMAGES_ATTACK);
            }
        }, 170);
        setInterval(() => {
            if (this.isCollidingWithCharacter()) {
                this.startAttack();
            }
        }, 100);
    }

    startAttack() {
        if (!this.canAttack) return;
        this.canAttack = false;
        this.state = 'attack';
        setTimeout(() => {
            this.state = 'walk';
            this.canAttack = true;
        }, 800);
    }

    isCollidingWithCharacter() {
        const c = this.world.character;
        if (!c) return false;
        return (
            this.x + this.width - this.offset.right > c.x + c.offset.left &&
            this.x + this.offset.left < c.x + c.width - c.offset.right &&
            this.y + this.height - this.offset.bottom > c.y + c.offset.top &&
            this.y + this.offset.top < c.y + c.height - c.offset.bottom
        );
    }
}