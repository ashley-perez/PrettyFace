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
        this.load.image('normalPlayer', './assets/noFilterFace1.png');
        this.load.image('semiNormal', './assets/noFilterFace2.png');
        this.load.image('messyPlayer', './assets/noFilterFace3.png');

        // all the filters
        this.load.image('normalDog', './assets/DogFilterFace1.png');
        this.load.image('semiNormalDog', './assets/DogFilterFace2.png');
        this.load.image('messyDog', './assets/DogFilterFace3.png');

        this.load.image('normalFlower', './assets/FlowerFilterFace1.png');
        this.load.image('semiNormalFlower', './assets/FlowerFilterFace2.png');
        this.load.image('messyFlower', './assets/FlowerFilterFace3.png');

        this.load.image('normalRainbow', './assets/RainbowFilterFace1.png');
        this.load.image('semiNormalRainbow', './assets/RainbowFilterFace2.png');
        this.load.image('messyRainbow', './assets/RainbowFilterFace3.png');

        this.load.image('normalHeart', './assets/HeartFilterFace1.png');
        this.load.image('semiNormalHeart', './assets/HeartFilterFace2.png');
        this.load.image('messyHeart', './assets/HeartFilterFace3.png');


        // background and instructions
        this.load.image('bg1', './assets/filterbg1.png');
        this.load.image('bg2', './assets/filterbg2.png');
        this.load.image('bg3', './assets/filterbg3.png');
        this.load.image('bg4', './assets/filterbg4.png');
        this.load.image('bg5', './assets/filterbg5.png');
        this.load.image('post', './assets/postButton.png');
        this.load.atlas('instruction', './assets/instructFilter.png', './assets/instructFilter.json');
    }

    create() {
        this.index = 0;

        this.input.setDefaultCursor("url(./assets/testFingerPointer.png), pointer");

        this.bgPhases = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5'];
        this.playerPhases = ['normalPlayer', 'semiNormal', 'messyPlayer'];
        this.dogPhases = ['normalDog', 'semiNormalDog', 'messyDog'];
        this.flowerPhases = ['normalFlower', 'semiNormalFlower', 'messyFlower'];
        this.rainbowPhases = ['normalRainbow', 'semiNormalRainbow', 'messyRainbow'];
        this.heartPhases = ['normalHeart', 'semiNormalHeart', 'messyHeart'];

        this.complete = false;
        this.dogFilter = false;
        this.heartFilter = false;
        this.rainbowFilter = false;
        this.flowerFilter = false;

        // health: 100 to 87, 86 to 65, 64 to 35, 34 to 10, 9 to 1
        if (health >= 87) {
            this.index = 0;
            this.filterbackground = this.add.tileSprite(0, 0, 1280, 720, "bg1").setOrigin(0, 0);
        }
        else if (health <= 86 && health >= 65) {
            this.index = 1;
            this.filterbackground = this.add.tileSprite(0, 0, 1280, 720, "bg2").setOrigin(0, 0);
        }
        else if (health <= 64 && health >= 35) {
            this.index = 2;
            this.filterbackground = this.add.tileSprite(0, 0, 1280, 720, "bg3").setOrigin(0, 0);
        }
        else if (health <= 34 && health >= 10) {
            this.index = 3;
            this.filterbackground = this.add.tileSprite(0, 0, 1280, 720, "bg4").setOrigin(0, 0);
        }
        else {
            this.index = 4;
            this.filterbackground = this.add.tileSprite(0, 0, 1280, 720, "bg5").setOrigin(0, 0);
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
        this.background = this.add.tileSprite(0, 0, 1280, 720, this.bgPhases[this.index]).setOrigin(0, 0);

        this.player = this.physics.add.sprite(config.width/2.99, config.height/1.78, this.playerPhases[this.index], 0);

        this.instruction = this.physics.add.sprite(config.width/2, config.height/30, 'instruction', 0).setScale(2);

        this.postButton = this.physics.add.sprite(config.width/3, (config.height/2)+228, 'post',0).setInteractive();

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
        }, this);


        // click on post button
        this.postButton.on('pointerdown', function(pointer) {
            // can only proceed after using a filter
            if (this.dogFilter == true || this.heartFilter == true || this.rainbowFilter == true || this.flowerFilter == true) {
                this.complete = true;
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
        }
        if (this.timer >= 3) {
            // pass data to new scene
            // will affect the comments
            this.scene.start('commentGame', {dog: this.dogFilter, heart: this.heartFilter, rainbow: this.rainbowFilter, flower: this.flowerFilter});
        }

    }

}