// Eric Gonzalez
// Layers of the Earth
// Approximate time taken: 6 hours

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

let stopUp = false
let stopDown = false

// let { height, width } = game.config

let centerX = game.config.width/2;
let centerY = game.config.height/2;
let w = game.config.width;
let h = game.config.height;
const textSpacer = 64;

const paddleWidth = 16;
const paddleHeight = 128;
const paddleVelocity = 150;
let level;
let highScore;
let newHighScore = false;