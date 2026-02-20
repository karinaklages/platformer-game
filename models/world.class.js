class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();

    constructor (canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.groundTiles);
        this.addObjectsToMap(this.level.flyingTiles);
        this.addObjectsToMap(this.level.natureObjects);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.enemies);
        this.ctx.translate(-this.camera_x, 0);
        requestAnimationFrame(() => this.draw());
    }

    setWorld() {
        this.character.world = this;
    }
    
    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if(this.character.isColliding(enemy)) {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                    // console.log("Collision with character, energy", this.character.energy)
                }
            });
        }, 200);
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

    addToMap(motive) {
        if (motive.otherDirection) {
            this.flipImageLeft(motive);
        } else {
            this.flipImageRight(motive);
        }

        if (motive instanceof Character || motive instanceof Spider || motive instanceof Dino || motive instanceof Bear || motive instanceof Endboss) {
            this.ctx.beginPath();
            this.ctx.lineWidth = "2";
            this.ctx.strokeStyle = "#9446c1";
            // this.ctx.rect(motive.x, motive.y, motive.width, motive.height);
            this.ctx.rect(motive.x + motive.offset.left, motive.y + motive.offset.top, motive.width - motive.offset.left - motive.offset.right, motive.height - motive.offset.top - motive.offset.bottom);
            this.ctx.stroke();
        }
    }

    flipImageLeft(motive) {
        this.ctx.save();
        this.ctx.translate(motive.x + motive.width, motive.y);
        this.ctx.scale(-1, 1);
        this.ctx.drawImage(motive.img, 0, 0, motive.width, motive.height);
        this.ctx.restore();
    }

    flipImageRight(motive) {
        this.ctx.drawImage(motive.img, motive.x, motive.y, motive.width, motive.height);
    }
}

