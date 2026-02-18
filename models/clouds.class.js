class Clouds extends MovableObject {
    y = -55;
    width = 960;
    height = 540;

    constructor() {
        super();
        this.loadImage('../img/backgrounds/clouds4.png');
        this.x = Math.random() * 1000;
        this.animate(); 
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}