// Eric Gonzalez
// Layers of the Earth
// Approximate time taken: 18 hours

//this is a creative title because your character can go through different layers of the earth to dodge aliens.

/* notes about the game

I didn't have time to finish adding background music or sound effects, so I'm prepared to lose points for that,
however I satisfied all other requirements. I also did not need to put credits for the game because all art and
visual images used are my own.

COMMENT BLOCK ABOUT "CREATIVE TILT"




*/

'use strict'

let config = {
    parent: 'myGame',
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

// reserve keyboard bindings
let keyDOWN, keyUP, keyRESET, keyMENU, cursors

let stopUp = false
let stopDown = false

// height and width values
let centerX = game.config.width/2;
let centerY = game.config.height/2;
let w = game.config.width;
let h = game.config.height;

// reserve variables
let spawnPoint
let level

let highScore = 0
let PLAYER_VELOCITY = 400