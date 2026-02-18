const level1 = new Level(
    [
    new Spider(),
    new Spider(),
    new Spider(),
    new Dino(),
    new Dino(),
    new Bear(),
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
    new BackgroundObject("../img/backgrounds/rocks3.png", 1920),

    new BackgroundObject("../img/backgrounds/sun.png", 2880),
    new BackgroundObject("../img/backgrounds/clouds1.png", 2880),
    new BackgroundObject("../img/backgrounds/clouds2.png", 2880),
    new BackgroundObject("../img/backgrounds/rocks1.png", 2880),
    new BackgroundObject("../img/backgrounds/rocks2.png", 2880),
    new BackgroundObject("../img/backgrounds/rocks3.png", 2880)
    ],
    createGroundTiles(),
    [
    new FlyingTile("../img/tiles_ground/ground_tile08.png", 300, 400, 50, 50),
    new FlyingTile("../img/tiles_ground/ground_tile10.png", 350, 400, 50, 50),
    new FlyingTile("../img/tiles_ground/ground_tile09.png", 400, 400, 50, 50),
    new FlyingTile("../img/tiles_ground/ground_tile08.png", 450, 350, 50, 50),
    new FlyingTile("../img/tiles_ground/ground_tile09.png", 500, 350, 50, 50),
    new FlyingTile("../img/tiles_ground/ground_tile08.png", 600, 350, 50, 50),
    new FlyingTile("../img/tiles_ground/ground_tile09.png", 650, 350, 50, 50),

    new FlyingTile("../img/tiles_ground/ground_tile08.png", 1100, 350, 50, 50),
    new FlyingTile("../img/tiles_ground/ground_tile09.png", 1150, 350, 50, 50),
    new FlyingTile("../img/tiles_ground/ground_tile08.png", 1200, 400, 50, 50),
    new FlyingTile("../img/tiles_ground/ground_tile10.png", 1250, 400, 50, 50),
    new FlyingTile("../img/tiles_ground/ground_tile09.png", 1300, 400, 50, 50),
    new FlyingTile("../img/tiles_ground/ground_tile08.png", 1400, 400, 50, 50),
    new FlyingTile("../img/tiles_ground/ground_tile09.png", 1450, 400, 50, 50),
    new FlyingTile("../img/tiles_ground/ground_tile08.png", 1550, 300, 50, 50),
    new FlyingTile("../img/tiles_ground/ground_tile09.png", 1600, 300, 50, 50),

    new FlyingTile("../img/tiles_ground/ground_tile08.png", 2300, 400, 50, 50),
    new FlyingTile("../img/tiles_ground/ground_tile09.png", 2350, 400, 50, 50),
    new FlyingTile("../img/tiles_ground/ground_tile08.png", 2400, 350, 50, 50),
    new FlyingTile("../img/tiles_ground/ground_tile09.png", 2450, 350, 50, 50),
    new FlyingTile("../img/tiles_ground/ground_tile08.png", 2500, 300, 50, 50),
    new FlyingTile("../img/tiles_ground/ground_tile09.png", 2550, 300, 50, 50),
    new FlyingTile("../img/tiles_ground/ground_tile08.png", 2600, 250, 50, 50),
    new FlyingTile("../img/tiles_ground/ground_tile09.png", 2650, 250, 50, 50)
    ],
    [
    new NatureObjects("../img/objects/tree1.png", 700, 350, 200, 200),
    new NatureObjects("../img/objects/tree1.png", 1750, 350, 200, 200),
    new NatureObjects("../img/objects/tree2.png", 1670, 413, 100, 100),
    new NatureObjects("../img/objects/tree1.png", 2850, 350, 200, 200),
    new NatureObjects("../img/objects/tree2.png", 3030, 413, 100, 100)
    ]
);

function createGroundTiles() {
    const tileWidth = 50;
    const tileHeight = 50;
    const y = 490;
    const level_end_x = 2800;
    let tiles = [];
    const numTiles = Math.ceil(level_end_x + 5 / tileWidth);
    for (let i = -5; i < numTiles; i++) {
        tiles.push(
            new GroundTile("../img/tiles_ground/ground_tile07.png", i * tileWidth, y, tileWidth, tileHeight)
        );
    }
    return tiles;
}
