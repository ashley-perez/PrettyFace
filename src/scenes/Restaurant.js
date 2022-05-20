class Restaurant extends Phaser.Scene {
    constructor() {
        super("restaurantGame")
    }

    preload(){
        this.load.image('server', './assets/servers.png');
        this.load.image('table2', './assets/table2.png');
        this.load.image('table3', './assets/table3.png');
        this.load.image('table1', './assets/table1.png');
        this.load.image('plant', './assets/plant.png');
        this.load.image('chef', './assets/chef.png');
        this.load.atlas('walk_atlas', './assets/playerRes.png', './assets/linkmap2.json');
    }

    create(){
        this.add.rectangle(game.config.width/2, game.config.width/2, 1000, 1050, 0xc05780);
        this.add.rectangle(100, 650, 200, 80, 0xc05780);

        this.sprite1 = this.physics.add.sprite(300,450,'server').setScale(0.9);
        this.sprite2 = this.physics.add.sprite(600,210,'table2').setScale(1);
        this.sprite3 = this.physics.add.sprite(1000,590,'table3').setScale(1);
        this.sprite4 = this.physics.add.sprite(1000,233,'table1').setScale(1.9);
        this.sprite5 = this.physics.add.sprite(290,200,'plant').setScale(0.4);
        this.sprite6 = this.physics.add.sprite(700,450,'chef').setScale(0.9);

        // key inputs
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

        this.player = this.physics.add.sprite(165, 643, 'walk_atlas', 'idle_right').setScale(1.4);
        // player animations
        this.anims.create({
            key: 'idle_left',
            frames: this.anims.generateFrameNames('walk_atlas', {
                prefix: 'idle_left_',
                start: 1,
                end: 1,
                suffix: '',
                zeroPad: 1
            }),
            frameRate: 1,
        });

        this.anims.create({
            key: 'idle_right',
            frames: this.anims.generateFrameNames('walk_atlas', {
                prefix: 'idle_right_',
                start: 1,
                end: 1,
                suffix: '',
                zeroPad: 1
            }),
            frameRate: 1,
        });

            this.complete = true;
            this.timer = 0;

    }

    update() {
        // switch scene to eyes
        if(this.complete == true) {
            this.timer += 0.01;
        }
        if (this.timer >= 8) {
            this.scene.start("filterGame");//eyesgame
            gamePhase = 4;
        }
        /*
        if (keyRIGHT.isDown) {
            this.player.x += this.charMoveSpeed;
            this.player.anims.play('idle_right', true);
        }
        else if (keyLEFT.isDown) {
            this.player.x -= this.charMoveSpeed;
            this.player.anims.play('idle_left', true);
        }*/
    }

}