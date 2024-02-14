// Eric Gonzalez
// Layers of the Earth
// Approximate time taken: 4 hours

'use strict'

let config = {
    type: Phaser.AUTO,
    width: 960, //used to be 640
    height: 720, //used to be 480
    render: {
        pixelArt: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config)

// set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3

// reserve keyboard bindings
let keyDOWN, keyUP, cursors

// let { height, width } = game.config