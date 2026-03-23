let level1;

/**
 * Initializes level 1 with all enemies, objects, tiles, coins, and crystals.
 * Sets up the level1 variable with a new Level instance.
 */
function initLevel() {
    level1 = new Level(
        [
        new Spider(this),
        new Spider(this),
        new Spider(this),
        new Dino(this),
        new Dino(this),
        new Dino(this),
        new Dino(this),
        new Bear(this),
        new Bear(this),
        new Endboss(this)
        ],
        [
        new Clouds()
        ],
        [
        new BackgroundObject("img/backgrounds/sun.png", -960),
        new BackgroundObject("img/backgrounds/clouds1.png", -960),
        new BackgroundObject("img/backgrounds/clouds2.png", -960),
        new BackgroundObject("img/backgrounds/rocks1.png", -960),
        new BackgroundObject("img/backgrounds/rocks2.png", -960),
        new BackgroundObject("img/backgrounds/rocks3.png", -960),
        new BackgroundObject("img/backgrounds/sun.png", 0),
        new BackgroundObject("img/backgrounds/clouds1.png", 0),
        new BackgroundObject("img/backgrounds/clouds2.png", 0),
        new BackgroundObject("img/backgrounds/rocks1.png", 0),
        new BackgroundObject("img/backgrounds/rocks2.png", 0),
        new BackgroundObject("img/backgrounds/rocks3.png", 0),
        new BackgroundObject("img/backgrounds/sun.png", 960),
        new BackgroundObject("img/backgrounds/clouds1.png", 960),
        new BackgroundObject("img/backgrounds/clouds2.png", 960),
        new BackgroundObject("img/backgrounds/rocks1.png", 960),
        new BackgroundObject("img/backgrounds/rocks2.png", 960),
        new BackgroundObject("img/backgrounds/rocks3.png", 960),
        new BackgroundObject("img/backgrounds/sun.png", 1920),
        new BackgroundObject("img/backgrounds/clouds1.png", 1920),
        new BackgroundObject("img/backgrounds/clouds2.png", 1920),
        new BackgroundObject("img/backgrounds/rocks1.png", 1920),
        new BackgroundObject("img/backgrounds/rocks2.png", 1920),
        new BackgroundObject("img/backgrounds/rocks3.png", 1920),
        new BackgroundObject("img/backgrounds/sun.png", 2880),
        new BackgroundObject("img/backgrounds/clouds1.png", 2880),
        new BackgroundObject("img/backgrounds/clouds2.png", 2880),
        new BackgroundObject("img/backgrounds/rocks1.png", 2880),
        new BackgroundObject("img/backgrounds/rocks2.png", 2880),
        new BackgroundObject("img/backgrounds/rocks3.png", 2880)
        ],
        [
        new FlyingTile("img/tiles_ground/ground_tile08.png", 300, 250, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile10.png", 350, 250, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile09.png", 400, 250, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile08.png", 450, 200, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile09.png", 500, 200, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile08.png", 600, 200, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile09.png", 650, 200, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile08.png", 1100, 250, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile09.png", 1150, 250, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile08.png", 1200, 200, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile10.png", 1250, 200, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile09.png", 1300, 200, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile08.png", 1400, 200, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile10.png", 1450, 200, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile10.png", 1500, 200, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile09.png", 1550, 200, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile08.png", 2300, 200, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile09.png", 2350, 200, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile08.png", 2400, 200, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile09.png", 2450, 200, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile08.png", 2500, 150, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile09.png", 2550, 150, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile08.png", 2600, 100, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile09.png", 2650, 100, 50, 50),
        
        new FlyingTile("img/tiles_ground/ground_tile01.png", 3425, 403, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile23.png", 3475, 403, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile06.png", 3525, 403, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile06.png", 3575, 403, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile06.png", 3625, 403, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile06.png", 3675, 403, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile06.png", 3725, 403, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile06.png", 3775, 403, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile01.png", 3475, 353, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile07.png", 3525, 353, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile07.png", 3575, 353, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile07.png", 3625, 353, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile07.png", 3675, 353, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile07.png", 3725, 353, 50, 50),
        new FlyingTile("img/tiles_ground/ground_tile07.png", 3775, 353, 50, 50)
        ],
        createGroundTiles(),
        [
        new NatureObjects("img/dino/sleep2.png", 320, 195, 100, 100),
        new NatureObjects("img/objects/tree3.png", 620, 135, 100, 100),
        new NatureObjects("img/objects/tree1.png", 700, 300, 200, 200),
        new NatureObjects("img/objects/tree1.png", 1750, 300, 200, 200),
        new NatureObjects("img/objects/tree2.png", 1670, 363, 100, 100),
        new NatureObjects("img/objects/tree1.png", 2850, 300, 200, 200),
        new NatureObjects("img/objects/tree2.png", 3030, 363, 100, 100),
        new NatureObjects("img/objects/door2.png", 1400, 119, 115, 115),
        new NatureObjects("img/dino/sleep1.png", 1480, 146, 100, 100),
        new NatureObjects("img/objects/tree2.png", 2290, 123, 100, 100),
        new NatureObjects("img/dino/sleep1.png", 2500, 96, 100, 100),
        new NatureObjects("img/objects/tree1.png", 3620, 213, 200, 200),
        new NatureObjects("img/bear/attack3.png", 3490, 280, 100, 100)
        ],
        [
        new Coin(120, 370),
        new Coin(250, 410),
        new Coin(250, 330),
        new Coin(1050, 330),
        new Coin(1100, 370),
        new Coin(1540, 410),
        new Coin(2000, 330),
        new Coin(2050, 370),
        new Coin(2100, 330),
        new Coin(2100, 370)
        ],
        [
        new Crystal(120, 410),
        new Crystal(120, 330),
        new Crystal(250, 370),
        new Crystal(580, 410),
        new Crystal(620, 410),
        new Crystal(660, 410),
        new Crystal(1050, 410),
        new Crystal(1050, 370),
        new Crystal(1100, 410),
        new Crystal(1100, 330),
        new Crystal(1500, 410),
        new Crystal(1580, 410),
        new Crystal(2000, 410),
        new Crystal(2000, 370),
        new Crystal(2050, 410),
        new Crystal(2050, 330),
        new Crystal(2100, 410),
        new Crystal(2500, 410),
        new Crystal(2540, 410),
        new Crystal(2580, 410),
        new Crystal(2760, 410),
        new Crystal(2800, 410),
        new Crystal(2840, 410)
        ]
    );

    /**
     * Creates the ground tiles for the level.
     */
    function createGroundTiles() {
        const tileWidth = 50;
        const tileHeight = 50;
        const y_top = 440;
        const y_bottom = 490;
        const level_end_x = 2920;
        let tiles = [];
        const numTiles = Math.ceil((level_end_x + 5) / tileWidth);
        for (let i = -5; i < numTiles + 20; i++) {
            tiles.push(new GroundTile("img/tiles_ground/ground_tile07.png", Math.round(i * tileWidth), y_top, tileWidth, tileHeight));
            tiles.push(new GroundTile("img/tiles_ground/ground_tile06.png", Math.round(i * tileWidth), y_bottom, tileWidth, tileHeight));
        }
        return tiles;
    }
}
