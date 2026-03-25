/**
 * Represents a background object in the game world.
 * Inherits from MovableObject and is used to display background images.
 */
class BackgroundObject extends MovableObject {
    /**
     * Creates a new BackgroundObject.
     * @param {string} path - The file path or URL of the background image.
     * @param {number} x - The horizontal position of the background object.
     */
    constructor(path, x) {
        super();
        this.loadImage(path);
        this.x = x;
        this.y = 0;
        this.height = 540;
        this.width = 960;
    }
}