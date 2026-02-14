class Character extends MovableObject {
    IMAGES_WALK = [
        'img/knight/walk1.png',
        'img/knight/walk2.png',
        'img/knight/walk3.png',
        'img/knight/walk4.png',
        'img/knight/walk5.png',
        'img/knight/walk6.png',
    ];
    world;
    currentImage = 0;
    speed = 5;

    constructor() {
        super();
        this.world = world; 
        this.loadImage('img/knight/walk1.png');
        this.loadImages(this.IMAGES_WALK);
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT && this.x -10) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x + 70;
        }, 1000 / 60);
        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                let i = this.currentImage % this.IMAGES_WALK.length;
                let path = this.IMAGES_WALK[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 50);
    }
}