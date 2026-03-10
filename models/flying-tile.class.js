/**
 * Represents a flying tile object in the game world.
 */
class FlyingTile {
    /**
     * Creates a new FlyingTile instance.
     */
    constructor(path, x, y, width, height) {
        this.img = new Image();
        this.img.src = path;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}