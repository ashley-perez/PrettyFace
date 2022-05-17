class Comment extends Phaser.Scene {

    constructor() {
        super("commentGame")
    }

    preload() {
        this.load.image('comments', './assets/comments1.png');

        this.load.image('background', './assets/testBackGround.png');
        this.load.image('reply1', './assets/replyComment1.png');

        this.load.image('replyButton', './assets/replyButton.png');

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

            this.comments = this.physics.add.sprite(config.width/1.87, config.height-450,'comments');
            this.reply = this.physics.add.sprite(config.width/1.94, config.height-195, 'reply1');
            this.replyButton = this.physics.add.sprite(config.width/1.85, config.height-75, 'replyButton').setInteractive();
            this.replyButton.setScale(2);

            // click on reply button
            this.replyButton.on('pointerdown', function(pointer) {
                this.complete = true;
                console.log("clciked");
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

            // if (this.heart == true) {
            //     this.add.text(game.config.width/2, game.config.height/2, 'the hearts are so cute',  {color: '#000000'});
            // }
            // else if (this.dog == true) {
            //     this.add.text(game.config.width/2.5, game.config.height/2, 'the dog filter is not slayful',  {color: '#000000'});
            // }

            if(this.complete == true) {
                this.timer+= 0.01;
                //console.log(this.time);
            }

            if (this.timer >= 5.5) {
                if(Math.floor(Math.random() * 2) == 0) {
                    console.log("eyes");
                    this.scene.start("eyesGame");
                }
                else if (Math.floor(Math.random() * 2) == 1) {
                    console.log("maze");
                    this.scene.start("mazeGame");
                }
            }
        }//end gamePhase 1
        }

    
    }
