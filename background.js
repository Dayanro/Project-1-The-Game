class Background {

    constructor(ctx, backgroundW, backgroundH, imgSource) {
        this.ctx = ctx;
        this.width = backgroundW;
        this.height = backgroundH;

        this.image = new Image();
        this.image.src = imgSource;

        this.posX = 0;
        this.posY = 0;

        // this.velX = 5;
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
        //this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
        // this.move()
    }

    drawElements() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
        //this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
        // this.move()
    }

    // move() {
    //     if (this.posX <= -this.width) {
    //         this.posX = 0;
    //     }
    //     this.posX -= this.velX;
    // }
}