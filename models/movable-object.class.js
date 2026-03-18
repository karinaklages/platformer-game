/**
 * Represents a movable object in the game world.
 */
class MovableObject extends DrawableObject{
    intervals = [];
    timeouts = [];
    speed= 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

    /**
     * Moves the object to the right by its speed.
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * Moves the object to the left by its speed.
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * Plays an animation from the given images array.
     * @param {string[]} images - Array of image paths.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Applies gravity to the object, updating its vertical position and speed.
     */
    applyGravity() {
        this.addInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    /**
     * Checks if the object is above the ground.
     */
    isAboveGround() {
        if(this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 392;
        }
    }
    
    /**
     * Checks if this object is colliding with another motive object.
     * @param {object} motive - The object to check collision against.
     * @returns {boolean} True if colliding, otherwise false.
     */
    isColliding(motive) {
        return (
            this.x + this.width - this.offset.right > motive.x + motive.offset.left &&
            this.y + this.height - this.offset.bottom > motive.y + motive.offset.top &&
            this.x + this.offset.left < motive.x + motive.width - motive.offset.right &&
            this.y + this.offset.top < motive.y + motive.height - motive.offset.bottom
        );
    }

    /**
     * Checks if the object is currently hurt (recently hit).
     * @returns {boolean} True if hurt, otherwise false.
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }

    /**
     * Checks if the object is dead (energy is zero).
     * @returns {boolean} True if dead, otherwise false.
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * Reduces the object's energy when hit and plays sound if dead.
     */
    hit() {
        this.energy -= 5;
        if(this.energy < 0) {
            this.energy = 0;
            sound.play('collision');
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Makes the object jump by setting vertical speed and playing sound.
     */
    jump() {
        this.speedY = 20;
        sound.play('jump');
    }

    /**
     * Starts the attack state for a given duration.
     */
    startAttack(duration = 800) {
        if (this.state === 'attack') return;
        this.state = 'attack';
        this.addTimeout(() => {
            this.state = 'walk';
        }, duration);
    }

    /**
     * Handles the start animation logic for the object.
     */
    handleStartAnimation() {
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
    }

    /**
     * Handles the state animation logic for the object.
     */
    handleStateAnimation() {
        if (this.state === 'dead' && !this.deleteImages) {
            this.enemyDeadAnimation();
        }
        else if (this.state === 'attack') {
            this.playAnimation(this.IMAGES_ATTACK);
        }
        else if (this.state === 'walk') {
            this.playAnimation(this.IMAGES_WALK);
        }
    }

    /**
     * Handles the start animation logic for bear objects.
     */
    handleBearStartAnimation() {
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
    }

    /**
     * Handles the state animation logic for bear objects.
     */
    handleBearStateAnimation() {
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
    }

    /**
     * Handles the attack animation logic for bear objects.
     */
    handleBearAttackAnimation() {
        if (this.state === 'attack') return;
        let random = Math.random();
        if (random < 0.3) {
            this.state = 'idle';
        } else {
            this.state = 'walk';
        }
    }

    /**
     * Handles the start animation logic for endboss objects.
     */
    handleEndbossStartAnimation() {
        if (this.isDead()) {
            this.state = 'dead';
            return;
        }
        if (this.world.character.isDead()) {
            this.stopAllTimers();
            return;
        }
        if (this.state === 'walk') {
            if (this.isCollidingWithCharacter()) return;
            if (this.world.character.x < this.x) {
                this.moveLeft();
                this.otherDirection = false;
            } else {
                this.moveRight();
                this.otherDirection = true;
            }
        }
    }

    /**
     * Handles the state animation logic for endboss objects.
     */
    handleEndbossStateAnimation() {
        if (this.state === 'dead' && !this.deleteImages) {
            this.endbossDeadAnimation();
        }
        else if (this.state === 'magic') {
            this.playAnimation(this.IMAGES_MAGIC_LIGHTNING);
            if (this.world.character && this.world.character.x > 2750 && !this.magicTimerStarted) {
                this.magicTimerStarted = true;
                this.addTimeout(() => {
                    this.state = 'walk';
                }, 500);
            }
        } else if (this.state === 'walk') {
            this.playAnimation(this.IMAGES_WALK);
        } else if (this.state === 'attack') {
            this.playAnimation(this.IMAGES_ATTACK);
        }
    }

    /**
     * Plays the dead animation for enemy objects.
     */
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
            if (this.DEATH_SOUND) {
                sound.play(this.DEATH_SOUND);
            }
        } else {
            this.deleteImages = true;
        }
    }

    /**
     * Adds an interval timer and stores its ID.
     * @param {function} fn - Function to execute.
     * @param {number} time - Interval time in ms.
     * @returns {number} Interval ID.
     */
    addInterval(fn, time) {
        const id = setInterval(fn, time);
        this.intervals.push(id);
        return id;
    }

    /**
     * Adds a timeout timer and stores its ID.
     * @param {function} fn - Function to execute.
     * @param {number} time - Timeout time in ms.
     * @returns {number} Timeout ID.
     */
    addTimeout(fn, time) {
        const id = setTimeout(fn, time);
        this.timeouts.push(id);
        return id;
    }

    /**
     * Stops all interval and timeout timers for this object.
     */
    stopAllTimers() {
        this.intervals.forEach(id => clearInterval(id));
        this.timeouts.forEach(id => clearTimeout(id));

        this.intervals = [];
        this.timeouts = [];
    }
}