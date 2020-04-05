const game = {
    name: 'Selda',
    author: 'Dayan Rojas',
    version: '1.0',
    description: '... ',
    license: undefined,
    canvasDom: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    FPS: 60,
    framesCounter: 0,
    background: undefined,
    player: undefined,
    obstacles: [],
    keys: {
        TOP: 38,
        LEFT: 37,
        RIGHT: 39,
        SPACE: 32,
        DOWN: 40
    },

    init() {
        this.canvasDom = document.getElementById("myCanvas");
        this.ctx = this.canvasDom.getContext("2d");
        this.setDimensions();
        this.start();
    },

    setDimensions() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvasDom.width = this.width;
        this.canvasDom.height = this.height;
    },

    start() {
        this.reset();
        this.interval = setInterval(() => {
            // if (this.framesCounter > 5000) {
            //     this.framesCounter = 0;
            // }
            // this.framesCounter++;

            this.clear();
            this.drawAll();

            //         this.generateObstacles();
            //         this.clearObstacles();


            //         if (this.isCollision()) {
            //             this.gameOver();
            //         }

        }, 1000 / this.FPS);
    },

    drawAll() {
        this.background.draw();
        this.player.draw(this.framesCounter);
        //     this.obstacles.forEach(obs => obs.draw());
    },

    reset() {
        this.background = new Background(this.ctx, this.width, this.height, "./img/map2.png");
        this.player = new Player(this.ctx, this.width, this.height, this.keys);
        //     this.obstacles = [];
    },

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    },

    // generateObstacles() {
    //     if (this.framesCounter % 90 == 0) {
    //         this.obstacles.push(new Obstacle(this.ctx, this.width, this.player.posY0, this.player.height));
    //     }
    // },

    // clearObstacles() {
    //     this.obstacles = this.obstacles.filter(obs => obs.posX >= 0);
    // },

    // isCollision() {
    //     return this.obstacles.some(obs => {
    //         return (
    //             this.player.posX + this.player.width >= obs.posX &&
    //             this.player.posY + this.player.height >= obs.posY &&
    //             this.player.posX <= obs.posX + obs.width
    //         );
    //     });
    // },

    // gameOver() {
    //     clearInterval(this.interval);
    //}

}