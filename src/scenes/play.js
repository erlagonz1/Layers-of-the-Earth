class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    create() {

        // const graphics = this.add.graphics();

        // graphics.fillGradientStyle(0x000000, 0x000000, 0x0000ff, 0xffff00, 1);
        // graphics.fillRect(100, 100, 960, 240);


        // place all tile sprites
        this.toplayerbg = this.add.tileSprite(0, 0, 960, 240, 'space2').setOrigin(0, 0)
        this.midlayerbg = this.add.tileSprite(0, 240, 960, 240, 'grassy').setOrigin(0, 0)
        this.botlayerbg = this.add.tileSprite(0, 480, 960, 240, 'underground').setOrigin(0, 0)

    }

    update(){
        this.toplayerbg.tilePositionX += 4
        this.midlayerbg.tilePositionX += 4
        this.botlayerbg.tilePositionX += 4
    }

}