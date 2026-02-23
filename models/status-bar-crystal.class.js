class StatusBarCrystal extends DrawableObject {
    percentage = 100;

    IMAGES_CRYSTAL_BAR = [
        'img/ui/crystal-0.png',
        'img/ui/crystal-20.png',
        'img/ui/crystal-40.png',
        'img/ui/crystal-60.png',
        'img/ui/crystal-80.png',
        'img/ui/crystal-100.png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_CRYSTAL_BAR);
        this.x = 30;
        this.y = 100;
        this.width = 130;
        this.height = 25;
    }
}