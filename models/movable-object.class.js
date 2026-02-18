class MovableObject {
    x = 10;
    y = 400;
    img;
    width = 120;
    height = 120;
    imageCache = {};
    currentImage = 0;
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

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

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
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;  
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 392;
    }

    jump() {
        this.speedY = 20;
    }

    // isColliding(motive) {
    //     return this.x + this.width > motive.x &&
    //     this.y + this.height > motive.y &&
    //     this.x < motive.x &&
    //     this.y < motive.y + motive.height;
    // }

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
}