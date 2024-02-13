// Eric Gonzalez
// Layers of the Earth
// Approximate time taken: since 8pm

'use strict'

let config = {
    type: Phaser.AUTO,
    width: 960, //used to be 640
    height: 720, //used to be 480
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config)

// set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3

// reserve keyboard bindings
let keyFIRE, keyRESET, keyDOWN, keyUP