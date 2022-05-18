class Comment extends Phaser.Scene {

    constructor() {
        super("commentGame")
    }

    preload() {
        this.load.image('comments', './assets/comments1.png');

        this.load.image('background', './assets/testBackGround.png');
        this.load.image('reply1', './assets/replyComment1.png');

        // this.load.image('replyButton', './assets/replyButton.png');

        this.load.image('one', './assets/reply1.png');
        this.load.image('two', './assets/reply2.png');
        this.load.image('three', './assets/reply3.png');
        this.load.atlas('instruction', './assets/instructComment.png', './assets/instructComment.json');

    }

    create() {
        if(health >=95) {
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

            this.instruction = this.physics.add.sprite(config.width/2, config.height/30, 'instruction', 0).setScale(2);

            this.comments = this.physics.add.sprite(config.width/1.87, config.height/2.56,'comments');
            this.reply = this.physics.add.sprite(config.width/1.94, config.height/1.2, 'reply1');
            // this.replyButton = this.physics.add.sprite(config.width/1.85, config.height-75, 'replyButton').setInteractive();
            // this.replyButton.setScale(2);

            this.choiceOne = this.physics.add.sprite(300, config.height-500, 'one').setInteractive();
            this.choiceTwo = this.physics.add.sprite(300, config.height-400, 'two').setInteractive();
            this.choiceThree = this.physics.add.sprite(300, config.height-300, 'three').setInteractive();

            // click on reply button
            if(this.buttonNum==false) {
            this.choiceOne.on('pointerdown', function(pointer) {
                this.buttonNum = true;
                console.log(this.buttonNum);
                console.log("clicked 1");
            }, this);

            this.choiceTwo.on('pointerdown', function(pointer) {
                this.buttonNum = true;
                console.log(this.buttonNum);
                console.log("clicked 2");
            }, this);

            this.choiceThree.on('pointerdown', function(pointer) {
                this.buttonNum = true;
                console.log(this.buttonNum);
                console.log("clicked 3");
            }, this);
        }
            // this.replyButton.on('pointerdown', function(pointer) {
            //     if (this.buttonNum == true) {
            //         this.complete = true;
            //     }
            //     console.log("clciked");
            // }, this);

            //just a fake timer for now
            this.timer = 0;
            this.timer2 = 0;
        }//end

        else if(health >= 80 && health <=94) {
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

            this.instruction = this.physics.add.sprite(config.width/2, config.height/30, 'instruction', 0).setScale(2);

            this.comments = this.physics.add.sprite(config.width/1.87, config.height/2.56,'comments');
            this.reply = this.physics.add.sprite(config.width/1.94, config.height/1.2, 'reply1');
            // this.replyButton = this.physics.add.sprite(config.width/1.85, config.height-75, 'replyButton').setInteractive();
            // this.replyButton.setScale(2);

            this.choiceOne = this.physics.add.sprite(300, config.height-500, 'one').setInteractive();
            this.choiceTwo = this.physics.add.sprite(300, config.height-400, 'two').setInteractive();
            this.choiceThree = this.physics.add.sprite(300, config.height-300, 'three').setInteractive();

            // click on reply button
            if(this.buttonNum==false) {
            this.choiceOne.on('pointerdown', function(pointer) {
                this.buttonNum = true;
                console.log(this.buttonNum);
                console.log("clicked 1");
            }, this);

            this.choiceTwo.on('pointerdown', function(pointer) {
                this.buttonNum = true;
                console.log(this.buttonNum);
                console.log("clicked 2");
            }, this);

            this.choiceThree.on('pointerdown', function(pointer) {
                this.buttonNum = true;
                console.log(this.buttonNum);
                console.log("clicked 3");
            }, this);
        }
            // this.replyButton.on('pointerdown', function(pointer) {
            //     if (this.buttonNum == true) {
            //         this.complete = true;
            //     }
            //     console.log("clciked");
            // }, this);

            //just a fake timer for now
            this.timer = 0;
            this.timer2 = 0;
    }//end

    }

    // getting data from old scene
    init(data) {
        this.heart = data.heart;
        this.dog = data.dog;
    }


    update() {
        if(health >= 95) {
            this.timer2 += 0.01;
            this.instruction.anims.play('idle', true);
            if(this.timer2 >=2) {
            this.instruction.alpha=0;
            }
            // console.log('health 95+');
            if(this.buttonNum == true) {
                this.timer+= 0.01;
                this.choiceOne.alpha=0;
                this.choiceTwo.alpha=0;
                this.choiceThree.alpha=0;
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
            this.timer2 += 0.01;
            this.instruction.anims.play('idle', true);
            if(this.timer2 >=2) {
            this.instruction.alpha=0;
            }
            // console.log("comment 80+");
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
