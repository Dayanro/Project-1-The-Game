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
    swordImage: new Image(),

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
    score: 0,
    audios: {
        enemyDies: new Audio('./audio/enemy_dies.wav'),
        gameOver: new Audio('./audio/gameover.wav'),
        fire: new Audio('./audio/fire.wav'),
        nextLevel: new Audio('./audio/next_level.wav'),
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

            this.clearObstacles();
            this.nextLevel()

            if (this.touchesEnemies(this.player) || this.touchesObstacles(this.player) || this.touchesBullets(this.player)) {
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
        this.ctx.font = "20px Rye, cursive"
        this.ctx.fillStyle = "white"
        this.ctx.fillText("x 1", 250, 150)


        this.swordImage.src = "./img/attack1.png"
        this.ctx.drawImage(this.swordImage, 300, 100, 50, 50)
        this.ctx.font = "20px Rye, cursive"
        this.ctx.fillStyle = "white"
        this.ctx.fillText(`x ${this.player.countBullets}`, 350, 150)

        this.ctx.font = "30px Rye, cursive"
        this.ctx.fillStyle = "white"
        this.ctx.fillText(`level ${this.level}`, 450, 150)

        this.ctx.font = "20px Rye, cursive"
        this.ctx.fillStyle = "white"
        this.ctx.fillText(`use space keyboard to fire magic`, 170, 700)
    },

    nextLevel() {
        if (this.player.posX > 1100 && this.level < 3) {
            this.level++
            this.reset(this.level)
            this.audios.nextLevel.play();
        } else if (this.player.posX > 1100 && this.level == 3) {
            clearInterval(this.interval);
            this.ctx.font = "60px Rye, cursive"
            this.ctx.fillStyle = "white"
            this.ctx.fillText(`You win!!`, this.width / 2 - 100, this.height / 2)
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
                this.generateObstacles();

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
                // let enemy28 = new Enemy(this.ctx, this.width, this.height, "./img/enemy1.png", 483, 159, 5, 1, 1, [0, 1, 2, 3, 4], 1100, 350, 30, 80, 2) 
                // this.enemies.push(enemy28)
                this.obstacles = [];
                this.generateObstacles();
                break;
            case 3:
                this.background = new Background(this.ctx, this.width, this.height, "./img/lv1.png");
                this.player = new Player(this.ctx, this.width, this.height, this.keys, 3);
                let enemy31 = new Enemy(this.ctx, this.width, this.height, "./img/wizard1.png", 116, 136, 6, 1, 1, [0, 1, 2, 3, 4, 5], 900, 278, 100, 100, 3)
                let enemy32 = new Enemy(this.ctx, this.width, this.height, "./img/wizard1.png", 116, 136, 6, 0.5, 1, [0, 1, 2, 3, 4, 5], 600, 278, 100, 100, 3)
                this.enemies.push(enemy31)
                this.enemies.push(enemy32)
                this.obstacles = [];
                break;
        }

        //gameWidth, gameHeight, url, spriteWidth, spriteHeight, frames, speed, rows, spriteIndexs, posX, posY, width, height,level
    },

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    },

    generateObstacles() {
        if (this.framesCounter % 120 == 0) {
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

    touchesBullets() {

        for (let i = 0; i < this.enemies.length; i++) {
            let enemy = this.enemies[i];

            for (let j = 0; j < enemy.bullets.length; j++) {
                let bullet = enemy.bullets[j];

                if (this.player.posX + this.player.width > bullet.posX &&
                    this.player.posX < bullet.posX + bullet.playerHeight / 3 &&
                    this.player.posY + this.player.height > bullet.posY &&
                    this.player.posY < bullet.posY + bullet.playerHeight / 3) {

                    enemy.bullets.splice(j, 1);
                    this.gameOver()

                    break;
                }
            }

        }
    },

    updateGameArea() {

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
                    this.score += 100;

                    this.player.bullets.splice(j, 1);
                    this.audios.enemyDies.play();

                    break;
                }
            }
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
                    this.audios.fire.volume = 1;
                    this.audios.fire.play();
                    break;
            }
        });
    },

    gameOver() {
        clearInterval(this.interval);
        this.ctx.font = "50px Rye, cursive"
        this.ctx.fillStyle = "white"
        this.ctx.fillText(`Game over`, this.width / 2 - 100, this.height / 2)
        setTimeout(() => {
            this.reset(1);
        }, 3000)
        audioElement.pause();
        this.audios.gameOver.play();
    }


}