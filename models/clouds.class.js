class Clouds extends MovableObject {
    y = -55;
    width = 960;
    height = 540;

    constructor() {
        super();
        this.loadImage('../img/backgrounds/clouds4.png');
        this.x = Math.random() * 700;
        this.animate(); 
    }

    animate() {
        this.moveLeft();
    }
}