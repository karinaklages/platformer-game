/**
 * Represents a nature object in the game world, such as trees or rocks.
 */
class NatureObjects {
    /**
     * Creates a new NatureObjects instance.
     * @param {string} path - The file path or URL of the tile image.
     * @param {number} x - The horizontal position of the tile.
     * @param {number} y - The vertical position of the tile.
     * @param {number} width - The width of the tile in pixels.
     * @param {number} height - The height of the tile in pixels.
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