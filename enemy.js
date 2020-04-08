class Enemy {
    constructor(ctx, gameWidth, gameHeight) {
        this.ctx = ctx;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.spriteWidth = 483;
        this.spriteHeight = 159;

        this.image = new Image();
        this.image.src = "./img/enemy1.png";

        this.image.framesIndex = 0;
        this.image.frames = 5;
        this.image.rows = 1;
        this.spriteIndexs = [0, 1, 2, 3, 4]

        this.width = 80
        this.height = 80

        this.posX = 500;
        this.posY = 470;

        this.speed = 1;

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
    }
    moveX() {
        //let dx0 = this.posX
        this.posX += this.speed
        if (this.posX == 1030) {
            this.speed = this.speed * (-1)
            return this.posX += this.speed

        }


    }
}