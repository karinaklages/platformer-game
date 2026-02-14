class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    groundTiles = [];
    flyingTiles = [];
    natureObjects = [];

    constructor (canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.createGroundTiles();
        this.createFlyingTiles();
        this.createNatureObjects();
        this.draw();
        this.setWorld();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.groundTiles);
        this.addObjectsToMap(this.flyingTiles);
        this.addObjectsToMap(this.natureObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.ctx.translate(-this.camera_x, 0);
        requestAnimationFrame(() => this.draw());
    }

    setWorld() {
        this.character.world = this;
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

    addToMap(motive) {
        if (motive.otherDirection) {
            this.ctx.save();
            this.ctx.translate(motive.x + motive.width, motive.y);
            this.ctx.scale(-1, 1);
            this.ctx.drawImage(motive.img, 0, 0, motive.width, motive.height);
            this.ctx.restore();
        } else {
            this.ctx.drawImage(motive.img, motive.x, motive.y, motive.width, motive.height);
        }
    }

    createGroundTiles() {
        const tileWidth = 50;
        const tileHeight = 50;
        const y = this.canvas.height - tileHeight;
        const numTiles = Math.ceil(this.level.level_end_x + 5 / tileWidth);
        for (let i = -5; i < numTiles; i++) {
            this.groundTiles.push(
                new GroundTile("../img/tiles_ground/ground_tile07.png", i * tileWidth, y, tileWidth, tileHeight)
            );
        }
    }

    createFlyingTiles() {
        this.flyingTiles = [
            new GroundTile("../img/tiles_ground/ground_tile08.png", 300, 400, 50, 50),
            new GroundTile("../img/tiles_ground/ground_tile10.png", 350, 400, 50, 50),
            new GroundTile("../img/tiles_ground/ground_tile09.png", 400, 400, 50, 50),
            new GroundTile("../img/tiles_ground/ground_tile08.png", 450, 350, 50, 50),
            new GroundTile("../img/tiles_ground/ground_tile09.png", 500, 350, 50, 50),
            new GroundTile("../img/tiles_ground/ground_tile08.png", 600, 350, 50, 50),
            new GroundTile("../img/tiles_ground/ground_tile09.png", 650, 350, 50, 50),
            // new GroundTile("../img/tiles_ground/ground_tile27.png", 850, 250, 50, 50),
            // new GroundTile("../img/tiles_ground/ground_tile28.png", 850, 300, 50, 50)
        ];
    }

    createNatureObjects() {
        this.natureObjects = [
            new NatureObjects("../img/objects/tree1.png", 700, 350, 200, 200),
            new NatureObjects("../img/objects/tree1.png", 1750, 350, 200, 200),
            new NatureObjects("../img/objects/tree2.png", 1670, 413, 100, 100)
        ];
    }
}