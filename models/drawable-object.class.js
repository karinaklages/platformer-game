/**
 * Base class for all drawable objects in the game.
 * Provides methods for loading and drawing images.
 */
class DrawableObject {
    x = 10;
    y = 400;
    width = 120;
    height = 120;
    img;
    imageCache = {};
    currentImage = 0;

    /**
     * Loads a single image from the given path.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Loads multiple images and stores them in the image cache.
     */
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * Draws the object on the given canvas context.
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}