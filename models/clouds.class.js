class Clouds extends MovableObject {
    // Static clouds 
    // constructor() {
    //     super();
    //     this.loadImage('../img/backgrounds/clouds3.png');
    //     this.x = 0;
    //     this.y = -35;
    //     this.width = 960;
    //     this.height = 540;
    // }

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