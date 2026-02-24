class Level {
    enemies;
    clouds;
    backgroundObjects;
    groundTiles;
    flyingTiles;
    natureObjects;
    coins;
    crystals;
    level_end_x = 2800;

    constructor(enemies, clouds, backgroundObjects, groundTiles, flyingTiles, natureObjects, coins, crystals) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.groundTiles = groundTiles;
        this.flyingTiles = flyingTiles;
        this.natureObjects = natureObjects;
        this.coins = coins;
        this.crystals = crystals;
    }
}
