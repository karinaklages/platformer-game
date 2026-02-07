class World {
    character = new Character();
    enemies = [
        new Enemy(),
        new Enemy(),
        new Enemy()
    ]
    clouds = [
        new Clouds(),
    ]
    backgroundObjects = [
        new BackgroundObject("../img/backgrounds/sun.png", 0),
        new BackgroundObject("../img/backgrounds/clouds1.png", 0),
        new BackgroundObject("../img/backgrounds/clouds2.png", 0),
        new BackgroundObject("../img/backgrounds/rocks1.png", 0),
        new BackgroundObject("../img/backgrounds/rocks2.png", 0),
        new BackgroundObject("../img/backgrounds/rocks3.png", 0)
    ]
    groundTiles = [];
    flyingTiles = [];

    canvas;
    ctx;

    constructor (canvas) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.createGroundTiles();
        this.createFlyingTiles();
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.groundTiles);
        this.addObjectsToMap(this.flyingTiles);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        requestAnimationFrame(() => this.draw());
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

    addToMap(motive) {
        this.ctx.drawImage(motive.img, motive.x, motive.y, motive.width, motive.height);
    }

    createGroundTiles() {
        const tileWidth = 50;
        const tileHeight = 50;
        const y = this.canvas.height - tileHeight;
        const numTiles = Math.ceil(this.canvas.width / tileWidth);
        for (let i = 0; i < numTiles; i++) {
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
        new GroundTile("../img/objects/tree3.png", 350, 333, 100, 100),
        new GroundTile("../img/tiles_ground/ground_tile08.png", 500, 350, 50, 50),
        new GroundTile("../img/tiles_ground/ground_tile09.png", 550, 350, 50, 50),
        new GroundTile("../img/tiles_ground/ground_tile27.png", 850, 250, 50, 50),
        new GroundTile("../img/tiles_ground/ground_tile28.png", 850, 300, 50, 50),
    ];
}
}