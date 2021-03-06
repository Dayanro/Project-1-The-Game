class Bullets {

    constructor(ctx, playerPosX, playerPosY, playerPosY0, playerWidth, playerHeight, velX) {
        this.ctx = ctx;
        this.posX = playerPosX + playerWidth;
        this.posY = playerPosY + playerHeight / 2;
        this.playerPosY0 = playerPosY;
        this.playerHeight = playerHeight;

        this.radius = 4;

        this.velX = velX || 10;
        this.velY = 1;

        this.gravity = 1;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "#b68727";
        this.ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
        this.move()
    }

    move() {
        this.posX += this.velX;
        //this.posY += this.velY;

        //this.velY += this.gravity;

        // if (this.posY >= this.playerPosY0 + this.playerHeight) {
        //     this.velY *= -1;
        // }

    }
}
