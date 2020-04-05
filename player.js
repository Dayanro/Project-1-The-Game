class Player {

    constructor(ctx, gameWidth, gameHeight, keys) {
        this.ctx = ctx;

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.spriteWidth = 132;
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

        this.posX = 400;
        this.posY = 200;
        this.posY0 = this.posY;

        this.keys = keys;

        this.velY = 4;
        this.gravity = 0.4;

        this.bullets = [];

        this.setListeners();
    }

    draw(framesCounter) {
        const frameX = this.image.framesIndex;
        const frameY = this.image.posY;
        const sx = frameX * Math.floor(this.spriteWidth / this.image.frames);
        const sy = frameY * Math.floor(this.spriteHeight / this.image.rows);

        console.log('width', sx)
        console.log('height', sy)


        this.ctx.drawImage(this.image, sx, sy, Math.floor(this.image.width / this.image.frames), this.height, this.posX, this.posY, this.width, this.height);
        //this.bullets.forEach(bullet => bullet.draw())
        //this.clearBullets()
        //this.move()

    }

    animate(pos, spriteIndexs) {
        this.image.posY = pos[1];
        let max = spriteIndexs.length
        this.image.framesIndex = (++this.image.framesIndex % max);
        console.log('INDEX', this.image.framesIndex)
    }

    move(dir) {
        dir === 'left' ? this.posX -= this.velY : null
        dir === 'right' ? this.posX += this.velY : null
        dir === 'top' ? this.posY -= this.velY : null
        dir === 'down' ? this.posY += this.velY : null
    }

    setListeners() {
        document.addEventListener("keydown", e => {
            switch (e.keyCode) {
                case this.keys.TOP:
                    this.move('top')
                    this.animate([0, 3], [0, 1, 2, 3]);
                    break;
                case this.keys.LEFT:
                    this.move('left')
                    this.animate([0, 1], [0, 1, 2, 3]);
                    break;
                case this.keys.RIGHT:
                    this.move('right')
                    this.animate([0, 2], [0, 1, 2, 3]);
                    break;
                case this.keys.DOWN:
                    this.move('down')
                    this.animate([0, 0], [0, 1, 2, 3]);
                    break;
                case this.keys.SPACE:
                    this.shoot();
                    this.animate();
                    break;
            }
        });
    }

    // shoot() {
    //     this.bullets.push(new Bullets(this.ctx, this.posX, this.posY, this.posY0, this.width, this.height));
    // }

    // clearBullets() {
    //     this.bullets = this.bullets.filter(bull => bull.posX <= this.gameWidth);
    // }
}
