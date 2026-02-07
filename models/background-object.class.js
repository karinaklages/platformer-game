class BackgroundObject extends MovableObject {
    constructor(path, x) {
        super();
        this.loadImage(path);
        this.x = x;
        this.y = 0;
        this.height = 540;
        this.width = 960;
    }
}