// Put on Your Pretty Face

let config = {
    type: Phaser.AUTO,
    width: 1280,          // game resolution rn is 720p
    height: 720,
<<<<<<< HEAD
    scene: [Menu, Filter, Comment, Cutscene, Eyes, Restaurant], // the scenes we will be using
=======
    scene: [Menu, Filter, Comment, Cutscene, Eyes, Maze], // the scenes we will be using
>>>>>>> e141434bc720803a5df257988d8d6ecfc2e3efe3
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

// set border
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// keys we will be using
let keyS, keyRIGHT, keyLEFT, keyUP, keyDOWN;
