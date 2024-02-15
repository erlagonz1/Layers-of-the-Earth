class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }

    preload() {
        // load images/tile sprites
        this.load.image('space2', './assets/space2.png')
        this.load.image('grassy', './assets/grass-with-cloud.png')
        this.load.image('underground', './assets/underground.png')
        this.load.image('alien', './assets/alienface.png')
        this.load.spritesheet('character', './assets/Character_002.png', {
            frameWidth: 48
        })
    }

    create() {

        // text styles
        let menuConfig = {
            fontFamily: 'Georgia',
            fontSize: '45px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        let textConfig = {
            fontFamily: 'Georgia',
            fontSize: '20px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 500,
            wordWrap: { width: 500 }
        }
        this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.p1Score, menuConfig)

        // display menu text
        this.add.text(game.config.width/2, game.config.height/2 - 150, 'Layers of the Earth', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 + 40, "Aliens have invaded the planet! Use the up and down keys to move your character. The left and right arrow keys let you travel up and down layers (respectively) when you are close to a layer border. Though be careful, transferring between layers has it's consequences!" , textConfig).setOrigin(0.5)
        menuConfig.backgroundColor = '#00FF00'
        menuConfig.color = '#000'
        this.add.text(game.config.width/2, game.config.height/2 + 200, 'Press down to begin', menuConfig).setOrigin(0.5)

        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)

    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyDOWN)) {
            this.scene.start('playScene')    
        }
    }
}