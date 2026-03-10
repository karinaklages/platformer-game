/**
 * Represents a ground tile object in the game world.
 */
class GroundTile {
    /**
     * Creates a new GroundTile instance.
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