class Alien extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, velocity) {
        super(scene, game.config.width + 20, Phaser.Math.Between(12, game.config.height, 12), 'alien')

        this.parentScene = scene              

        // set up physics
        this.parentScene.add.existing(this)
        this.parentScene.physics.add.existing(this)
        this.setVelocityX(velocity)            
        this.setImmovable()             
        this.newAlien = true              
    }

    update() {
        // add new barrier when aliens reach a point
        if(this.newAlien && this.x < game.config.width - spawnPoint) {
            this.parentScene.addAlien(this.parent, this.velocity)
            this.newAlien = false
        }

        // destroy alien if it goes left of the screen
        if(this.x < -this.width) {
            this.destroy();
        }
    }
}