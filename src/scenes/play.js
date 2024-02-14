class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    init() {
        this.PLAYER_VELOCITY = 400
    }

    create() {

        const graphics = this.add.graphics()

        graphics.fillGradientStyle(0x000000, 0x000000, 0x6d9eff, 0x6d9eff, 1)
        graphics.fillRect(0, 225, 960, 30)

        graphics.fillGradientStyle(0x108314, 0x108314, 0x4b382a, 0x4b382a, 1)
        graphics.fillRect(0, 465, 960, 30)


        // place all tile sprites
        this.toplayerbg = this.add.tileSprite(0, 0, 960, 225, 'space2').setOrigin(0, 0)
        this.midlayerbg = this.add.tileSprite(0, 255, 960, 225, 'grassy').setOrigin(0, 0)
        this.botlayerbg = this.add.tileSprite(0, 495, 960, 225, 'underground').setOrigin(0, 0)

        this.anims.create({
            key: 'walk-right',
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('character', {
                start: 6,
                end: 8
            })
        })


        this.player = this.physics.add.sprite(75, 390, 'character', 1).setScale(3)
        this.player.body.setCollideWorldBounds(true)

        this.alienface = this.physics.add.sprite(500, 390, 'alien', 1).setScale(2.5)


        this.player.body.setSize(32, 32).setOffset(8,16)

        cursors = this.input.keyboard.createCursorKeys()

        // keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        // keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)

        // this.playerLevel = 0

        
    }


    update(){
        this.toplayerbg.tilePositionX += 4
        this.midlayerbg.tilePositionX += 4
        this.botlayerbg.tilePositionX += 4

        let playerVector = new Phaser.Math.Vector2(0, 0)
        let playerDirection = 'right'


        //handle left and right
        //playerVector.x = 1
        playerDirection = 'right'

        // if (Phaser.Input.Keyboard.JustDown(keyUP) && this.player.Level < 1){
        //     this.player.y += 200
        //     this.playerLevel += 1
        // }

        // if (Phaser.Input.Keyboard.JustDown(keyDOWN) && this.player.Level > 0){
        //     this.player.y -= 200
        //     this.playerLevel -= 1
        // }

        //handle up and down
        if(cursors.up.isDown) {
            playerVector.y = -1
            //playerDirection = 'up'
        } else if(cursors.down.isDown) {
            playerVector.y = 1
            //playerDirection = 'down'
        }

        

        this.player.setVelocity(this.PLAYER_VELOCITY * playerVector.x, this.PLAYER_VELOCITY * playerVector.y)

        let playerMovement = 'walk-right'
        //playerVector.length() ? playerMovement = 'walk' : playerMovement = 'idle'
        this.player.play(playerMovement, true)
    }

}