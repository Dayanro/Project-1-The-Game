class Obstacle {
    constructor(ctx, gameWidth, playerPosY0, playerHeight) {
        this.ctx = ctx;
        this.width = 35;
        this.height = this.width / 3;

        this.posX = 943;
        this.posY = 300;

        this.velY = 1;
    }

    draw() {
        this.ctx.fillStyle = "#2d2a41";
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
        this.move()
    }

    move() {
        this.posY += this.velY;
        //for (let i = 1; i <= 20; i++) {
        if (this.posY == 580) {
            this.velY = this.velY * (-1)
            this.posY += this.velY
        }
        if (this.posY == 300) {
            this.velY = this.velY * (-1)
            this.posY += this.velY
        }
        //}
    }
}
