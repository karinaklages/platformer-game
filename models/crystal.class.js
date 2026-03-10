/**
 * Represents a crystal collectible in the game.
 * Inherits from DrawableObject and is used for crystal objects that the player can collect.
 */
class Crystal extends DrawableObject {
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
     * Creates a new Crystal object.
     */
    constructor(x, y) {
        super();
        this.loadImage('img/crystal/crystal1.png');
        this.x = x;
        this.y = y;
        this.width = 25;
        this.height = 25;
    }
}