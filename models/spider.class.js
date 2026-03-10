class Spider extends MovableObject {
    width = 100;
    height = 100;
    state = 'walk';
    currentImage = 0;
    inDeadAnimation = false;
    deleteImages = false;

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
    IMAGES_DEAD = [
        'img/spider/death1.png',
        'img/spider/death2.png',
        'img/spider/death3.png',
        'img/spider/death4.png'
    ];

    constructor(world) {
        super();
        this.world = world;
        this.energy = 1;
        this.loadImage('img/spider/walk1.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 400 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.4; 
        this.y = 436;
        this.animate();
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
        }, 170);
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
            sound.play('spiderDeath');
        } else {
            this.deleteImages = true;
        }
    }
}