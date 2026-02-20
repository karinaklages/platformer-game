class StatusBar {
    percentage = 100;

    IMAGES_COIN_BAR = [

    ];

    constructor() {
        super();
        this.loadimages(this.IMAGES_COIN_BAR);
        this.x = 50;
        this.y = 10;
        // this.width = ;
        // this.height = ;
        this.setPercentage(100);
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