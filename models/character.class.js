/**
 * Represents the main character in the game.
 */
class Character extends MovableObject {
    world;
    currentImage = 0;
    speed = 5;
    isFighting = false;
    deadAnimationFinished = false;

    offset = {
        top: 50,
        left: 20,
        right: 50,
        bottom: 20
    };

    IMAGES_IDLE = [
        'img/viking/idle1.png',
        'img/viking/idle2.png',
        'img/viking/idle3.png',
        'img/viking/idle4.png',
        'img/viking/idle5.png',
        'img/viking/idle6.png',
        'img/viking/idle7.png',
        'img/viking/idle8.png',
        'img/viking/idle9.png',
        'img/viking/idle10.png',
        'img/viking/idle11.png',
        'img/viking/idle12.png'
    ];
    IMAGES_WALK = [
        'img/viking/walk1.png',
        'img/viking/walk2.png',
        'img/viking/walk3.png',
        'img/viking/walk4.png',
        'img/viking/walk5.png',
        'img/viking/walk6.png'
    ];
    IMAGES_JUMP = [
        'img/viking/jump1.png',
        'img/viking/jump2.png',
        'img/viking/jump3.png',
        'img/viking/jump4.png',
        'img/viking/jump5.png',
        'img/viking/jump6.png'
    ];
    IMAGES_HURT = [
        'img/viking/hurt1.png',
        'img/viking/hurt2.png',
        'img/viking/hurt3.png',
        'img/viking/hurt4.png'
    ];
    IMAGES_FIGHT = [
        'img/viking/attack1.png',
        'img/viking/attack2.png',
        'img/viking/attack3.png',
        'img/viking/attack4.png',
        'img/viking/attack5.png',
        'img/viking/attack6.png',
        'img/viking/attack7.png',
        'img/viking/attack8.png'
    ];
    IMAGES_DEAD = [
        'img/viking/death1.png',
        'img/viking/death2.png',
        'img/viking/death3.png',
        'img/viking/death4.png',
        'img/viking/death5.png'
    ];

    /**
     * Creates a new Character instance.
     * @param {World} world - The game world instance this character belongs to.
     */
    constructor(world) {
        super();
        this.world = world;
        this.y = 349;
        this.loadImage('img/viking/idle1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_FIGHT);
        this.loadImages(this.IMAGES_DEAD);
        this.applyGravity();
        this.animate();
    }
    
    /**
     * Starts the animation intervals for movement and state updates.
     */
    animate() {
        this.addInterval(() => {
            if (this.world.gameOver) {
                this.stopAllTimers();
                return;
            }
            if (!this.isDead() && !this.world.gameOver) {
                this.handleMovement();
                this.updateCamera();
            }
        }, 1000 / 60);
        this.addInterval(() => {
            this.handleAnimationState();
        }, 80);
    }

    /**
     * Handles character movement based on keyboard input.
     */
    handleMovement() {
        if (this.world.won) return;
        if (this.world.keyboard.RIGHT && this.x < this.world.level.character_end_x) {
            this.moveRight();
            this.otherDirection = false;
        }
        if (this.world.keyboard.LEFT && this.x > 0) {
            this.moveLeft();
            this.otherDirection = true;
        }
        if (this.world.keyboard.UP && !this.isAboveGround()) {
            this.jump();
        }
    }

    /**
     * Updates the camera position and clamps it to the level boundary.
     */
    updateCamera() {
        const logicalWidth = 70;
        this.world.camera_x = Math.round(-this.x + 70);
        if (this.world.camera_x < -(this.world.level.level_end_x - logicalWidth)) {
            this.world.camera_x = -(this.world.level.level_end_x - logicalWidth);
        }
    }

    /**
     * Plays the appropriate animation based on the current character state.
     */
    handleAnimationState() {
        if (this.isDead()) {
            this.playDeadAnimation();
            return;
        } else if (this.isFighting || this.world.keyboard.FIGHT) {
            this.playAnimation(this.IMAGES_FIGHT);
        } else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
        } else if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMP);
        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playAnimation(this.IMAGES_WALK);
        } else if (this.isNearEndboss()) {
            this.playAnimation(this.IMAGES_FIGHT);
        } else {
            this.playAnimation(this.IMAGES_IDLE);
        }
    }

    /**
     * Checks if the character is colliding with the endboss.
     */
    isNearEndboss() {
        const endboss = this.world.level.enemies.find(e => e instanceof Endboss);
        return endboss && !endboss.isDead() && this.isColliding(endboss);
    }

    /**
     * Initiates a fight sequence with the endboss.
     * @param {Endboss} endboss - The endboss instance to fight against.
     */
    startFight(endboss) {
        if (this.isFighting) return;
        this.isFighting = true;
        const intervalId = this.addInterval(() => {
            this.processFightTick(endboss, intervalId);
        }, 800);
    }

    /**
     * Processes a single tick of the fight sequence.
     * Checks fight conditions, applies damage, plays sounds, updates the status bar, and triggers end conditions.
     * @param {Endboss} endboss - The endboss instance being fought.
     * @param {number} intervalId - The interval ID used to stop the fight loop.
     */
    processFightTick(endboss, intervalId) {
        if (!this.isColliding(endboss) || endboss.isDead() || this.isDead()) {
            this.isFighting = false;
            clearInterval(intervalId);
            return;
        }
        this.hit();
        endboss.fightEndboss();
        sound.play('collision');
        this.world.statusBarHeart.setPercentage(this.energy);
        if (this.isDead()) {
            this.world.triggerGameOver();
        }
        if (endboss.isDead()) {
            this.isFighting = false;
        }
    }

    /**
     * Plays the dead animation for the character.
     */
    playDeadAnimation() {
        if (this.currentImage < this.IMAGES_DEAD.length) {
            let path = this.IMAGES_DEAD[this.currentImage];
            this.img = this.imageCache[path];
            this.currentImage++;
        } else {
            this.deadAnimationFinished = true;
            let lastImage = this.IMAGES_DEAD[this.IMAGES_DEAD.length - 1];
            this.img = this.imageCache[lastImage];
        }
    }
}