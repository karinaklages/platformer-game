/**
 * Represents a coin collectible in the game.
 * Inherits from DrawableObject and is used for coin objects that the player can collect.
 */
class Coin extends DrawableObject {
    /**
     * The offset for collision detection.
     */
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

    /**
     * Creates a new Coin object.
     */
    constructor(x, y) {
        super();
        this.loadImage('img/coin/coin1.png');
        this.x = x;
        this.y = y;
        this.width = 25;
        this.height = 25;
    }
}