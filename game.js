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
    heartImage: new Image(),

    FPS: 60,
    framesCounter: 0,
    background: undefined,
    player: undefined,
    enemies: [],
    level: 1,
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
            this.nextLevel()

            if (this.touchesEnemies(this.player)) {
                this.gameOver();
            }
        }, 1000 / this.FPS);
    },

    drawAll() {
        this.background.draw();
        this.background.drawWalls()
        this.player.draw(this.framesCounter);
        this.drawBoard()
        this.enemies.forEach(enemy => enemy.draw(this.framesCounter));
        this.obstacles.forEach(obs => obs.draw());

    },
    drawBoard() {
        this.heartImage.src = "./img/heart1.png"
        this.ctx.drawImage(this.heartImage, 200, 100, 50, 50)
    },

    nextLevel() {
        console.log("nextLevel")
        if (this.player.posX > 1100) {
            this.level++
            console.log('DISTANCIA', this.level)
            this.reset(this.level)
        }
    },

    reset(level) {
        this.enemies = []
        switch (level) {
            case 1:
                this.background = new Background(this.ctx, this.width, this.height, "./img/lv1.png");
                this.player = new Player(this.ctx, this.width, this.height, this.keys, 1);
                let enemy11 = new Enemy(this.ctx, this.width, this.height, "./img/enemy-1.png", 185, 54, 3, 1, 1, [0, 1, 2], 300, 300, 60, 60, 1)
                this.enemies.push(enemy11)
                let enemy12 = new Enemy(this.ctx, this.width, this.height, "./img/enemy5.png", 224, 35, 6, 2, 1, [0, 1, 2, 3, 4, 5], 530, 300, 80, 80, 1)
                this.enemies.push(enemy12)
                let enemy13 = new Enemy(this.ctx, this.width, this.height, "./img/enemy5.png", 224, 35, 6, 1, 1, [0, 1, 2, 3, 4, 5], 700, 300, 80, 80, 1)
                this.enemies.push(enemy13)
                let enemy14 = new Enemy(this.ctx, this.width, this.height, "./img/enemy5.png", 224, 35, 6, 2, 1, [0, 1, 2, 3, 4, 5], 820, 300, 80, 80, 1)
                this.enemies.push(enemy14)
                let enemy15 = new Enemy(this.ctx, this.width, this.height, "./img/enemy5.png", 224, 35, 6, 1, 1, [0, 1, 2, 3, 4, 5], 1100, 300, 80, 80, 1)
                this.enemies.push(enemy15)
                //this.background.drawElements = new Element(this.ctx, this.width, this.height, "./img/heart1.png", 200, 100, 50, 50))
                this.obstacles = [];

                break;
            case 2:
                this.background = new Background(this.ctx, this.width, this.height, "./img/lv1.png");
                this.player = new Player(this.ctx, this.width, this.height, this.keys, 2);
                let enemy21 = new Enemy(this.ctx, this.width, this.height, "./img/enemy1.png", 483, 159, 5, 1, 1, [0, 1, 2, 3, 4], 300, 300, 80, 80, 2)
                this.enemies.push(enemy21)
                let enemy22 = new Enemy(this.ctx, this.width, this.height, "./img/enemy1.png", 483, 159, 5, 1, 1, [0, 1, 2, 3, 4], 470, 400, 80, 80, 2)
                this.enemies.push(enemy22)
                let enemy23 = new Enemy(this.ctx, this.width, this.height, "./img/enemy1.png", 483, 159, 5, 1, 1, [0, 1, 2, 3, 4], 600, 350, 80, 80, 2)
                this.enemies.push(enemy23)
                let enemy24 = new Enemy(this.ctx, this.width, this.height, "./img/enemy1.png", 483, 159, 5, 1, 1, [0, 1, 2, 3, 4], 800, 300, 80, 80, 2)
                this.enemies.push(enemy24)
                let enemy25 = new Enemy(this.ctx, this.width, this.height, "./img/enemy1.png", 483, 159, 5, 1, 1, [0, 1, 2, 3, 4], 1000, 400, 80, 80, 2)
                this.enemies.push(enemy25)
                let enemy26 = new Enemy(this.ctx, this.width, this.height, "./img/enemy1.png", 483, 159, 5, 1, 1, [0, 1, 2, 3, 4], 1100, 350, 80, 80, 2)
                this.enemies.push(enemy26)
                // let enemy27 = new Enemy(this.ctx, this.width, this.height, "./img/enemy1.png", 483, 159, 5, 1, 1, [0, 1, 2, 3, 4], 1000, 400, 80, 80, 2)
                // this.enemies.push(enemy27)
                // let enemy28 = new Enemy(this.ctx, this.width, this.height, "./img/enemy1.png", 483, 159, 5, 1, 1, [0, 1, 2, 3, 4], 1100, 350, 80, 80, 2) 
                // this.enemies.push(enemy28)
                this.obstacles = [];
                break;
            case 3:
                this.background = new Background(this.ctx, this.width, this.height, "./img/lv1.png");
                this.player = new Player(this.ctx, this.width, this.height, this.keys, 2);
                let enemy31 = new Enemy(this.ctx, this.width, this.height, "./img/enemy1.png", 483, 159, 5, 1, 1, [0, 1, 2, 3, 4], 300, 300, 80, 80, 2)
                this.enemies.push(enemy31)
                this.obstacles = [];
                break;
        }

        //gameWidth, gameHeight, url, spriteWidth, spriteHeight, frames, speed, rows, spriteIndexs, posX, posY, width, height,level
    },

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    },

    generateObstacles() {
        if (this.framesCounter % 700 == 0) {
            this.obstacles.push(new Obstacle(this.ctx, this.width, this.player.posY0, this.player.height));
        }
    },

    clearObstacles() {
        this.obstacles = this.obstacles.filter(obs => obs.posX >= 0);
    },
    touchesWalls(player) {
        return this.background.walls.some(wall => this.overlap(player, wall))
    },
    touchesObstacles(player) {
        return this.obstacles.some(obs => this.overlap(player, obs))
    },

    touchesEnemies(player) {
        return this.enemies.some(enemy => this.overlap(player, enemy))
    },

    updateGameArea() {

        console.log(this.enemies)
        console.log(this.player.bullets)

        for (let i = 0; i < this.enemies.length; i++) {
            let pos = this.enemies[i];

            for (let j = 0; j < this.player.bullets.length; j++) {
                let pos2 = this.player.bullets[j];

                if (pos.posX + pos.spriteWidth > pos2.posX &&
                    pos.posX < pos2.posX + pos2.playerHeight &&
                    pos.posY + pos.spriteHeight > pos2.posY &&
                    pos.posY < pos2.posY + pos2.playerHeight) {
                    // Remove the enemy
                    this.enemies.splice(i, 1);
                    i--;
                    console.log('entra')
                    // Add score
                    //score += 100;

                    // Remove the bullet and stop this iteration
                    this.player.bullets.splice(j, 1);

                    break;
                }
            }

            // if (boxCollides(pos, size, player.pos, player.sprite.size)) {
            //     gameOver();
            // }
        }
    },

    overlap(player, entity) {
        if (player.posX + player.width > entity.posX &&
            player.posX < entity.posX + entity.width &&
            player.posY + player.height > entity.posY &&
            player.posY < entity.posY + entity.height) {
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
                    this.updateGameArea()
                    break;
            }
        });
    },

    gameOver() {
        const gameoverAudio = new Audio('./audio/gameover.wav');
        clearInterval(this.interval);
        audioElement.pause();
        gameoverAudio.play();
    }


}