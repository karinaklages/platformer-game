class StatusBarCoin extends DrawableObject {
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
        this.y = 80;
        this.width = 130;
        this.height = 23;
        this.setPercentage(0);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_COIN_BAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if(this.percentage == 100) {
            return 5;
        } else if(this.percentage > 80) {
            return 4;
        } else if(this.percentage > 60) {
            return 3;
        } else if(this.percentage > 40) {
            return 2;
        } else if(this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}