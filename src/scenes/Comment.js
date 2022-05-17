class Comment extends Phaser.Scene {

    constructor() {
        super("commentGame")
    }

    preload() {
        this.load.image('comments', './assets/comments1.png');

        this.load.image('background', './assets/testBackGround.png');
        this.load.image('reply1', './assets/replyComment1.png');

        this.load.image('replyButton', './assets/replyButton.png');

        this.load.image('one', './assets/one.png');
        this.load.image('two', './assets/two.png');
        this.load.image('three', './assets/three.png');
    }

    create() {
        if(health >=95) {
            // mouse stuff
            this.input.setDefaultCursor('url(./assets/testFingerPointer.png), pointer');

            this.normbackground = this.add.tileSprite
            (
                0,
                0,
                1280,
                720,
                "background"
            ).setOrigin(0, 0);


            this.complete = false;
            this.buttonNum = false;

            this.instructions = this.add.text(100,100, 'choose a reply', {color: '#000000'});

            this.comments = this.physics.add.sprite(config.width/1.87, config.height-450,'comments');
            this.reply = this.physics.add.sprite(config.width/1.94, config.height-195, 'reply1');
            this.replyButton = this.physics.add.sprite(config.width/1.85, config.height-75, 'replyButton').setInteractive();
            this.replyButton.setScale(2);

            this.choiceOne = this.physics.add.sprite(300, config.height-500, 'one').setInteractive();
            this.choiceTwo = this.physics.add.sprite(300, config.height-400, 'two').setInteractive();
            this.choiceThree = this.physics.add.sprite(300, config.height-300, 'three').setInteractive();

            // click on reply button
            this.choiceOne.on('pointerdown', function(pointer) {
                this.buttonNum = true;
                console.log("clciked");
            }, this);

            this.choiceTwo.on('pointerdown', function(pointer) {
                this.buttonNum = true;
                console.log("clciked");
            }, this);

            this.choiceThree.on('pointerdown', function(pointer) {
                this.buttonNum = true;
                console.log("clciked");
            }, this);

            this.replyButton.on('pointerdown', function(pointer) {
                if (this.buttonNum == true) {
                    this.complete = true;
                }
                console.log("clciked");
            }, this);

            //just a fake timer for now
            this.timer = 0;

        }//end

        else if(health >= 80 && health <=94) {
            // mouse stuff
            this.input.setDefaultCursor('url(./assets/testFingerPointer.png), pointer');

            this.normbackground = this.add.tileSprite
            (
                0,
                0,
                1280,
                720,
                "background"
            ).setOrigin(0, 0);

            this.instructions = this.add.text(100,100, 'choose a reply', {color: '#000000'});

            this.complete = false;
            this.buttonNum = false;

            this.comments = this.physics.add.sprite(config.width/1.87, config.height-450,'comments');
            this.reply = this.physics.add.sprite(config.width/1.94, config.height-195, 'reply1');
            this.replyButton = this.physics.add.sprite(config.width/1.85, config.height-75, 'replyButton').setInteractive();
            this.replyButton.setScale(2);

            this.choiceOne = this.physics.add.sprite(300, config.height-500, 'one').setInteractive();
            this.choiceTwo = this.physics.add.sprite(300, config.height-400, 'two').setInteractive();
            this.choiceThree = this.physics.add.sprite(300, config.height-300, 'three').setInteractive();

            // click on reply button
            this.choiceOne.on('pointerdown', function(pointer) {
                this.buttonNum = true;
                console.log("choice one");
            }, this);

            this.choiceTwo.on('pointerdown', function(pointer) {
                this.buttonNum = true;
                console.log("chioce two");
            }, this);

            this.choiceThree.on('pointerdown', function(pointer) {
                this.buttonNum = true;
                console.log("choice three");
            }, this);

            this.replyButton.on('pointerdown', function(pointer) {
                if (this.buttonNum == true) {
                    this.complete = true;
                }
                console.log("reply");
            }, this);

            //just a fake timer for now
            this.timer = 0;

        }//end

    }

    // getting data from old scene
    init(data) {
        this.heart = data.heart;
        this.dog = data.dog;
    }


    update() {
        if(health >= 95) {
            console.log('health 95+');
            if(this.complete == true) {
                this.timer+= 0.01;
                //console.log(this.time);
            }

            if (this.timer >= 3) {
                if(Math.floor(Math.random() * 2) == 0) {
                    console.log("eyes");
                    this.scene.start("eyesGame");
                }
                else if (Math.floor(Math.random() * 2) == 1) {
                    console.log("maze");
                    this.scene.start("mazeGame");
                }
            }

        }
        else if(health >=80 && health <=94 ) {
            console.log("comment 80+");
            if(this.complete == true) {
                this.timer+= 0.01;
                //console.log(this.time);
            }

            if (this.timer >= 3) {
                if(Math.floor(Math.random() * 2) == 0) {
                    console.log("eyes");
                    this.scene.start("eyesGame");
                }
                else if (Math.floor(Math.random() * 2) == 1) {
                    console.log("maze");
                    this.scene.start("mazeGame");
                }
            }
        }
    }

    
    }
