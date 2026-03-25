/**
 * Represents a game level containing all objects and entities.
 */
class Level {
    enemies;
    clouds;
    backgroundObjects;
    tiles;
    natureObjects;
    coins;
    crystals;
    level_end_x = 2920;
    character_end_x = 3750;

    /**
     * Creates a new Level instance.
     */
    constructor(enemies, clouds, backgroundObjects, tiles, natureObjects, coins, crystals) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.tiles = tiles;
        this.natureObjects = natureObjects;
        this.coins = coins;
        this.crystals = crystals;
    }
}
