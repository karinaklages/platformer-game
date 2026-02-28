class Spider extends MovableObject {
    width = 100;
    height = 100;
    state = 'walk';

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
        this.loadImages(this.IMAGES_ATTACK);
        this.x = 400 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.4; 
        this.y = 436;
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.state === 'walk') {
                this.moveLeft();
            }
            if (this.world.character && this.isColliding(this.world.character)) {
                this.startAttack();
            }
        }, 1000 / 60);
        setInterval(() => {
            if (this.state === 'attack') {
                this.playAnimation(this.IMAGES_ATTACK);
            }
            else if (this.state === 'walk') {
                this.playAnimation(this.IMAGES_WALK);
            }
        }, 170);
    }

    startAttack() {
        if (this.state === 'attack') return;
        this.state = 'attack';
        setTimeout(() => {
            this.state = 'walk';
        }, 800);
    }
}