class Player {

    // constructor(ctx, gameWidth, gameHeight, keys) {

    //     this.ctx = ctx;

    //     this.gameWidth = gameWidth;
    //     this.gameHeight = gameHeight;

    //     this.width = 100;
    //     this.height = 100;

    //     this.image = new Image();
    //     this.image.src = "./img/player.png";

    //     this.image.frames = 3;
    //     this.image.framesIndex = 0;

    //     this.posX = 20;
    //     this.posY = this.gameHeight - this.height - 20;
    //     this.posY0 = this.posY;

    //     this.keys = keys;

    //     this.velY = 1;
    //     this.gravity = 0.4;

    //     this.bullets = [];

    //     this.setListeners();
    // }

    // draw(framesCounter) {

    //     this.ctx.drawImage(
    //         this.image,
    //         this.image.framesIndex * Math.floor(this.image.width / this.image.frames),
    //         0,
    //         Math.floor(this.image.width / this.image.frames),
    //         this.image.height,
    //         this.posX,
    //         this.posY,
    //         this.width,
    //         this.height
    //     );

    //     this.animate(framesCounter);
    //     this.bullets.forEach(bullet => bullet.draw())
    //     this.clearBullets()
    //     this.move()
    // }

    // animate(framesCounter) {
    //     if (framesCounter % 5 == 0) {
    //         this.image.framesIndex++;
    //     }
    //     if (this.image.framesIndex > this.image.frames - 1) {
    //         this.image.framesIndex = 0;
    //     }
    // }

    // move() {

    //     if (this.posY < this.posY0) {
    //         this.posY += this.velY;
    //         this.velY += this.gravity;
    //     } else {
    //         this.posY = this.posY0;
    //         this.velY = 1;
    //     }

    // }

    // setListeners() {
    //     document.addEventListener("keydown", e => {
    //         switch (e.keyCode) {
    //             case this.keys.TOP:
    //                 if (this.posY >= this.posY0) {
    //                     this.posY -= 40;
    //                     this.velY -= 8;
    //                 }
    //                 break;
    //             case this.keys.SPACE:
    //                 this.shoot();
    //                 break;
    //         }
    //     });
    // }

    // shoot() {
    //     this.bullets.push(new Bullets(this.ctx, this.posX, this.posY, this.posY0, this.width, this.height));
    // }

    // clearBullets() {
    //     this.bullets = this.bullets.filter(bull => bull.posX <= this.gameWidth);
    // }
}
