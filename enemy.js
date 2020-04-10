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

        this.bullets = []

        this.posX = posX
        this.posY = posY
        this.startx = posX
        this.starty = posY
        this.speedY = 0
        this.speedX = 0
        this.moveType = 'A';


    }
    draw(framesCounter) {




        let max = this.spriteIndexs.length
        this.image.framesIndex = 0//((this.image.framesIndex + 1) % max) / 0.5;
        this.moveX()
        if (this.level == 3) {
            this.shoot(framesCounter)
            this.bullets.forEach(bullet => bullet.draw())
        }
        this.ctx.drawImage(
            this.image,
            this.image.framesIndex * Math.floor(this.image.width / this.image.frames),
            0,
            Math.floor(this.image.width / this.image.frames),
            136,
            this.posX,
            this.posY,
            this.width,
            this.height)

    }
    moveX() {
        //this.posY += this.speed
        switch (this.level) {
            case 1:
                this.posY += this.speed
                for (let i = 1; i <= 20; i++) {
                    if (this.posY == 480) {
                        this.speed = this.speed * (-1)
                        this.posY += this.speed
                    }
                    if (this.posY == 300) {
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

                if (this.moveType == 'A') {

                    if (this.starty == this.posY) {
                        this.speedY = this.speed
                        this.speedX = 0
                    } else if (this.posY - this.starty == 50) {
                        this.speedY = 0
                        this.speedX = this.speed
                    }
                } else if (this.moveType == 'B') {
                    if (this.posX - this.startx == 50 && (this.posY - this.starty) == 50) {
                        this.speedY = 0
                        this.speedX = (this.speed * -1)
                    } else if (this.posX == this.startx && this.posY - this.starty == 50) {
                        this.speedY = (this.speed * -1)
                        this.speedX = 0
                    }

                }

                this.posY += this.speedY
                this.posX += this.speedX
                break;
            case 3:
                if (this.posY == this.starty) {
                    this.moveType = 'A';
                } else if (this.posY - this.starty == 150) {
                    this.moveType = 'B';
                }

                if (this.moveType == 'A') {

                    this.speedY = this.speed



                } else if (this.moveType == 'B') {
                    this.speedY = (this.speed * -1)
                }

                this.posY += this.speedY


                break;

        }
    }

    shoot(framesCounter) {
        if (framesCounter % 170 == 0) {
            this.bullets.push(new Bullets(this.ctx, this.posX, this.posY, this.posY, this.width, this.height, -5))
        }
    }
}