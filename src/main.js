// Put on Your Pretty Face

let config = {
    type: Phaser.AUTO,
    width: 1280,          // game resolution rn is 720p
    height: 720,
    scene: [Menu, Filter, Comment, Cutscene, Eyes, Maze, Defend, Broken, GameOver, Credits], // the scenes we will be using

    object_delay: 100,
    autoCenter: true,
    render:{pixelArt: true},

    // phaser arcade physic engine
    physics: {
        default: "arcade",
        arcade: {
            debug: false // toggle if collision hit box are visible
        }
    }
}


let game = new Phaser.Game(config);
let health;
let phaseCount = 1;
let narrCount = 0;
let sceneCount = 1;
var music;
var scary_music;
var phase5_music;
var deadMusic;

// set border
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// keys we will be using
let keyS, keyRIGHT, keyLEFT, keyUP, keyDOWN, keyR, keyM;
