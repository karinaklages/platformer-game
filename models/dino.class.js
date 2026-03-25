/**
 * Represents a Dino enemy in the game.
 */
class Dino extends MovableObject {
    width = 100;
    height = 100;
    state = 'walk';
    currentImage = 0;
    inDeadAnimation = false;
    deleteImages = false;
    DEATH_SOUND = 'dinoDeath';

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

    /**
     * Creates a new Dino instance.
     */
    constructor(world) {
        super();
        this.world = world;
        this.energy = 8;
        this.loadImage('img/dino/walk1.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 1200 + Math.random() * 800;
        this.speed = 0.15 + Math.random() * 0.4; 
        this.y = 384;
    }

    /**
     * Starts the animation intervals for the dino.
     * @param {World} world - The game world instance this dino belongs to.
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