let level1;

function initLevel() {
    level1 = new Level(
        [
        new Spider(),
        new Spider(),
        new Spider(),
        new Dino(),
        new Dino(),
        new Dino(),
        new Dino(),
        new Bear(),
        new Bear(),
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
        [
        new FlyingTile("../img/tiles_ground/ground_tile08.png", 300, 300, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile10.png", 350, 300, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile09.png", 400, 300, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile08.png", 450, 250, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile09.png", 500, 250, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile08.png", 600, 250, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile09.png", 650, 250, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile08.png", 1100, 200, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile09.png", 1150, 200, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile08.png", 1200, 250, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile10.png", 1250, 250, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile09.png", 1300, 250, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile08.png", 1400, 250, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile10.png", 1450, 250, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile10.png", 1500, 250, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile09.png", 1550, 250, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile08.png", 2300, 300, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile09.png", 2350, 300, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile08.png", 2400, 250, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile09.png", 2450, 250, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile08.png", 2500, 200, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile09.png", 2550, 200, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile08.png", 2600, 150, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile09.png", 2650, 150, 50, 50),
        
        new FlyingTile("../img/tiles_ground/ground_tile01.png", 3425, 453, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile23.png", 3475, 453, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile06.png", 3525, 453, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile06.png", 3575, 453, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile06.png", 3625, 453, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile06.png", 3675, 453, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile01.png", 3475, 403, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile07.png", 3525, 403, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile07.png", 3575, 403, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile07.png", 3625, 403, 50, 50),
        new FlyingTile("../img/tiles_ground/ground_tile07.png", 3675, 403, 50, 50)
        ],
        createGroundTiles(),
        [
        new NatureObjects("../img/dino/sleep2.png", 320, 245, 100, 100),
        new NatureObjects("../img/objects/tree3.png", 620, 185, 100, 100),
        new NatureObjects("../img/objects/tree1.png", 700, 350, 200, 200),
        new NatureObjects("../img/objects/tree1.png", 1750, 350, 200, 200),
        new NatureObjects("../img/objects/tree2.png", 1670, 413, 100, 100),
        new NatureObjects("../img/objects/tree1.png", 2850, 350, 200, 200),
        new NatureObjects("../img/objects/tree2.png", 3030, 413, 100, 100),
        new NatureObjects("../img/objects/door2.png", 1400, 170, 115, 115),
        new NatureObjects("../img/objects/door2.png", 1400, 170, 115, 115),
        new NatureObjects("../img/dino/sleep1.png", 1480, 196, 100, 100),
        new NatureObjects("../img/objects/tree2.png", 2290, 223, 100, 100),
        new NatureObjects("../img/dino/sleep1.png", 2500, 146, 100, 100),
        new NatureObjects("../img/objects/tree2.png", 3600, 325, 100, 100),
        new NatureObjects("../img/bear/attack3.png", 3490, 330, 100, 100)
        ],
        [
            new Coin(120, 420),
            new Coin(250, 460),
            new Coin(250, 380),
            new Coin(1050, 380),
            new Coin(1100, 420),
            new Coin(1540, 460),
            new Coin(2000, 380),
            new Coin(2050, 420),
            new Coin(2100, 380),
            new Coin(2100, 420)
        ],
        [
            new Crystal(120, 460),
            new Crystal(120, 380),
            new Crystal(250, 420),
            new Crystal(580, 460),
            new Crystal(620, 460),
            new Crystal(660, 460),
            new Crystal(1050, 460),
            new Crystal(1050, 420),
            new Crystal(1100, 460),
            new Crystal(1100, 380),
            new Crystal(1500, 460),
            new Crystal(1580, 460),
            new Crystal(2000, 460),
            new Crystal(2000, 420),
            new Crystal(2050, 460),
            new Crystal(2050, 380),
            new Crystal(2100, 460),
            new Crystal(2500, 460),
            new Crystal(2540, 460),
            new Crystal(2580, 460),
            new Crystal(2760, 460),
            new Crystal(2800, 460),
            new Crystal(2840, 460)
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
}
