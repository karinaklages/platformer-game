class Level {
    enemies;
    clouds;
    backgroundObjects;
    groundTiles;
    flyingTiles;
    natureObjects;
    level_end_x = 2800;

    constructor(enemies, clouds, backgroundObjects, groundTiles, flyingTiles, natureObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.groundTiles = groundTiles;
        this.flyingTiles = flyingTiles;
        this.natureObjects = natureObjects;
    }
}
