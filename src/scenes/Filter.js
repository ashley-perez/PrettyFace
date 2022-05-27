class Filter extends Phaser.Scene {

    constructor() {
        super("filterGame")
    }

    preload() {
        // filter selection icons
        this.load.image('heartFilter', './assets/HeartFilterSelect.png');
        this.load.image('dogFilter', './assets/DogFilterSelect.png');
        this.load.image('rainbowFilter', './assets/RainbowFilterSelect.png');
        this.load.image('flowerFilter', './assets/FlowerFilterSelect.png');

        // player
        this.load.image('player1', './assets/noFilterFace1.png');
        this.load.image('player2', './assets/noFilterFace2.png');
        this.load.image('player3', './assets/noFilterFace3.png');
        this.load.image('player4', './assets/noFilterFace4.png');
        this.load.image('player5', './assets/noFilterFace5.png');

        // all the filters
        this.load.image('dog1', './assets/DogFilterFace1.png');
        this.load.image('dog2', './assets/DogFilterFace2.png');
        this.load.image('dog3', './assets/DogFilterFace3.png');
        this.load.image('dog4', './assets/DogFilterFace4.png');
        this.load.image('dog5', './assets/DogFilterFace5.png');

        this.load.image('flower1', './assets/FlowerFilterFace1.png');
        this.load.image('flower2', './assets/FlowerFilterFace2.png');
        this.load.image('flower3', './assets/FlowerFilterFace3.png');
        this.load.image('flower4', './assets/FlowerFilterFace4.png');
        this.load.image('flower5', './assets/FlowerFilterFace5.png');

        this.load.image('rainbow1', './assets/RainbowFilterFace1.png');
        this.load.image('rainbow2', './assets/RainbowFilterFace2.png');
        this.load.image('rainbow3', './assets/RainbowFilterFace3.png');
        this.load.image('rainbow4', './assets/RainbowFilterFace4.png');
        this.load.image('rainbow5', './assets/RainbowFilterFace5.png');

        this.load.image('heart1', './assets/HeartFilterFace1.png');
        this.load.image('heart2', './assets/HeartFilterFace2.png');
        this.load.image('heart3', './assets/HeartFilterFace3.png');
        this.load.image('heart4', './assets/HeartFilterFace4.png');
        this.load.image('heart5', './assets/HeartFilterFace5.png');


        // background and instructions
        this.load.image('bg1', './assets/filterbg1.png');
        this.load.image('bg2', './assets/filterbg2.png');
        this.load.image('bg3', './assets/filterbg3.png');
        this.load.image('bg4', './assets/filterbg4.png');
        this.load.image('bg5', './assets/filterbg5.png');
        this.load.image('post', './assets/postButton.png');
        this.load.atlas('instruction', './assets/instructFilter.png', './assets/instructFilter.json');

        //fake score
        this.load.atlas('score_+000','./assets/score_+000.png','./assets/score_+000.json');
        this.load.atlas('score_+100','./assets/score_+100.png','./assets/score_+100.json');
        this.load.atlas('score_+200','./assets/score_+200.png','./assets/score_+200.json');
        this.load.atlas('score_+300','./assets/score_+300.png','./assets/score_+300.json');
        this.load.audio('score_sound', './assets/score_sound.mp3');
        this.load.audio('yay_sound', './assets/yay_sound.mp3');

    }

    create() {
        this.index = 0;

        this.input.setDefaultCursor("url(./assets/testFingerPointer.png), pointer");

        this.bgPhases = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5'];
        this.playerPhases = ['player1', 'player2', 'player3', 'player4', 'player5'];
        this.dogPhases = ['dog1', 'dog2', 'dog3', 'dog4', 'dog5'];
        this.flowerPhases = ['flower1', 'flower2', 'flower3', 'flower4', 'flower5'];
        this.rainbowPhases = ['rainbow1', 'rainbow2', 'rainbow3', 'rainbow4', 'rainbow5'];
        this.heartPhases = ['heart1', 'heart2', 'heart3', 'heart4', 'heart5'];

        this.complete = false;
        this.dogFilter = false;
        this.heartFilter = false;
        this.rainbowFilter = false;
        this.flowerFilter = false;

        // health: 100 to 87, 86 to 65, 64 to 35, 34 to 10, 9 to 1
        if (health >= 87) {
            this.index = 0;
        }
        else if (health <= 86 && health >= 65) {
            this.index = 1;
        }
        else if (health <= 64 && health >= 35) {
            this.index = 2;
        }
        else if (health <= 34 && health >= 10) {
            this.index = 3;
        }
        else {
            this.index = 4;
        }

        // instruction animation
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNames('instruction', {
                prefix: 'frame_',
                start: 1,
                end: 5,
                suffix: '',
                zeroPad: 2
            }),
            frameRate: 20,
            repeat: -1,
        });
        //score animation
        {this.anims.create({
            key: 'score_0',
            frames: this.anims.generateFrameNames('score_+000', {
                prefix: 'frame_',
                start: 1,
                end: 5,
                suffix: '',
                zeroPad: 2
            }),
            frameRate: 20,
            repeat: -1,
        });
        this.anims.create({
            key: 'score_1',
            frames: this.anims.generateFrameNames('score_+100', {
                prefix: 'frame_',
                start: 1,
                end: 5,
                suffix: '',
                zeroPad: 2
            }),
            frameRate: 20,
            repeat: -1,
        });
        this.anims.create({
            key: 'score_2',
            frames: this.anims.generateFrameNames('score_+200', {
                prefix: 'frame_',
                start: 1,
                end: 5,
                suffix: '',
                zeroPad: 2
            }),
            frameRate: 20,
            repeat: -1,
        });
        this.anims.create({
            key: 'score_3',
            frames: this.anims.generateFrameNames('score_+300', {
                prefix: 'frame_',
                start: 1,
                end: 5,
                suffix: '',
                zeroPad: 2
            }),
            frameRate: 20,
            repeat: -1,
        });
    }
        this.background = this.add.tileSprite(0, 0, 1280, 720, this.bgPhases[this.index]).setOrigin(0, 0);

        this.player = this.physics.add.sprite(config.width/2.99, config.height/1.78, this.playerPhases[this.index], 0);

        this.instruction = this.physics.add.sprite(config.width/2, config.height/30, 'instruction', 0).setScale(2);

        this.postButton = this.physics.add.sprite(config.width/3, (config.height/2)+228, 'post',0).setInteractive();

        this.score1 = this.physics.add.sprite(config.width/6, config.height/3, 'score_+000', 0);
        this.score2 = this.physics.add.sprite(config.width/2, config.height/2.4, 'score_+000', 0);
        this.score3 = this.physics.add.sprite(config.width/4, config.height/1.5, 'score_+000', 0);

        this.score1.alpha=0;this.score2.alpha=0;this.score3.alpha=0;

        var scoreSound = this.sound.add('score_sound', {volume: 0.9});  // add music background
        var yaySound = this.sound.add('yay_sound', {volume: 0.9});  // add music background

        // filters that are draggable
        this.heart = this.physics.add.sprite(config.width/1.2, config.height/4.8, 'heartFilter', 0).setInteractive();
        this.dog = this.physics.add.sprite(config.width/1.2, (config.height/4.8)+150, 'dogFilter', 0).setInteractive();
        this.rainbow = this.physics.add.sprite(config.width/1.2, (config.height/4.8)+450, 'rainbowFilter', 0).setInteractive();
        this.flower = this.physics.add.sprite(config.width/1.2, (config.height/4.8)+300, 'flowerFilter', 0).setInteractive();

        // let the filters be draggable
        this.input.setDraggable(this.heart);
        this.input.setDraggable(this.dog);
        this.input.setDraggable(this.rainbow);
        this.input.setDraggable(this.flower);

        // if filter is selected booleans
        this.dogSelected = false;
        this.heartSelected = false;
        this.rainbowSelected = false;
        this.flowerSelected = false;

        // updates the location of object to the pointer
        this.input.on('drag', function(pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        // player chose a filter
        this.complete = false;

        // timers
        this.timer = 0;
        this.instructionTimer = 0;

        // collision detection
        this.physics.add.overlap(this.player, this.heart, null, function() {
            this.player.setTexture(this.heartPhases[this.index]);
            this.player.x = config.width/2.99;
            this.player.y = config.height/1.78;
            this.heart.destroy();
            this.heartFilter = true;
            this.dogFilter = false;
            this.rainbowFilter = false;
            this.flowerFilter = false;
            console.log('heart');
            // this.score1.setTexture("score_+200");
            this.score1.anims.play('score_2');
            // this.score2.setTexture("score_+300");
            this.score2.anims.play('score_3');
            // this.score3.setTexture("score_+200");
            this.score3.anims.play('score_2');
        }, this);

        this.physics.add.overlap(this.player, this.dog, null, function() {
            this.player.setTexture(this.dogPhases[this.index]);
            this.player.x = config.width/2.99;
            this.player.y = config.height/1.78;
            this.dog.destroy();
            this.dogFilter = true;
            this.heartFilter = false;
            this.rainbowFilter = false;
            this.flowerFilter = false;
            console.log('dog');
            // this.score1.setTexture('score_+100');
            this.score1.anims.play('score_1');
            // this.score2.setTexture('score_+300');
            this.score2.anims.play('score_3');
            // this.score3.setTexture('score_+100');
            this.score3.anims.play('score_1');
        }, this);

        this.physics.add.overlap(this.player, this.rainbow, null, function() {
            this.player.setTexture(this.rainbowPhases[this.index]);
            this.player.x = config.width/2.99;
            this.player.y = config.height/1.78;
            this.rainbow.destroy();
            this.rainbowFilter = true;
            this.dogFilter = false;
            this.heartFilter = false;
            this.flowerFilter = false;
            console.log('rainbow');
            // this.score1.setTexture('score_+100');
            this.score1.anims.play('score_1');
            // this.score2.setTexture('score_+200');
            this.score2.anims.play('score_2');
            // this.score3.setTexture('score_+200');
            this.score3.anims.play('score_2');
        }, this);

        this.physics.add.overlap(this.player, this.flower, null, function() {
            this.player.setTexture(this.flowerPhases[this.index]);
            this.player.x = config.width/2.99;
            this.player.y = config.height/1.78;
            this.flower.destroy();
            this.flowerFilter = true;
            this.rainbowFilter = false;
            this.dogFilter = false;
            this.heartFilter = false;
            console.log('flower');
            // this.score1.setTexture('score_+100');
            this.score1.anims.play('score_1');
            // this.score2.setTexture('score_+300');
            this.score2.anims.play('score_3');
            // this.score3.setTexture('score_+200');
            this.score3.anims.play('score_2');
        }, this);


        // click on post button
        this.postButton.on('pointerdown', function(pointer) {
            // can only proceed after using a filter
            if (this.dogFilter == true || this.heartFilter == true || this.rainbowFilter == true || this.flowerFilter == true) {
                this.complete = true;
                //score NEEDS to account for the filters and change
                this.score1.alpha=1;
                this.score2.alpha=1;
                this.score3.alpha=1;
                scoreSound.play();
                yaySound.play();
            }
        }, this);

    }

    update() {

        this.instructionTimer += 0.01;
        this.instruction.anims.play('idle', true);
        if(this.instructionTimer >=2) {
            this.instruction.alpha=0;
        }

        console.log(health);
        //console.log("filter 95 +");

        if(this.complete == true) {
            this.timer += 0.01;
            this.score1.alpha-=0.005;
            this.score2.alpha-=0.005;
            this.score3.alpha-=0.005;

            this.score1.y-=0.5;
            this.score2.y-=0.5;
            this.score3.y-=0.5;
            

            

        }
        if (this.timer >= 2.5) {
            // pass data to new scene
            // will affect the comments
            this.scene.start('commentGame', {dog: this.dogFilter, heart: this.heartFilter, rainbow: this.rainbowFilter, flower: this.flowerFilter});
        }

    }

}