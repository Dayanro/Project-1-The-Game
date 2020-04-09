class Background {

    constructor(ctx, backgroundW, backgroundH, imgSource) {

        this.ctx = ctx;
        this.width = backgroundW;
        this.height = backgroundH;

        this.image = new Image();
        this.image.src = imgSource;

        this.posX = 0;
        this.posY = 0;

        this.walls = [{ posX: 160, posY: 159, width: 1120, height: 127 },//top
        { posX: 160, posY: 545, width: 1120, height: 125 },//botton
        { posX: 160, posY: 290, width: 64, height: 85 },//left top
        { posX: 160, posY: 465, width: 64, height: 88 },// left botton
        { posX: 96, posY: 159, width: 64, height: 510 },// left side
        { posX: 1200, posY: 290, width: 79, height: 58 },//right top
        { posX: 1220, posY: 450, width: 64, height: 98 },//right botton
        { posX: 1282, posY: 159, width: 64, height: 516 }// right side
        ]
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }

    drawElements() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
    drawWalls() {
        this.walls.forEach(value => {
            this.ctx.strokeStyle = 'rgba(255, 0, 0, 0)' //'red'
            this.ctx.strokeRect(value.posX, value.posY, value.width, value.height)
        })
    }

}