const HEART_IMAGES = [
    'img/ui/heart-0.png',
    'img/ui/heart-20.png',
    'img/ui/heart-40.png',
    'img/ui/heart-60.png',
    'img/ui/heart-80.png',
    'img/ui/heart-100.png'
];

const CRYSTAL_IMAGES = [
    'img/ui/crystal-0.png',
    'img/ui/crystal-20.png',
    'img/ui/crystal-40.png',
    'img/ui/crystal-60.png',
    'img/ui/crystal-80.png',
    'img/ui/crystal-100.png'
];

const COIN_IMAGES = [
    'img/ui/coin-0.png',
    'img/ui/coin-20.png',
    'img/ui/coin-40.png',
    'img/ui/coin-60.png',
    'img/ui/coin-80.png',
    'img/ui/coin-100.png'
];

/**
 * StatusBar displays a visual indicator (hearts, coins, crystals) for a given percentage value.
 * Extends DrawableObject for rendering on the canvas.
 */
class StatusBar extends DrawableObject { 
    percentage = 100;

    /**
     * Creates a new StatusBar instance.
     * @param {string[]} images - Array of image paths representing the different states of the bar.
     * @param {number} x - The horizontal position of the status bar on the canvas.
     * @param {number} y - The vertical position of the status bar on the canvas.
     * @param {number} width - The width of the status bar in pixels.
     * @param {number} height - The height of the status bar in pixels.
     * @param {number} [initialPercentage=0] - The initial fill percentage of the bar (0–100). Defaults to 0.
     */
    constructor(images, x, y, width, height, initialPercentage = 0) {
        super();
        this.images = images;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.loadImages(this.images);
        this.setPercentage(initialPercentage);
    }

    /**
     * Sets the percentage value and updates the displayed image.
     * @param {number} percentage - The new percentage value (0–100) to display on the status bar.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        if (!this.images || this.images.length === 0) return;
        const path = this.images[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
    
    /**
     * Resolves the image index based on the current percentage.
     */
    resolveImageIndex() {
        if (this.percentage >= 100) return 5;
        if (this.percentage >= 80) return 4;
        if (this.percentage >= 60) return 3;
        if (this.percentage >= 40) return 2;
        if (this.percentage >= 20) return 1;
        return 0;
    }
}