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

    canvas;
    ctx;

    constructor (canvas) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.height, this.character.width);
        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.height, enemy.width);
        });
        this.clouds.forEach(clouds => {
            this.ctx.drawImage(clouds.img, clouds.x, clouds.y, clouds.height, clouds.width);
        });
        requestAnimationFrame(() => this.draw());
    }
}