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
        this.load.spritesheet('character', './assets/pinkCharacter.png', {
            frameWidth: 48
        })

        // load audio
        this.load.audio('start-play', './assets/start-play.wav')
        this.load.audio('top-layer', './assets/top-layer.wav')
        this.load.audio('bottom-layer', './assets/bottom-layer.mp3')
        this.load.audio('game-over', './assets/game-over.wav')
        this.load.audio('bgm', './assets/better-day.mp3')
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
        this.scoreLeft = this.add.text(game.config.height/15 + game.config.height/45, game.config.height/15 + game.config.height/45*2, this.p1Score, menuConfig)

        // display menu text
        this.add.text(game.config.width/2, game.config.height/2 - 150, 'Layers of the Earth', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 + 40, "Aliens have invaded the planet! Use the up and down keys to move your character. The left and right arrow keys let you travel up and down layers (respectively) when you are close to a layer border. Though be careful, transferring between layers has it's consequences!" , textConfig).setOrigin(0.5)
        menuConfig.backgroundColor = '#00FF00'
        menuConfig.color = '#000'
        this.add.text(game.config.width/2, game.config.height/2 + 200, 'Press down to begin', menuConfig).setOrigin(0.5)
        textConfig.fixedWidth = 0
        textConfig.fontSize = '15px'
        this.add.text(150, game.config.height - 30, 'Background music credits: penguinmusic', textConfig).setOrigin(0.5)
        textConfig.wordWrap = { width: 160 }
        this.add.text(game.config.width - 85, game.config.height - 45, 'Sound effects credits: Envato Elements and Joshua Chivers', textConfig).setOrigin(0.5)

        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)

    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyDOWN)) {
            this.sound.play('start-play', { volume: 2 })
            this.scene.start('playScene')    
        }
    }
}