const level1 = new Level(
    [
    new Spider(),
    new Spider(),
    new Spider(),
    new Endboss()
    ],
    [
    new Clouds()
    ],
    [
    new BackgroundObject("../img/backgrounds/sun.png", -960),
    new BackgroundObject("../img/backgrounds/clouds1.png", -960),
    new BackgroundObject("../img/backgrounds/clouds2.png", -960),
    new BackgroundObject("../img/backgrounds/rocks1.png", -960),
    new BackgroundObject("../img/backgrounds/rocks2.png", -960),
    new BackgroundObject("../img/backgrounds/rocks3.png", -960),

    new BackgroundObject("../img/backgrounds/sun.png", 0),
    new BackgroundObject("../img/backgrounds/clouds1.png", 0),
    new BackgroundObject("../img/backgrounds/clouds2.png", 0),
    new BackgroundObject("../img/backgrounds/rocks1.png", 0),
    new BackgroundObject("../img/backgrounds/rocks2.png", 0),
    new BackgroundObject("../img/backgrounds/rocks3.png", 0),

    new BackgroundObject("../img/backgrounds/sun.png", 960),
    new BackgroundObject("../img/backgrounds/clouds1.png", 960),
    new BackgroundObject("../img/backgrounds/clouds2.png", 960),
    new BackgroundObject("../img/backgrounds/rocks1.png", 960),
    new BackgroundObject("../img/backgrounds/rocks2.png", 960),
    new BackgroundObject("../img/backgrounds/rocks3.png", 960),

    new BackgroundObject("../img/backgrounds/sun.png", 1920),
    new BackgroundObject("../img/backgrounds/clouds1.png", 1920),
    new BackgroundObject("../img/backgrounds/clouds2.png", 1920),
    new BackgroundObject("../img/backgrounds/rocks1.png", 1920),
    new BackgroundObject("../img/backgrounds/rocks2.png", 1920),
    new BackgroundObject("../img/backgrounds/rocks3.png", 1920)
    ],
    createGroundTiles(),
    [
    new GroundTile("../img/tiles_ground/ground_tile08.png", 300, 400, 50, 50),
    new GroundTile("../img/tiles_ground/ground_tile10.png", 350, 400, 50, 50),
    new GroundTile("../img/tiles_ground/ground_tile09.png", 400, 400, 50, 50),
    new GroundTile("../img/tiles_ground/ground_tile08.png", 450, 350, 50, 50),
    new GroundTile("../img/tiles_ground/ground_tile09.png", 500, 350, 50, 50),
    new GroundTile("../img/tiles_ground/ground_tile08.png", 600, 350, 50, 50),
    new GroundTile("../img/tiles_ground/ground_tile09.png", 650, 350, 50, 50),
    // new GroundTile("../img/tiles_ground/ground_tile27.png", 850, 250, 50, 50),
    // new GroundTile("../img/tiles_ground/ground_tile28.png", 850, 300, 50, 50)
    ],
    [
    new NatureObjects("../img/objects/tree1.png", 700, 350, 200, 200),
    new NatureObjects("../img/objects/tree1.png", 1750, 350, 200, 200),
    new NatureObjects("../img/objects/tree2.png", 1670, 413, 100, 100)
    ]
);

function createGroundTiles() {
    const tileWidth = 50;
    const tileHeight = 50;
    const y = 490;
    const level_end_x = 2200;
    let tiles = [];
    const numTiles = Math.ceil(level_end_x + 5 / tileWidth);
    for (let i = -5; i < numTiles; i++) {
        tiles.push(
            new GroundTile("../img/tiles_ground/ground_tile07.png", i * tileWidth, y, tileWidth, tileHeight)
        );
    }
    return tiles;
}
