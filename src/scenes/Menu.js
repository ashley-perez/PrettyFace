class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        //this.load.spritesheet('button', './assets/playButton.png');
        //this.load.image('mouse', './assets/mouse.png');
        this.load.audio('bgMusic', './assets/bg_music2.mp3');
        this.load.audio('scary_bgMusic', './assets/bg_music2(darker).mp3');
        this.load.audio('phase5_bgMusic', './assets/bg_music3.mp3');
        this.load.audio('start', './assets/kiss.wav');
        this.load.image('bg', './assets/bg_menu.png');
    }

    create() {
        phaseCount = 1;
        music = this.sound.add('bgMusic', {volume: 0.8});  // add music background
        scary_music = this.sound.add('scary_bgMusic', {volume: 0});  // add scary music background
        phase5_music = this.sound.add('phase5_bgMusic', {volume: 0});  // add scary music background
        health = 100;

        let title1Config = {
            fontFamily: 'Normal',
            fontSize: '70px',
            color: '#ba1141',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        let title2Config = {
            fontFamily: 'Normal',
            fontSize: '85px',
            color: '#ba1141',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        let startConfig = {
            fontFamily: 'Normal',
            fontSize: '43px',
            color: '#ff99b9',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        let smallest = {
            fontFamily: 'Normal',
            fontSize: '30px',
            color: '#ff99b9',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.add.image(0,0, "bg").setOrigin(0).setDepth(0);
        this.add.text(game.config.width/2, (game.config.height/2)-20, 'Put on Your', title1Config).setOrigin(0.5, 2.2);
        this.add.text(game.config.width/2, (game.config.height/2)+30, 'Pretty Face', title2Config).setOrigin(0.5, -0.49);
        this.add.rectangle(644, 649, 600, 105, 0x5c4ae4);
        this.add.text(game.config.width/2, (game.config.height/2)-70, 'Press S to Start', startConfig).setOrigin(0.5,-5.4);
        this.add.text(game.config.width/2, (game.config.height/2)+48, "TW: Body Dysmorphia, Mature Language," , smallest).setOrigin(0.5,-5.4);
        this.add.text(game.config.width/2, (game.config.height/2)+77,"Some Blood, Flashing Images", smallest).setOrigin(0.5,-5.4);

        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyS)) {
            // phaseCount = 4;
            this.sound.play('start');

            music.setLoop(true);
            music.play();
            scary_music.setLoop(true);
            scary_music.play();
            phase5_music.setLoop(true);
            phase5_music.play();

            this.scene.start("filterGame");
            //a(phaseCount);
            // this.scene.start("commentGame");
            // this.scene.start("mazeGame");
            // this.scene.start("blockingGame");
            // this.scene.start("eyesGame");
            // this.scene.start("restaurantGame");
            // this.scene.start('narrOne');
            // this.scene.start("endingScene");
            // this.scene.start('gameOver');
            // this.scene.start('credits');
        }
    }
}
