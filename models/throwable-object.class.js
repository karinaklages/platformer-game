/**
 * Represents a throwable object in the game, such as a crystal that can be thrown by the player.
 * Inherits from MovableObject and handles its own movement and gravity.
 */
class ThrowableObject extends MovableObject {
    offset = {
        top: 5,
        left: 5,
        right: 5,
        bottom: 5
    };

    /**
     * Creates a new ThrowableObject instance and initiates its throw action.
     */
    constructor(x, y, direction){
        super();
        this.loadImage('img/crystal/crystal1.png');
        this.x = x;
        this.y = y;
        this.width = 24;
        this.height = 24;
        this.direction = direction;
        this.throw();
    }

    /**
     * Initiates the throw action, applying gravity and moving the object in the specified direction.
     */
    throw() {
        this.speedY = 27;
        this.applyGravity();
        this.addInterval(() => {
            this.x += 8 * this.direction; 
        }, 25);
    }
}