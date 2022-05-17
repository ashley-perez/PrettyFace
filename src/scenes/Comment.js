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
        if(gamePhase==1) {
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
            }, this);

            //just a fake timer for now
            this.timer = 0;

        }//end Gamephase1

        else if(gamePhase == 2) {
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
                //just a fake timer for now
            this.timer = 0;

            this.complete = true;

            this.add.text(game.config.width/2, game.config.height/2, 'COMMENTS PHASE 2',  {color: '#000000'});
        }

        else if(gamePhase == 3) {
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

                //just a fake timer for now
            this.timer = 0;
            
            this.complete = true;

            this.add.text(game.config.width/2, game.config.height/2, 'COMMENTS PHASE 3',  {color: '#000000'});
        }
    }

    // getting data from old scene
    init(data) {
        this.heart = data.heart;
        this.dog = data.dog;
    }


    update() {
        if(gamePhase==1) {

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
                this.scene.start("narrOne");
            }
        }//end gamePhase 1

        else if (gamePhase == 2) {
            console.log('COMMENT PHASE 2');
            if(this.complete == true) {
                this.timer+= 0.01;
            }
            if (this.timer >= 8) {
                this.scene.start("eyesGame");
            }
        }

        else if (gamePhase == 3) {
            console.log('COMMENT PHASE 2');
            if(this.complete == true) {
                this.timer+= 0.01;
            }
            if (this.timer >= 8) {
                this.scene.start("eyesGame");
            }
        }
    
    }

}