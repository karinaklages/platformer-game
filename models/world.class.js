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
        new BackgroundObject("../img/backgrounds/rocks3.png", 0),
    ]

    canvas;
    ctx;

    constructor (canvas) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.clouds);
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
}