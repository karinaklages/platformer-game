class Coin extends DrawableObject {
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

    constructor(x, y) {
        super();
        this.loadImage('img/coin/coin1.png');
        this.x = x;
        this.y = y;
        this.width = 25;
        this.height = 25;
    }
}