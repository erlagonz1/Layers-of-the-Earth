class Alien extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, velocity) {
        // call Phaser Physics Sprite constructor
        //super(scene, game.config.width + 16, Phaser.Math.Between(128/2, game.config.height - 128/2), 'alien'); 
        super(scene, game.config.width + 20, Phaser.Math.Between(12, game.config.height, 12), 'alien'); 

        this.parentScene = scene;               // maintain scene context

        // set up physics sprite
        this.parentScene.add.existing(this);    // add to existing scene, displayList, updateList
        this.parentScene.physics.add.existing(this);    // add to physics system
        this.setVelocityX(velocity);            // make it go!
        this.setImmovable();                    
        // this.tint = Math.random() * 0xFFFFFF;   // randomize tint
        this.newAlien = true;                 // custom property to control barrier spawning
    }

    update() {
        // add new barrier when existing barrier hits center X
        if(this.newAlien && this.x < game.config.width - spawnPoint) {
            // (recursively) call parent scene method from this context
            this.parentScene.addAlien(this.parent, this.velocity)
            this.newAlien = false
        }

        // destroy paddle if it reaches the left edge of the screen
        if(this.x < -this.width) {
            this.destroy();
        }
    }
}