class Character extends MovableObject {
    world;
    currentImage = 0;
    speed = 5;
    y = 310;

    IMAGES_WALK = [
        'img/knight/walk1.png',
        'img/knight/walk2.png',
        'img/knight/walk3.png',
        'img/knight/walk4.png',
        'img/knight/walk5.png',
        'img/knight/walk6.png'
    ];
    IMAGES_JUMP = [
        'img/knight/jump1.png',
        'img/knight/jump2.png',
        'img/knight/jump3.png',
        'img/knight/jump4.png',
        'img/knight/jump5.png',
        'img/knight/jump6.png',
        'img/knight/jump7.png'
    ];

    constructor() {
        super();
        this.world = world; 
        this.loadImage('img/knight/walk1.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_JUMP);
        this.applyGravity();
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT && this.x -10) {
                this.moveLeft();
                this.otherDirection = true;
            }
            if (this.world.keyboard.UP && !this.isAboveGround()) {
                this.jump();
            }
            this.world.camera_x = -this.x + 70;
        }, 1000 / 60);
        
        setInterval(() => {
            if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMP);
            } else {
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALK);
                }
            }
        }, 50);
    }
}