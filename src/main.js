// Eric Gonzalez
// Layers of the Earth
// Approximate time taken: 18 hours

//this is a creative title because your character can go through different layers of the earth to dodge aliens.

/* notes about the game

I didn't have time to finish adding background music or sound effects, so I'm prepared to lose points for that,
however I satisfied all other requirements. I also did not need to put credits for the game because all art and
visual images used are my own.

COMMENT BLOCK ABOUT "CREATIVE TILT"

I am proud of learning how to apply gradients. My game revolves around having three different "layers" or areas
that the player can go between, and at first it looked really off because there was no transition between colors.
I thought it would be cool if I could figure out how to apply gradients in phaser, and you can! I researched it
online and found that it's doable by making shapes where you can adjust the opacity of the gradient, as well as
the colors of the corners of the shape. This took a long time to learn, but it was fun.

I tried something new with the endless runner form, it has a couple of interesting mechanics that aren't just
dodging. First, I have three separate layers that the player can go between. You have to use the arrow keys to travel
between the layers when you are close enough, as described in the instructions. This is unique because if you only use
the up and down arrow keys, you are restricted to just one layer! However, what makes this really unique is that
the game discourages you from travelling between layers too much, because each time you move to a different layer,
your character gets moved forward a little, making it harder to dodge the aliens as time goes on.

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