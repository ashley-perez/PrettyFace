class GameOver extends Phaser.Scene {
    constructor() {
      super("gameOver");
    }

    preload() {
        this.load.image('background', './assets/gameOverBg.png');
        this.load.audio('gameover', './assets/gameover.mp3');

    }

    create() {
        deadMusic = this.sound.add('gameover', {volume: 1});  // add music background
        deadMusic.play();
        deadMusic.setLoop(true);
        music.stop(); // add music background
        scary_music.stop();
        // background
        this.gameOverBG = this.add.tileSprite(0, 0, 1280, 720, 'background').setOrigin(0, 0);

        // keys
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

        // text box config
        let bigDistorted = {
            fontFamily: 'Scribbles',
            fontSize: '120px',
            color: '#FFFFFF',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        let smallDistorted = {
            fontFamily: 'Scribbles',
            fontSize: '60px',
            color: '#FFFFFF',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // text box
        this.gameover = this.add.text(325, config.height/4, 'GAME OVER', bigDistorted);
        this.restart = this.add.text(365, config.height/2, 'Press R to Restart', smallDistorted);


    }

    update() {
        // restart/replay the game
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            // get all music to stop so it doesn't keep playing when you restart
            music.stop();
            scary_music.stop();
            this.scene.start('menuScene')
        }

    }
} 