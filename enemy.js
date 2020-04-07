class Enemy {
    constructor(ctx, gameWidth, gameHeight) {
        this.ctx = ctx;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.spriteWidth = 230;
        this.spriteHeight = 33;

        this.image = new Image();
        this.image.src = "./img/enemy3.png";

        this.image.framesIndex = 0;
        this.image.frames = 8;
        this.image.rows = 1;
        this.spriteIndexs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 8]

        this.width = 50
        this.height = 50

        this.posX = 500;
        this.posY = 450;

        this.speed = 1;
        //this.gravity = 0.4;
    }
    draw(framesCounter) {

        const frameX = this.image.framesIndex;
        const frameY = this.image.posY;
        const sx = frameX * Math.floor(this.spriteWidth / this.image.frames);
        const sy = 0;
        this.ctx.drawImage(this.image, sx, sy, Math.floor(this.image.width / this.image.frames), this.height, this.posX, this.posY, this.width, this.height)
        let max = this.spriteIndexs.length
        this.image.framesIndex = (this.image.framesIndex + 1) % max;
        //this.posX += this.speed

        // const frameX = this.image.framesIndex;
        // const frameY = this.image.posY;
        // const sx = frameX * Math.floor(this.spriteWidth / this.image.frames);
        // const sy = frameY * Math.floor(this.spriteHeight / this.image.rows);
        // this.ctx.drawImage(this.image, sx, sy, Math.floor(this.image.width / this.image.frames), this.height, this.posX, this.posY, this.width, this.height)
        // let max = this.spriteIndexs.length
        // this.image.framesIndex = (++this.image.framesIndex % max);
    }
    // move() {
    //     if (this.posX <= 700)
    //         this.posX = 200 + this.speed
    // }

    // animate(pos, spriteIndexs) {
    //     // this.image.posY = pos[1];[0], [0, 1, 2, 3])
    //     // let max = spriteIndexs.length
    //     // this.image.framesIndex = (++this.image.framesIndex % max);
    //     // console.log('INDEX', this.image.framesIndex)
    //     // console.log('position', this.posX, this.posY)
    // }

}


