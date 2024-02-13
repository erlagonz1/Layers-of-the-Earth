class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
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

    }

    update(){
        this.toplayerbg.tilePositionX += 4
        this.midlayerbg.tilePositionX += 4
        this.botlayerbg.tilePositionX += 4
    }

}