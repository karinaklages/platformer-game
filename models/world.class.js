class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBarHeart = new StatusBarHeart();
    statusBarCoin = new StatusBarCoin();
    statusBarCrystal = new StatusBarCrystal();
    throwableObjects = [];
    gameOver = false;

    constructor (canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.groundTiles);
        this.addObjectsToMap(this.level.flyingTiles);
        this.addObjectsToMap(this.level.natureObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.crystals);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBarHeart);
        this.addToMap(this.statusBarCoin);
        this.addToMap(this.statusBarCrystal);
        requestAnimationFrame(() => this.draw());

        if (this.gameOver) {
            this.ctx.font = "42px VT323";
            this.ctx.fillStyle = "rgb(62, 57, 53)";
            this.ctx.textAlign = "center";
            this.ctx.fillText("G A M E  O V E R", 960 / 2, 100);
        }
    }

    setWorld() {
        this.character.world = this;
    }
    
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 100);
    }

    checkCollisions() {
        if (this.gameOver) return;
        this.level.enemies.forEach((enemy) => {
            if(this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBarHeart.setPercentage(this.character.energy);
                if (this.character.isDead()) {
                    this.triggerGameOver();
                }
            }
        });
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.level.coins.splice(index, 1);
                this.statusBarCoin.setPercentage(Math.min(this.statusBarCoin.percentage + 20, 100));
            }
        });
        this.level.crystals.forEach((crystal, index) => {
            if (this.character.isColliding(crystal)) {
                this.level.crystals.splice(index, 1);
                this.statusBarCrystal.setPercentage(Math.min(this.statusBarCrystal.percentage + 20, 100));
            }
        });
    }

    checkThrowObjects() {
        if (this.gameOver) return;
        if(this.keyboard.THROW) {
            let direction = this.character.otherDirection ? -1 : 1;
            let crystal = new ThrowableObject(
                this.character.x + (direction === 1 ? 80 : -20),
                this.character.y + 65,
                direction
            );
            this.throwableObjects.push(crystal);
        }
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

    addToMap(motive) {
        if (motive.otherDirection) {
            this.flipImageLeft(motive);
        } else {
            this.flipImageRight(motive);
        }
        if (motive instanceof Character || motive instanceof Spider || motive instanceof Dino || motive instanceof Bear || motive instanceof Endboss) {
            this.ctx.beginPath();
            this.ctx.lineWidth = "2";
            this.ctx.strokeStyle = "#9446c1";
            this.ctx.rect(motive.x + motive.offset.left, motive.y + motive.offset.top, motive.width - motive.offset.left - motive.offset.right, motive.height - motive.offset.top - motive.offset.bottom);
            this.ctx.stroke();
        }
    }

    flipImageLeft(motive) {
        this.ctx.save();
        this.ctx.translate(motive.x + motive.width, motive.y);
        this.ctx.scale(-1, 1);
        this.ctx.drawImage(motive.img, 0, 0, motive.width, motive.height);
        this.ctx.restore();
    }

    flipImageRight(motive) {
        this.ctx.drawImage(motive.img, motive.x, motive.y, motive.width, motive.height);
    }

    triggerGameOver() {
        this.gameOver = true;
        this.character.speed = 0;
        let gameOverSound = new Audio('audio/game-over.mp3');
        gameOverSound.play();
    }
}

