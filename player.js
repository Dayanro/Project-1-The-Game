class Player {

    constructor(ctx, gameWidth, gameHeight, keys) {
        this.ctx = ctx;

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.spriteWidth = 137;
        this.spriteHeight = 49;


        this.image = new Image();
        this.image.src = "./img/zelda6.png";

        let rows = 1;
        let cols = 4;

        this.image.framesIndex = 0;
        this.image.frames = 4;
        this.maxFrameLength = 2

        this.width = 50
        this.height = 50

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
        const frameY = 0;
        const sx = frameX * Math.floor(this.spriteWidth / this.image.frames);
        const sy = frameY;

        // if (this.image.frames > this.maxFrameLength) this.image.frames = 0;
        this.ctx.drawImage(this.image, sx, sy, Math.floor(this.image.width / this.image.frames), this.image.height, this.posX, this.posY, this.width, this.height);
        //this.bullets.forEach(bullet => bullet.draw())
        //this.clearBullets()
        //this.move()

    }

    animate(pos) {
        this.image.posY = pos[1];
        this.image.framesIndex = ++this.image.framesIndex % (this.image.frames / 2);
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
                    this.animate();
                    break;
                case this.keys.LEFT:
                    this.move('left')
                    this.animate([0, 1]);
                    break;
                case this.keys.RIGHT:
                    this.move('right')
                    this.animate();
                    break;
                case this.keys.DOWN:
                    this.move('down')
                    this.animate();
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
