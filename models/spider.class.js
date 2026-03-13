/**
 * Represents a Spider enemy in the game.
 */
class Spider extends MovableObject {
    width = 100;
    height = 100;
    state = 'walk';
    currentImage = 0;
    inDeadAnimation = false;
    deleteImages = false;
    DEATH_SOUND = 'spiderDeath';

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

    /**
     * Creates a new Spider instance.
     */
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

    /**
     * Starts the animation intervals for the spider.
     */
    animate() {
        if (this.world.gameOver) return;
        this.addInterval(() => {
            this.handleStartAnimation();
        }, 1000 / 60);
        this.addInterval(() => {
            this.handleStateAnimation();
        }, 170);
    }
}