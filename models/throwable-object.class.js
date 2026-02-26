class ThrowableObject extends MovableObject {
    constructor(x, y, direction){
        super();
        this.loadImage('img/crystal/crystal1.png');
        this.x = x;
        this.y = y;
        this.width = 24;
        this.height = 24;
        this.direction = direction;
        this.throw();
    }

    throw() {
        this.speedY = 30;
        this.applyGravity();
        setStoppableInterval(() => {
            this.x += 10 * this.direction; 
        }, 25);
    }
}