class Bear extends MovableObject {
    width = 120;
    height = 120;
    state = 'walk';
    currentImage = 0;
    inDeadAnimation = false;
    deleteImages = false;

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
    IMAGES_IDLE = [
        'img/bear/idle1.png',
        'img/bear/idle2.png',
        'img/bear/idle3.png'
    ];
    IMAGES_ATTACK = [
        'img/bear/attack1.png',
        'img/bear/attack2.png',
        'img/bear/attack3.png',
        'img/bear/attack4.png',
        'img/bear/attack5.png'
    ];
    IMAGES_DEAD = [
        'img/bear/death1.png',
        'img/bear/death2.png',
        'img/bear/death3.png',
        'img/bear/death4.png'
    ];

    constructor() {
        super();
        this.world = world;
        this.energy = 10;
        this.loadImage('img/bear/walk1.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 2000 + Math.random() * 700;
        this.speed = 0.2 + Math.random() * 0.4; 
        this.y = 398;
    }

    animate() {
        if (this.world.gameOver) return;
        this.addInterval(() => {
            if (this.isDead()) {
                this.state = 'dead';
                return;
            }
            if (this.state === 'walk') {
                this.moveLeft();
            }
            if (this.world.character && this.isColliding(this.world.character)) {
                this.startAttack();
            }
        }, 1000 / 60);
        this.addInterval(() => {
            if (this.state === 'dead' && !this.deleteImages) {
                this.enemyDeadAnimation();
            }
            else if (this.state === 'attack') {
                this.playAnimation(this.IMAGES_ATTACK);
            }
            else if (this.state === 'walk') {
                this.playAnimation(this.IMAGES_WALK);
            }
            else if (this.state === 'idle') {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 170);
        this.addInterval(() => {
            if (this.state === 'attack') return;
            let random = Math.random();
            if (random < 0.3) {
                this.state = 'idle';
            } else {
                this.state = 'walk';
            }
        }, 3000);
    }

    enemyDeadAnimation() {
        if (!this.inDeadAnimation) {
            this.currentImage = 0;
            this.inDeadAnimation = true;
            this.state = 'dead';
        }
        if (this.currentImage < this.IMAGES_DEAD.length) {
            let path = this.IMAGES_DEAD[this.currentImage];
            this.img = this.imageCache[path];
            this.currentImage++;
            sound.play('bearDeath');
        } else {
            this.deleteImages = true;
        }
    }
}