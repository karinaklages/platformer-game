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

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    applyGravity() {
        this.addInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if(this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 392;
        }
    }
    
    isColliding(motive) {
        return (
            this.x + this.width - this.offset.right > motive.x + motive.offset.left &&
            this.y + this.height - this.offset.bottom > motive.y + motive.offset.top &&
            this.x + this.offset.left < motive.x + motive.width - motive.offset.right &&
            this.y + this.offset.top < motive.y + motive.height - motive.offset.bottom
        );
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }

    hit() {
        this.energy -= 5;
        if(this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    jump() {
        this.speedY = 20;
        sound.play('jump');
    }

    startAttack(duration = 800) {
        if (this.state === 'attack') return;
        this.state = 'attack';
        this.addTimeout(() => {
            this.state = 'walk';
        }, duration);
    }

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

    handleBearAttackAnimation() {
        if (this.state === 'attack') return;
        let random = Math.random();
        if (random < 0.3) {
            this.state = 'idle';
        } else {
            this.state = 'walk';
        }
    }

    handleEndbossStartAnimation(){
        if (this.isDead()) {
            this.state = 'dead';
            return;
        }
        if (this.state === 'walk') {
            if (this.world.character.x < this.x) {
                this.moveLeft();
                this.otherDirection = false;
            } else {
                this.moveRight();
                this.otherDirection = true;
            }
        }
    }

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

    addInterval(fn, time) {
        const id = setInterval(fn, time);
        this.intervals.push(id);
        return id;
    }

    addTimeout(fn, time) {
        const id = setTimeout(fn, time);
        this.timeouts.push(id);
        return id;
    }

    stopAllTimers() {
        this.intervals.forEach(id => clearInterval(id));
        this.timeouts.forEach(id => clearTimeout(id));

        this.intervals = [];
        this.timeouts = [];
    }
}