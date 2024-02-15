class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    create() {

        spawnPoint = 300
        this.lost = false

        // add gradients for smoother transitions between the layers
        const graphics = this.add.graphics()

        graphics.fillGradientStyle(0x000000, 0x000000, 0x6d9eff, 0x6d9eff, 1)
        graphics.fillRect(0, 225, 960, 30)

        graphics.fillGradientStyle(0x108314, 0x108314, 0x4b382a, 0x4b382a, 1)
        graphics.fillRect(0, 465, 960, 30)


        // place all tile sprites
        this.toplayerbg = this.add.tileSprite(0, 0, 960, 225, 'space2').setOrigin(0, 0)
        this.midlayerbg = this.add.tileSprite(0, 255, 960, 225, 'grassy').setOrigin(0, 0)
        this.botlayerbg = this.add.tileSprite(0, 495, 960, 225, 'underground').setOrigin(0, 0)


        // initialize character and alien spawns
        this.player = this.physics.add.sprite(75, 390, 'character', 1).setScale(2)
        this.player.body.setCollideWorldBounds(true)

    
        // set up animation
        this.anims.create({
            key: 'walk-right',
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('character', {
                start: 6,
                end: 8
            })
        })

        
        this.alienSpeed = -400

        this.alienGroup = this.add.group({
            runChildUpdate: true 
        })

        this.time.delayedCall(2500, () => { 
            this.addAlien(); 
        });

        // this.spawnAliens = this.time.addEvent({
        //     delay: 2500,
        //     callback:  this.addAlien,
        //     callbackScope: this,
        //     loop: true
        // })


        // define keys
        keyRESET = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keyMENU = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)

        // create and display score
        this.p1Score = 0

        // display score
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.scoreLeft = this.add.text(game.config.width - 250, 20, this.p1Score, scoreConfig)

        this.highScoreText = this.add.text(game.config.width - 125, 20, highScore, scoreConfig)



        this.difficultyTimer = this.time.addEvent({
            delay: 1000,
            callback: this.levelBump,
            callbackScope: this,
            loop: true
        })

        this.increaseScore = this.time.addEvent({
            delay: 100,
            callback: this.scoreUp,
            callbackScope: this,
            loop: true
        });


        //this.alienface = this.physics.add.sprite(500, 390, 'alien', 1).setScale(2)

        this.player.body.setSize(32, 32).setOffset(8,16)
        // this.PLAYER_VELOCITY = 400

        cursors = this.input.keyboard.createCursorKeys()
    }
    

    update(){
        this.toplayerbg.tilePositionX += 4
        this.midlayerbg.tilePositionX += 4
        this.botlayerbg.tilePositionX += 4

        if(this.lost && Phaser.Input.Keyboard.JustDown(keyRESET)) {
            this.scene.restart()
        }

        if(this.lost && Phaser.Input.Keyboard.JustDown(keyMENU)) {
            this.scene.start('menuScene')
        }



        // if player hasn't lost yet
        if (!this.lost) {

            let playerVector = new Phaser.Math.Vector2(0, 0)
            let playerDirection = 'right'
            playerDirection = 'right'

            // prevent player from moving if they're at a layer barrier
            if (this.player.y > 182 && this.player.y < 195) {
                stopDown = true
            } else if (this.player.y > 405 && this.player.y < 421) {
                stopDown = true
            } else if (this.player.y > 275 && this.player.y < 288) {
                stopUp = true
            } else if (this.player.y > 518 && this.player.y < 530) {
                stopUp = true
            }

            // move up and down if not at a layer barrier
            if(cursors.up.isDown && !stopUp) {
                playerVector.y = -1
            } else if(cursors.down.isDown && !stopDown) {
                playerVector.y = 1
            }

            // moving between layers using left and right keys
            if (cursors.right.isDown && this.player.y > 175 && this.player.y < 195) {
                this.player.y = 285
                this.player.x += 15
            } else if (cursors.right.isDown && this.player.y > 400 && this.player.y < 421) {
                this.player.y = 525
                this.player.x += 15
            } else if (cursors.left.isDown && this.player.y > 275 && this.player.y < 293) {
                this.player.y = 190
                this.player.x += 15
            } else if (cursors.left.isDown && this.player.y > 505 && this.player.y < 526) {
                this.player.y = 420
                this.player.x += 15
            }

            // set player velocity and select the animation
            this.player.setVelocity(PLAYER_VELOCITY * playerVector.x, PLAYER_VELOCITY * playerVector.y)
            let playerMovement = 'walk-right'
            this.player.play(playerMovement, true)

            stopUp = false
            stopDown = false

            //update score
            if (this.p1Score >= highScore) {
                highScore = this.p1Score
            }
            this.scoreLeft.text = this.p1Score
            this.highScoreText.text = highScore
        }

        this.physics.world.collide(this.player, this.alienGroup, this.alienCollision, null, this);
    }

    addAlien() {
        let speedVariance =  Phaser.Math.Between(0, 100);
        let alien = new Alien(this, this.alienSpeed - speedVariance);
        this.alienGroup.add(alien);
    }

    alienCollision() {
        this.player.destroy()
        this.gameOver()
    }

    levelBump() {
        level += 1
        if (spawnPoint > 50){
            spawnPoint -= 3
        }
    }

    scoreUp() {
        this.p1Score += 1
    }

    gameOver() {
        let scoreConfig = {
            fontFamily: 'Georgia',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 600
        }
        this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart or (M) for Menu', scoreConfig).setOrigin(0.5)
        this.lost = true
    }

}