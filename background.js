class Background {

    constructor(ctx, backgroundW, backgroundH, imgSource) {

        this.ctx = ctx;
        this.width = backgroundW;
        this.height = backgroundH;

        this.image = new Image();
        this.image.src = imgSource;

        this.posX = 0;
        this.posY = 0;

        this.walls = [{ posX: 288, posY: 229, width: 830, height: 117 },//top
        { posX: 288, posY: 614, width: 830, height: 96 },//botton
        { posX: 288, posY: 345, width: 64, height: 90 },//left top
        { posX: 288, posY: 525, width: 64, height: 88 },// left botton
        { posX: 223, posY: 229, width: 64, height: 482 },// left side
        { posX: 1055, posY: 345, width: 64, height: 120 },//right top
        { posX: 1055, posY: 560, width: 64, height: 53 },//right botton
        { posX: 1119, posY: 229, width: 64, height: 482 }// right side
        ]

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
    drawWalls() {
        this.walls.forEach(value => {
            this.ctx.strokeStyle = 'red'//'rgba(255, 0, 0, 0)'
            this.ctx.strokeRect(value.posX, value.posY, value.width, value.heigh)
        })
    }
    // move() {
    //     if (this.posX <= -this.width) {
    //         this.posX = 0;
    //     }
    //     this.posX -= this.velX;
    // }
}