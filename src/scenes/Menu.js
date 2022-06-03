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
            fontSize: '45px',
            color: '#ff99b9',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.add.image(0,0, "bg").setOrigin(0).setDepth(0);
        this.add.text(game.config.width/2, (game.config.height/2)-20, 'Put on Your', title1Config).setOrigin(0.5, 2.1);
        this.add.text(game.config.width/2, (game.config.height/2)+30, 'Pretty Face', title2Config).setOrigin(0.5, -0.45);
        this.add.rectangle(644, 649, 395, 85, 0x5c4ae4);
        this.add.text(game.config.width/2, (game.config.height/2)-35, 'Press S to Start', startConfig).setOrigin(0.5,-5.2);

        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyS)) {
            // phaseCount = 5;
            this.sound.play('start');

            music.setLoop(true);
            music.play();
            scary_music.setLoop(true);
            scary_music.play();
            phase5_music.setLoop(true);
            phase5_music.play();

            this.scene.start("filterGame");
            console.log(phaseCount);
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
