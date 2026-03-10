/**
 * Represents a nature object in the game world, such as trees or rocks.
 */
class NatureObjects {
    /**
     * Creates a new NatureObjects instance.
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