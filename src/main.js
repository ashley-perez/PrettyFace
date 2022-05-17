// Put on Your Pretty Face

let config = {
    type: Phaser.AUTO,
    width: 1280,          // game resolution rn is 720p
    height: 720,
    scene: [Menu, Filter, Comment, Cutscene, Eyes, Maze, Restaurant], // the scenes we will be using

    object_delay: 100,
    autoCenter: true,
    render:{pixelArt: true},

    // phaser arcade physic engine
    physics: {
        default: "arcade",
        arcade: {
            debug: true // toggle if collision hit box are visible
        }
    }
}


let game = new Phaser.Game(config);
let gamePhase;
let health;

// set border
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// keys we will be using
let keyS, keyRIGHT, keyLEFT, keyUP, keyDOWN;
