class Enemy {
    constructor(ctx, gameWidth, gameHeight, url, spriteWidth, spriteHeight, frames, speed, rows, spriteIndexs, posX, posY, width, height) {
        this.ctx = ctx;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.image = new Image();
        this.image.src = url

        this.spriteWidth = spriteWidth
        this.spriteHeight = spriteHeight

        this.image.framesIndex = 0;
        this.image.frames = frames
        this.image.rows = rows
        this.speed = speed
        this.spriteIndexs = spriteIndexs

        this.width = width
        this.height = height

        this.posX = posX
        this.posY = posY

    }
    draw(framesCounter) {

        const frameX = this.image.framesIndex;
        const frameY = this.image.posY;
        const sx = frameX * Math.floor(this.spriteWidth / this.image.frames);
        const sy = 0;
        this.ctx.drawImage(this.image, sx, sy, Math.floor(this.image.width / this.image.frames), this.height, this.posX, this.posY, this.width, this.height)
        let max = this.spriteIndexs.length
        this.image.framesIndex = (this.image.framesIndex + 2) % max;
        //this.posX += this.speed
        this.moveX()
        console.log(this.posX)
    }
    moveX() {

        this.posX += this.speed
        for (let i = 1; i <= 20; i++) {
            if (this.posX == 1030) {
                this.speed = this.speed * (-1)
                this.posX += this.speed
            }
            if (this.posX == 500) {
                this.speed = this.speed * (-1)
                this.posX += this.speed
            }
        }

    }
}