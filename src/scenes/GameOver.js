class GameOver extends Phaser.Scene {
    constructor() {
      super("gameOver");
    }

    preload() {
        this.load.image('background', './assets/gameOverBg.png');
    
    }
     
    create() {
        // background
        this.gameOverBG = this.add.tileSprite(0, 0, 1280, 720, 'background').setOrigin(0, 0);

        // keys
        this.cursors = this.input.keyboard.createCursorKeys();

        // text box config
        let distortedWriting = {
            fontFamily: 'Scribbles',
            fontSize: '32px',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // text box
        this.gameover = this.add.text(config.width/2, config.height/3, 'GAME OVER', distortedWriting);
        this.restart = this.add.text(config.width/2, config.height/4, 'Press R to Restart', distortedWriting);


    }

    update() {
        // restart/replay the game
        if (this.cursors.r.justDown) {
            this.scene.start('menuScene')
        }

    }
} 