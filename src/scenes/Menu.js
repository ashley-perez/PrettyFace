class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        //this.load.spritesheet('button', './assets/playButton.png');
        this.load.image('mouse', './assets/mouse.png');
        this.load.image('play1', './assets/play1.png');
        this.load.image('play2', './assets/play2.png');
    }

    create() {
        // more stuff
        let menuConfig = {
            fontFamily: 'Horror',
            fontSize: '80px',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        let keyConfig = {
            fontFamily: 'Horror',
            fontSize: '35px',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.add.text(game.config.width/2, game.config.height/2, 'Put on Your Pretty Face', menuConfig).setOrigin(0.5, 2.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Press S to Start', keyConfig).setOrigin(0.5,0.7);
        
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyS)) {
            this.scene.start("filterGame");
        }
    }
}
