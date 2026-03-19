/**
 * Represents the Endboss enemy in the game.
 */
class Endboss extends MovableObject {
    width = 200;
    height = 200;
    state = 'magic';
    currentImage = 0;
    inDeadAnimation = false;
    deleteImages = false;
    magicTimerStarted = false;
    canAttack = true;
    DEATH_SOUND = 'endbossDeath';

    offset = {
        top: 60,
        left: 40,
        right: 40,
        bottom: 30
    };

    IMAGES_MAGIC_LIGHTNING = [
        'img/boss/magic_lightning1.png',
        'img/boss/magic_lightning2.png',
        'img/boss/magic_lightning3.png',
        'img/boss/magic_lightning4.png',
        'img/boss/magic_lightning5.png'
    ];
    IMAGES_WALK = [
        'img/boss/walk1.png',
        'img/boss/walk2.png',
        'img/boss/walk3.png',
        'img/boss/walk4.png',
        'img/boss/walk5.png',
        'img/boss/walk6.png'
    ];
    IMAGES_ATTACK = [
        'img/boss/attack1.png',
        'img/boss/attack2.png',
        'img/boss/attack3.png',
        'img/boss/attack4.png',
        'img/boss/attack5.png',
        'img/boss/attack6.png',
        'img/boss/attack7.png'
    ];
    IMAGES_DEAD = [
        'img/boss/death1.png',
        'img/boss/death2.png',
        'img/boss/death3.png',
        'img/boss/death4.png',
        'img/boss/death5.png',
        'img/boss/death6.png'
    ];

    /**
     * Creates a new Endboss instance.
     */
    constructor(world) {
        super();
        this.world = world;
        this.energy = 40;
        this.loadImage('img/boss/magic_lightning1.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_MAGIC_LIGHTNING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 3200;
        this.speed = 0.2 + Math.random() * 0.4; 
        this.y = 342;
        this.canAttack = true;
    }

    /**
     * Starts the animation intervals for the endboss.
     */
    animate() {
        if (this.world.gameOver) return;
        this.addInterval(() => {
            this.handleEndbossStartAnimation();
        }, 1000 / 400);
        this.addInterval(() => {
            this.handleEndbossStateAnimation();
        }, 170);
        this.addInterval(() => {
            this.endbossAttackAnimation();
        }, 100);
        this.addInterval(() => {
            this.checkPlayerHit(this.world.character);
        }, 100);
    }

    /**
     * Checks collision with the character.
     */
    isCollidingWithCharacter() {
        const c = this.world.character;
        if (!c) return false;
        return (
            this.x + this.width - this.offset.right > c.x + c.offset.left &&
            this.x + this.offset.left < c.x + c.width - c.offset.right &&
            this.y + this.height - this.offset.bottom > c.y + c.offset.top &&
            this.y + this.offset.top < c.y + c.height - c.offset.bottom
        );
    }

    /**
     * Checks if the player hits the endboss.
     */
    checkPlayerHit(player) {
        if (player.world.keyboard.FIGHT && this.isCollidingWithCharacter()) {
            this.fightEndboss();
        }
    }

    /**
     * Handles the endboss attack animation.
     */
    endbossAttackAnimation() {
        if (!this.isDead() && this.isCollidingWithCharacter()) {
            if (!this.world.character.isHurt()) {
                this.world.character.hit();
                this.world.statusBarHeart.setPercentage(this.world.character.energy);
            }
            if (this.world.character.isDead()) {
                this.world.triggerGameOver();
            }   
            this.startAttack();
            sound.play('fight');
        }
    }

    /**
     * Handles the endboss dead animation.
     */
    endbossDeadAnimation() {
        if (!this.inDeadAnimation) {
            this.currentImage = 0;
            this.inDeadAnimation = true;
            this.state = 'dead';
            sound.play('endbossDeath');
        }
        if (this.currentImage < this.IMAGES_DEAD.length) {
            let path = this.IMAGES_DEAD[this.currentImage];
            this.img = this.imageCache[path];
            this.currentImage++;
        } else {
            this.deleteImages = true;
            this.showWinnerScreen();
        }
    }

    /**
     * Handles the fight logic for the endboss.
     */
    fightEndboss() {
        const damage = 2;
        this.energy -= damage;
        const percentage = (this.energy / 40) * 100;
        this.world.statusBarEndboss.setPercentage(percentage);
        if (this.energy <= 0) {
            this.energy = 0;
            this.state = 'dead';
            this.endbossDeadAnimation();
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Displays the winner screen and sets up button event listeners.
     */
    showWinnerScreen() {
        document.getElementById('contentWinner').classList.remove('d-none');
        disableMobileControls();
        document.getElementById('winnerHomeButton').addEventListener('click', () => {
            window.location.href = './index.html';
        });
        document.getElementById('winnerRestartButton').addEventListener('click', () => {
            restartGame();
            document.getElementById('contentWinner').classList.add('d-none');
        });
    }
}