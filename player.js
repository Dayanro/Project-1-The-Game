class Player {

    constructor(ctx, gameWidth, gameHeight, keys, level) {
        this.ctx = ctx;
        this.level = level
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.spriteWidth = 135;
        this.spriteHeight = 195;


        this.image = new Image();
        this.image.src = "./img/zeldaPower.png";

        this.image.framesIndex = 0;
        this.image.frames = 4;
        this.image.rows = 4;

        this.width = 50
        this.height = 50

        this.status = ["POWER", "NORMAL"]
        this.actualStatus = this.status[0];

        this.posX = 340;
        this.posY = 450;
        this.posY0 = this.posY;

        this.keys = keys;

        this.speed = 10;
        this.gravity = 0.4;

        this.bullets = [];
    }

    draw(framesCounter) {
        const frameX = this.image.framesIndex;
        const frameY = this.image.posY;
        const sx = frameX * Math.floor(this.image.width / this.image.frames);
        const sy = frameY * Math.floor(this.image.height / this.image.rows);

        //console.log('width', sx)
        //console.log('height', sy)


        this.ctx.drawImage(this.image, sx, sy, Math.floor(this.image.width / this.image.frames), this.height, this.posX, this.posY, this.width, this.height);
        this.bullets.forEach(bullet => bullet.draw())
        this.clearBullets()
        this.move()

    }

    animate(pos, spriteIndexs) {
        this.image.posY = pos[1];
        let max = spriteIndexs.length
        this.image.framesIndex = (++this.image.framesIndex % max);


        //console.log('INDEX', this.image.framesIndex)
        //console.log('position', this.posX, this.posY)
    }

    move(dir) {

        dir === 'left' ? this.posX -= this.speed : null
        dir === 'right' ? this.posX += this.speed : null
        dir === 'top' ? this.posY -= this.speed : null
        dir === 'down' ? this.posY += this.speed : null
    }

    shoot() {
        this.bullets.push(new Bullets(this.ctx, this.posX, this.posY, this.posY0, this.width, this.height));
    }

    clearBullets() {
        this.bullets.forEach(bullet => {
            if (bullet.posX == 1100) {
                this.bullets.splice(bullet, 1);
            }
        })
        this.bullets = this.bullets.filter(bull => bull.posX <= this.gameWidth);
    }


}
