class StatusBarCoin extends DrawableObject {
    percentage = 100;

    IMAGES_COIN_BAR = [
        'img/ui/coin-0.png',
        'img/ui/coin-20.png',
        'img/ui/coin-40.png',
        'img/ui/coin-60.png',
        'img/ui/coin-80.png',
        'img/ui/coin-100.png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_COIN_BAR);
        this.x = 30;
        this.y = 60;
        this.width = 130;
        this.height = 25;
    }
}