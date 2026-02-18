class Character extends MovableObject {
    world;
    currentImage = 0;
    speed = 5;

    offset = {
        top: 50,
        left: 20,
        right: 50,
        bottom: 20
    };

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
        'img/knight/jump6.png'
    ];
    IMAGES_HURT = [
        'img/knight/hurt1.png',
        'img/knight/hurt2.png',
        'img/knight/hurt3.png',
        'img/knight/hurt4.png'
    ];
    IMAGES_DEAD = [
        'img/knight/death1.png',
        'img/knight/death2.png',
        'img/knight/death3.png',
        'img/knight/death4.png',
        'img/knight/death5.png',
        'img/knight/death6.png',
        'img/knight/death7.png',
        'img/knight/death8.png',
        'img/knight/death9.png',
        'img/knight/death10.png'
    ];

    constructor() {
        super();
        this.world = world; 
        this.loadImage('img/knight/walk1.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
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
            if(this.isDead()){
                this.playAnimation(this.IMAGES_DEAD);
            } else if(this.isHurt()){
                this.playAnimation(this.IMAGES_HURT);
            } else if(this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMP);
            } else {
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALK);
                }
            }
        }, 80);
    }
}