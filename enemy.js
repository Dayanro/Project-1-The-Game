class Enemy {
    constructor(ctx, gameWidth, gameHeight, url, spriteWidth, spriteHeight, frames, speed, rows, spriteIndexs, posX, posY, width, height, level) {
        this.ctx = ctx;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.level = level
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
        this.startx = posX
        this.starty = posY
        this.speedY = 0
        this.speedX = 0
        this.moveType = 'A';

    }
    draw(framesCounter) {

        const frameX = this.image.framesIndex;
        const frameY = this.image.posY;
        const sx = frameX * Math.floor(this.image.width / this.image.frames);
        const sy = 0;
        this.ctx.drawImage(this.image, sx, sy, Math.floor(this.image.width / this.image.frames), this.height, this.posX, this.posY, this.width, this.height)
        let max = this.spriteIndexs.length
        this.image.framesIndex = (this.image.framesIndex + 2) % max;
        //this.posX += this.speed
        this.moveX()
        //console.log(this.posX)
    }
    moveX() {
        //this.posY += this.speed
        switch (this.level) {
            case 1:
                //if (this.level == 1) {
                //console.log("LEVEL1")
                this.posY += this.speed
                for (let i = 1; i <= 20; i++) {
                    if (this.posY == 340) {
                        this.speed = this.speed * (-1)
                        this.posY += this.speed
                    }
                    if (this.posY == 570) {
                        this.speed = this.speed * (-1)
                        this.posY += this.speed
                    }
                }
                break;
            case 2:
                if (this.posY == this.starty && this.posX == this.startx) {
                    this.moveType = 'A';
                } else if (this.posY - this.starty == 50 && this.posX - this.startx == 50) {
                    this.moveType = 'B';
                }
                //console.log('moveType', this.moveType)

                if (this.moveType == 'A') {

                    if (this.starty == this.posY) {
                        this.speedY = this.speed
                        this.speedX = 0
                        //console.log('AA')
                    } else if (this.posY - this.starty == 50) {
                        this.speedY = 0
                        this.speedX = this.speed
                        //console.log('AB')
                    }
                } else if (this.moveType == 'B') {
                    if (this.posX - this.startx == 50 && (this.posY - this.starty) == 50) {
                        this.speedY = 0
                        this.speedX = (this.speed * -1)
                        //console.log('BA')
                    } else if (this.posX == this.startx && this.posY - this.starty == 50) {
                        this.speedY = (this.speed * -1)
                        this.speedX = 0
                        //console.log('BB')
                    }
                }

                this.posY += this.speedY
                this.posX += this.speedX
                break;
        }
    }
}