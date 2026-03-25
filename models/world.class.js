/**
 * Represents the game world, manages game state, rendering, and interactions.
 */
class World {
    character;
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBarHeart;
    statusBarCoin;
    statusBarCrystal;
    throwableObjects = [];
    gameOver = false;
    availableCrystals = 0;

    /**
     * Creates a new World instance.
     * @param {HTMLCanvasElement} canvas - The canvas element to render the game on.
     * @param {Keyboard} keyboard - The keyboard input handler for player controls.
     * @param {SoundManager} sound - The sound manager for playing game audio.
     */
    constructor (canvas, keyboard, sound) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.sound = sound;
        this.canThrow = true;
        this.intervals = [];
        this.character = new Character(this);
        this.statusBarEndboss = new EndbossStatusBar();
        this.statusBarHeart = new StatusBar(HEART_IMAGES, 30, 50, 130, 24, 100);
        this.statusBarCrystal = new StatusBar(CRYSTAL_IMAGES, 30, 20, 130, 24, 0);
        this.statusBarCoin = new StatusBar(COIN_IMAGES, 30, 80, 130, 23, 0);
        this.level = level1;
        this.setWorld();
        this.draw();
        this.run();
    }

    /**
     * Draws the game world and all objects to the canvas.
     */
    draw() {
        if (this.gameOver) {
            if (!this.character.deadAnimationFinished) {
                this.character.playDeadAnimation();
            } else {
                this.stopGame();
                return;
            }
        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(Math.round(this.camera_x), 0);
        this.drawBackgroundAndObjects();
        this.drawCollectiblesAndEndbossBar();
        this.ctx.translate(-Math.round(this.camera_x), 0);
        this.drawStatusBars();
        this.animationFrameId = requestAnimationFrame(() => this.draw());
    }

    /**
     * Draws background layers, environment tiles, the main character, throwable objects, and all enemies in the game world.
     */
    drawBackgroundAndObjects() {
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.tiles);
        this.addObjectsToMap(this.level.natureObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.enemies);
    }

    /**
     * Draws collectible items and endboss bar.
     */
    drawCollectiblesAndEndbossBar() {
        const endboss = this.level.enemies.find(e => e instanceof Endboss);
        if (endboss && !endboss.isDead()) {
            this.statusBarEndboss.updatePosition(endboss);
            this.addToMap(this.statusBarEndboss);
        }
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.crystals);
    }

    /**
     * Draws all fixed UI elements such as health, coin, and crystal status bars.
     */
    drawStatusBars() {
        this.addToMap(this.statusBarHeart);
        this.addToMap(this.statusBarCoin);
        this.addToMap(this.statusBarCrystal);
    }

    /**
     * Sets the world reference for character and enemies.
     */
    setWorld() {
        this.character.world = this;
        this.level.enemies.forEach(enemy => {
            enemy.world = this;
            if (enemy.animate) enemy.animate();
        });
    }

    /**
     * Stops the game loop and all enemy timers.
     */
    stopGame() {
        clearInterval(this.runInterval);
        cancelAnimationFrame(this.animationFrameId);
        this.level.enemies.forEach(enemy => {
            if (enemy.stopAllTimers) {
                enemy.stopAllTimers();
            }
        });
        this.character.stopAllTimers();
        if (this.sound) this.sound.sounds.gameSound.pause();
        document.getElementById('contentGameOver').classList.remove('d-none');
    }

    /**
     * Starts the game loop interval for collision checks and updates.
     */
    run() {
        this.runInterval = setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.level.enemies = this.level.enemies.filter(e => !e.deleteImages);
        }, 100);
    }

    /**
     * Checks all collision types in the game world.
     */
    checkCollisions() {
        if (this.gameOver) return;
        this.characterEnemyCollision();
        this.offsetCollision();
        this.coinsCollision();
        this.crystalsCollision();
    }

    /**
     * Handles collision between character and enemies.
     */
    characterEnemyCollision() {
        this.level.enemies.forEach((enemy) => {
            if(this.character.isColliding(enemy)) {
                    if (enemy instanceof Endboss) {
                    this.character.startFight(enemy);
                } 
                else {
                    this.character.hit();
                    this.statusBarHeart.setPercentage(this.character.energy);
                    if (this.sound) this.sound.play('collision');
                    if (this.character.isDead()) {
                        this.triggerGameOver();
                    }
                }
            }
        });
    }

    /**
     * Handles collision between throwable objects and enemies.
     */
    offsetCollision() {
        this.throwableObjects.forEach((crystal, cIndex) => {
            this.level.enemies.forEach(enemy => {
                const collides = (
                    crystal.x + crystal.width > enemy.x + enemy.offset.left &&
                    crystal.x < enemy.x + enemy.width - enemy.offset.right &&
                    crystal.y + crystal.height > enemy.y + enemy.offset.top &&
                    crystal.y < enemy.y + enemy.height - enemy.offset.bottom
                );
                if (collides) {
                    if (enemy instanceof Endboss) {
                        enemy.fightEndboss();
                    } else {
                        enemy.hit();
                    }
                    this.throwableObjects.splice(cIndex, 1);
                }
            });
        }); 
    }

    /**
     * Handles collision between character and coins.
     */
    coinsCollision() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.level.coins.splice(index, 1);
                this.statusBarCoin.setPercentage(Math.min(this.statusBarCoin.percentage + 20, 100));
                if (this.sound) this.sound.play('collect');
            }
        });
    }

    /**
     * Handles collision between character and crystals.
     */
    crystalsCollision() {
        this.level.crystals.forEach((crystal, index) => {
            if (this.character.isColliding(crystal)) {
                this.level.crystals.splice(index, 1);
                this.availableCrystals += 1;
                this.statusBarCrystal.setPercentage(Math.min(this.availableCrystals * 20, 100));
                if (this.sound) this.sound.play('collect');
            }
        });
    }

    /**
     * Checks if the character can throw objects and handles throwing logic.
     */
    checkThrowObjects() {
        if (this.gameOver) return;
        if (this.keyboard.THROW && this.availableCrystals > 0 && this.canThrow) {
            this.canThrow = false;
            let direction = this.character.otherDirection ? -1 : 1;
            let crystal = new ThrowableObject(this.character.x + (direction === 1 ? 80 : -20), this.character.y + 65, direction);
            this.throwableObjects.push(crystal);
            this.availableCrystals -= 1;
            this.statusBarCrystal.setPercentage(this.availableCrystals * 20);
            if (this.sound) this.sound.play('throw');
            setTimeout(() => {
                this.canThrow = true;
            }, 500);
        }
    }

    /**
     * Adds multiple objects to the map for rendering.
     * @param {object[]} objects - Array of objects to add.
     */
    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

    /**
     * Adds a single object to the map, flipping image if needed.
     * @param {object} motive - The object to add.
     */
    addToMap(motive) {
        if (motive.otherDirection) {
            this.flipImageLeft(motive);
        } else {
            this.flipImageRight(motive);
        }
    }

    /**
     * Flips the motive's image to the left and draws it.
     * @param {object} motive - The object to flip.
     */
    flipImageLeft(motive) {
        this.ctx.save();
        let centerX = Math.round(motive.x + motive.width / 2);
        let centerY = Math.round(motive.y);
        this.ctx.translate(centerX, centerY);
        this.ctx.scale(-1, 1);
        this.ctx.drawImage(motive.img, -motive.width / 2, 0, motive.width, motive.height);
        this.ctx.restore();
    }

    /**
     * Draws the motive's image to the right.
     * @param {object} motive - The object to draw.
     */
    flipImageRight(motive) {
    if (motive.img instanceof HTMLImageElement && motive.img.complete && motive.img.naturalWidth > 0) {
        this.ctx.drawImage(motive.img, Math.round(motive.x), Math.round(motive.y), motive.width, motive.height);
    }
}

    /**
     * Triggers the game over state and plays sound.
     */
    triggerGameOver() {
        this.gameOver = true;
        this.character.speed = 0;
        if (this.sound) this.sound.play('gameOver');
    }
}