class BackgroundObject extends MovableObject {
    constructor(path) {
        super();
        this.loadImage(path, x);
        this.x = x;
        this.y = 0;
        this.height = 540;
        this.width = 960;
    }
}