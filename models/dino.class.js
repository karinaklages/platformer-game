class Dino extends MovableObject {
    width = 100;
    height = 100;
    state = 'walk';
    energy = 5;
    currentImage = 0;

    offset = {
        top: 25,
        left: 20,
        right: 15,
        bottom: 30
    };

    IMAGES_WALK = [
        'img/dino/walk1.png',
        'img/dino/walk2.png',
        'img/dino/walk3.png',
        'img/dino/walk4.png'
    ];
    IMAGES_ATTACK = [
        'img/dino/attack1.png',
        'img/dino/attack2.png',
        'img/dino/attack3.png',
        'img/dino/attack4.png',
        'img/dino/attack5.png'
    ];
    IMAGES_DEAD = [
        'img/dino/death1.png',
        'img/dino/death2.png',
        'img/dino/death3.png',
        'img/dino/death4.png',
        'img/dino/death5.png',
        'img/dino/death6.png'
    ];

    constructor() {
        super();
        this.loadImage('img/dino/walk1.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 1200 + Math.random() * 800;
        this.speed = 0.15 + Math.random() * 0.4; 
        this.y = 434;
    }

    animate() {
        if (this.world.gameOver) return;
        this.addInterval(() => {
            if (this.state === 'walk') {
                this.moveLeft();
            }
            if (this.world.character && this.isColliding(this.world.character)) {
                this.startAttack();
            }
        }, 1000 / 60);
        this.addInterval(() => {
            if (this.state === 'attack') {
                this.playAnimation(this.IMAGES_ATTACK);
            }
            else if (this.state === 'walk') {
                this.playAnimation(this.IMAGES_WALK);
            }
        }, 170);
    }
}