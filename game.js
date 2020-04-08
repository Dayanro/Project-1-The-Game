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
    enemies: [],
    level: 2,
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
        this.width = 1440; // window.innerWidth;
        this.height = 896; //window.innerHeight;
        this.canvasDom.width = this.width;
        this.canvasDom.height = this.height;
    },

    start() {
        this.reset(this.level);
        this.setListeners();

        this.interval = setInterval(() => {
            if (this.framesCounter > 5000) {
                this.framesCounter = 0;
            }
            this.framesCounter++;

            this.clear();
            this.drawAll();
            this.generateObstacles();
            this.clearObstacles();

            if (this.touchesEnemies(this.player)) {
                this.gameOver();
            }
        }, 1000 / this.FPS);
    },

    drawAll() {
        this.background.draw();
        this.background.drawWalls()
        this.player.draw(this.framesCounter);
        this.enemies.forEach(enemy => enemy.draw(this.framesCounter));
        this.obstacles.forEach(obs => obs.draw());
    },


    nextLevel() {
        if (this.player.posX == 288) reset(2)
    },

    reset(level) {
        switch (level) {
            case 1:
                this.background = new Background(this.ctx, this.width, this.height, "./img/level1.png");
                this.player = new Player(this.ctx, this.width, this.height, this.keys, 1);
                let enemy1 = new Enemy(this.ctx, this.width, this.height, "./img/enemy5.png", 224, 35, 6, 0.5, 1, [0, 1, 2, 3, 4], 400, 390, 80, 80, 1)
                this.enemies.push(enemy1)
                let enemy2 = new Enemy(this.ctx, this.width, this.height, "./img/enemy5.png", 224, 35, 6, 1, 1, [0, 1, 2, 3, 4, 5], 600, 500, 80, 80, 1)
                this.enemies.push(enemy2)
                let enemy3 = new Enemy(this.ctx, this.width, this.height, "./img/enemy5.png", 224, 35, 6, 0.5, 1, [0, 1, 2, 3, 4, 5], 1000, 500, 80, 80, 1)
                this.enemies.push(enemy3)
                this.obstacles = [];
                break;
            case 2:
                this.background = new Background(this.ctx, this.width, this.height, "./img/level1.png");
                this.player = new Player(this.ctx, this.width, this.height, this.keys, 2);
                let enemy4 = new Enemy(this.ctx, this.width, this.height, "./img/enemy1.png", 483, 159, 5, 1, 1, [0, 1, 2, 3, 4], 400, 350, 80, 80, 2)
                this.enemies.push(enemy4)
                let enemy5 = new Enemy(this.ctx, this.width, this.height, "./img/enemy1.png", 483, 159, 5, 1, 1, [0, 1, 2, 3, 4], 600, 400, 80, 80, 2)
                this.enemies.push(enemy5)
                let enemy6 = new Enemy(this.ctx, this.width, this.height, "./img/enemy1.png", 483, 159, 5, 1, 1, [0, 1, 2, 3, 4], 800, 350, 80, 80, 2)
                this.enemies.push(enemy6)
                this.obstacles = [];
                break;

        }

        //gameWidth, gameHeight, url, spriteWidth, spriteHeight, frames, speed, rows, spriteIndexs, posX, posY, width, height,level
    },

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    },

    generateObstacles() {
        if (this.framesCounter % 400 == 0) {
            this.obstacles.push(new Obstacle(this.ctx, this.width, this.player.posY0, this.player.height));
        }
    },

    clearObstacles() {
        this.obstacles = this.obstacles.filter(obs => obs.posX >= 0);
    },
    touchesWalls(player) {
        return this.background.walls.some(wall => this.overlap(player, wall))
    },
    touchesEnemies(player) {
        //console.log
        return this.enemies.some(enemy => this.overlap(player, enemy))
    },

    touchesEnemies(player) {
        //console.log
        return this.enemies.some(enemy => this.overlap(player, enemy))
    },

    overlap(player, entity) {
        if (player.posX + player.width > entity.posX &&
            player.posX < entity.posX + entity.width &&
            player.posY + player.height > entity.posY &&
            player.posY < entity.posY + entity.height) {
            //console.log('OVERLAP TRUEEEEEEE')
            return true;
        }
        return false;
    },

    setListeners() {
        let trackPosX = this.player.posX
        let trackPosY = this.player.posY
        let trackSpeed = this.player.speed
        document.addEventListener("keydown", e => {
            switch (e.keyCode) {
                case this.keys.TOP:
                    trackPosY -= trackSpeed
                    if (!this.touchesWalls({ ...this.player, posY: trackPosY })) {
                        this.player.move('top')
                        this.player.animate([0, 3], [0, 1, 2, 3])
                    }
                    break;
                case this.keys.LEFT:
                    trackPosX -= trackSpeed
                    if (!this.touchesWalls({ ...this.player, posX: trackPosX })) {
                        this.player.move('left')
                        this.player.animate([0, 1], [0, 1, 2, 3])
                    }
                    break;
                case this.keys.RIGHT:
                    trackPosX += trackSpeed
                    if (!this.touchesWalls({ ...this.player, posX: trackPosX })) {
                        this.player.move('right')
                        this.player.animate([0, 2], [0, 1, 2, 3]);
                    }
                    break;
                case this.keys.DOWN:
                    trackPosY += trackSpeed
                    if (!this.touchesWalls({ ...this.player, posY: trackPosY })) {
                        this.player.move('down')
                        this.player.animate([0, 0], [0, 1, 2, 3]);
                    }
                    break;
                case this.keys.SPACE:
                    this.player.shoot();
                    this.player.animate();
                    break;
            }
        });
    },

    gameOver() {
        clearInterval(this.interval);
    }


}