const ENDBOSS_IMAGES = [
    'img/ui/endboss-0.png',
    'img/ui/endboss-10.png',
    'img/ui/endboss-20.png',
    'img/ui/endboss-30.png',
    'img/ui/endboss-40.png',
    'img/ui/endboss-50.png',
    'img/ui/endboss-60.png',
    'img/ui/endboss-70.png',
    'img/ui/endboss-80.png',
    'img/ui/endboss-90.png',
    'img/ui/endboss-100.png'
];

/**
 * StatusBar displays a visual indicator for a given percentage value.
 * Extends StatusBar for rendering on the canvas.
 */
class EndbossStatusBar extends StatusBar {
    /**
     * Sets the status bar for the Endboss.
     */
    constructor() {
        super(ENDBOSS_IMAGES, 0, 0, 100, 20, 100);
    }

    /**
     * Updates the bar position to follow the endboss.
     */
    updatePosition(endboss) {
        this.x = endboss.x + (endboss.width / 2) - (this.width / 2);
        this.y = endboss.y - 20;
    }
        
    /**
     * Resolves the image index based on the current percentage.
     */
    resolveImageIndex() {
        if (this.percentage >= 100) return 10;
        if (this.percentage >= 90) return 9;
        if (this.percentage >= 80) return 8;
        if (this.percentage >= 70) return 7;
        if (this.percentage >= 60) return 6;
        if (this.percentage >= 50) return 5;
        if (this.percentage >= 40) return 4;
        if (this.percentage >= 30) return 3;
        if (this.percentage >= 20) return 2;
        if (this.percentage >= 10) return 1;
        return 0;
    }
}