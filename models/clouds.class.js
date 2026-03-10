/**
 * Represents moving clouds in the game background.
 * Inherits from MovableObject and animates clouds moving to the left.
 */
class Clouds extends MovableObject {
    y = -55;
    width = 960;
    height = 540;

    /**
     * Creates a new Clouds object and starts its animation.
     */
    constructor() {
        super();
        this.loadImage('img/backgrounds/clouds4.png');
        this.x = Math.random() * 1000;
        this.animate(); 
    }

    /**
     * Animates the clouds by moving them to the left at a constant speed.
     */
    animate() {
        this.addInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}