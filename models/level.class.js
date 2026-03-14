/**
 * Represents a game level containing all objects and entities.
 */
class Level {
    enemies;
    clouds;
    backgroundObjects;
    groundTiles;
    flyingTiles;
    natureObjects;
    coins;
    crystals;
    level_end_x = 2920;
    character_end_x = 3750;

    /**
     * Creates a new Level instance.
     */
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
