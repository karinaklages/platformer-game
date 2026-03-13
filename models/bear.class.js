/**
 * Represents a Bear enemy in the game.
 */
class Bear extends MovableObject {
    width = 120;
    height = 120;
    state = 'walk';
    currentImage = 0;
    inDeadAnimation = false;
    deleteImages = false;
    DEATH_SOUND = 'bearDeath';

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

    /**
     * Creates a new Bear instance.
     */
    constructor(world) {
        super();
        this.world = world;
        this.energy = 16;
        this.loadImage('img/bear/walk1.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 2000 + Math.random() * 700;
        this.speed = 0.2 + Math.random() * 0.4; 
        this.y = 398;
    }

    /**
     * Starts the animation intervals for the bear.
     */
    animate() {
        if (this.world.gameOver) return;
        this.addInterval(() => {
            this.handleBearStartAnimation();
        }, 1000 / 60);
        this.addInterval(() => {
            this.handleBearStateAnimation();
        }, 170);
        this.addInterval(() => {
            this.handleBearAttackAnimation();
        }, 3000);
    }
}