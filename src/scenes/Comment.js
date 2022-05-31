class Comment extends Phaser.Scene {
  constructor() {
    super("commentGame");
  }

  preload() {
    this.load.audio('notifComment', './assets/comment.wav');
    this.load.audio('reply', './assets/reply.wav');

    this.load.image("comments", "./assets/comments1.png");
    this.load.image("comments2.1", "./assets/comments2(ver1).png");
    this.load.image("comments2.2", "./assets/comments2(ver2).png");
    this.load.image("comments2.2", "./assets/comments2(ver2).png");
    this.load.image("comments3.1", "./assets/comments3(ver1).png");
    this.load.image("comments3.2", "./assets/comments3(ver2).png");
    this.load.image("comments4.1", "./assets/comments4(ver1).png");
    this.load.image("comments4.2", "./assets/comments4(ver2).png");

    this.load.image("bgcomment1", "./assets/commentBg1.png");
    this.load.image("bgcomment2", "./assets/commentBg2.png");
    this.load.image("bgcomment3", "./assets/commentBg3.png");
    this.load.image("bgcomment4", "./assets/commentBg4.png");
    this.load.image("bgcomment5", "./assets/commentBg5.png");
    this.load.image('crack2', './assets/crack2.png');

    this.load.image("reply1", "./assets/replyComment1.png");
    this.load.image("reply1.1(n/b)", "./assets/replyComment1(n).png");
    this.load.image("reply1.2(n/b)", "./assets/replyComment2(n).png");
    this.load.image("reply1.3(n/b)", "./assets/replyComment3(n).png");

    this.load.image("reply2", "./assets/replyComment2.png");
    this.load.image("reply2.1(n/b)", "./assets/replyComment4(n).png");
    this.load.image("reply2.2(n/b)", "./assets/replyComment5(n).png");
    this.load.image("reply2.3(n/b)", "./assets/replyComment6(n).png");

    this.load.image("reply3", "./assets/replyComment3.png");
    this.load.image("reply3.1(n/b)", "./assets/replyComment7(n).png");
    this.load.image("reply3.2(n/b)", "./assets/replyComment8(n).png");
    this.load.image("reply3.3(n/b)", "./assets/replyComment9(n).png");

    this.load.image("reply4", "./assets/replyComment4.png");
    this.load.image("reply4.1(n/b)", "./assets/replyComment10(n).png");
    this.load.image("reply4.2(n/b)", "./assets/replyComment11(n).png");
    this.load.image("reply4.3(n/b)", "./assets/replyComment12(n).png");

    this.load.image("battery1","./assets/Health 100Full Battery.png");
    this.load.image("battery2","./assets/Health 90.png");
    this.load.image("battery3","./assets/Health 70.png");
    this.load.image("battery4","./assets/Health 40.png");
    this.load.image("battery5","./assets/Health 20.png");
    this.load.image("battery6","./assets/Health 5.png");

    // this.load.image('replyButton', './assets/replyButton.png');

    this.load.image("one", "./assets/reply1.png");
    this.load.image("two", "./assets/reply2.png");
    this.load.image("three", "./assets/reply3.png");
    this.load.atlas("commentInstruction", "./assets/instructComment.png","./assets/instructComment.json");
    this.load.atlas('mouseClick', './assets/mouseClick.png','./assets/mouse_click.json');

    //fake score
    this.load.atlas('score_+000','./assets/score_+000.png','./assets/score_+000.json');
    this.load.atlas('score_+100','./assets/score_+100.png','./assets/score_+100.json');
    this.load.atlas('score_+200','./assets/score_+200.png','./assets/score_+200.json');
    this.load.atlas('score_+300','./assets/score_+300.png','./assets/score_+300.json');
    this.load.audio('score_sound', './assets/score_sound.mp3');
    this.load.audio('yay_sound', './assets/yay_sound.mp3');
  }

  create() {
    this.crackScreen = 0;
    this.sound.play('notifComment');
      if(health >=87) {
      this.add.tileSprite(0, 0, 1280, 720, "bgcomment1").setOrigin(0, 0);
    this.battery = this.physics.add.sprite(config.width / 1.5638, config.height / 19.726, "battery1", 0).setDepth(1);
    this.random = Math.floor(Math.random() * 3);
    console.log("random " +this.random);
      }//3 different options of comments for most positive
      else if (health <= 86 && health >= 65) {
        this.add.tileSprite(0, 0, 1280, 720, "bgcomment2").setOrigin(0, 0);
        this.battery = this.physics.add.sprite(config.width / 1.5638, config.height / 19.726, "battery2", 0).setDepth(1);
        this.random = Math.floor(Math.random() * 1);
        console.log("random "+this.random);
        }
        else if (health <= 64 && health >= 35) {
          this.add.tileSprite(0, 0, 1280, 720, "bgcomment2").setOrigin(0, 0);
            this.battery = this.physics.add.sprite(config.width / 1.5638, config.height / 19.726, "battery3", 0).setDepth(1);
            this.random = Math.floor(Math.random() * 1);
            console.log("random "+this.random);
        }
        else if (health <= 34 && health >= 25) {
          this.add.tileSprite(0, 0, 1280, 720, "bgcomment3").setOrigin(0, 0);
            this.battery = this.physics.add.sprite(config.width / 1.5638, config.height / 19.726, "battery4", 0).setDepth(1);
            this.random = Math.floor(Math.random() * 1);
            console.log("random "+this.random);
        }//just because i made an extra battery it supposed to be 34 - 10
        else if (health <= 24 && health >= 10) {
          this.add.tileSprite(0, 0, 1280, 720, "bgcomment4").setOrigin(0, 0);
            this.battery = this.physics.add.sprite(config.width / 1.5638, config.height / 19.726, "battery5", 0).setDepth(1);
            this.random = Math.floor(Math.random() * 1);
            console.log("random "+this.random);
        }//just because i made an extra battery it supposed to be 34 - 10
        else if (health <= 9 && health >= 1) {
          this.crackScreen++;
          this.add.tileSprite(0, 0, 1280, 720, "bgcomment5").setOrigin(0, 0);
            this.battery = this.physics.add.sprite(config.width / 1.5638, config.height / 19.726, "battery6", 0).setDepth(1);
            this.random = Math.floor(Math.random() * 1);
            console.log("random "+this.random);
        }
    
    this.instruction2 = this.physics.add.sprite(config.width/2, config.height / 30, "commentInstruction", 0).setScale(2).setDepth(1);
    this.mouseClick = this.physics.add.sprite(config.width/8, config.height/30, 'mouseClick', 0).setScale(2).setDepth(1);
        this.mouseClick2 = this.physics.add.sprite(config.width/1.15, config.height/30, 'mouseClick', 0).setScale(2).setDepth(1);

        this.anims.create({
          key: "commentInfo",
          frames: this.anims.generateFrameNames("commentInstruction", {
            prefix: "frame_",
            start: 1,
            end: 5,
            suffix: "",
            zeroPad: 2,
          }),
          frameRate: 20,
          repeat: -1,
        });

    // mouse stuff
    this.input.setDefaultCursor("url(./assets/testFingerPointer.png), pointer");

    this.complete = false;
    this.buttonNum = false;

    this.score1 = this.physics.add.sprite(config.width/6, config.height/3, 'score_+000', 0);
    this.score2 = this.physics.add.sprite(config.width/2, config.height/2.4, 'score_+000', 0);
    this.score3 = this.physics.add.sprite(config.width/4, config.height/1.5, 'score_+000', 0);

    this.score1.alpha=0;this.score2.alpha=0;this.score3.alpha=0;

    var scoreSound = this.sound.add('score_sound', {volume: 0.9});  // add music background
    var yaySound = this.sound.add('yay_sound', {volume: 0.9});  // add music background

    this.comments = this.physics.add.sprite(
      config.width / 1.87,
      config.height / 2.56,
      "comments"
    );
    this.reply = this.physics.add.sprite(
      config.width / 1.9,
      config.height / 1.24,
      "reply1"
    );
    // this.replyButton = this.physics.add.sprite(config.width/1.85, config.height-75, 'replyButton').setInteractive();
    // this.replyButton.setScale(2);

    this.choiceOne = this.physics.add
      .sprite(300, config.height - 500, "one")
      .setInteractive();
    this.choiceTwo = this.physics.add
      .sprite(300, config.height - 400, "two")
      .setInteractive();
    this.choiceThree = this.physics.add
      .sprite(300, config.height - 300, "three")
      .setInteractive();

//comment and replies above 87 health
      if(health >=87) {
    // click on reply button
    if (this.buttonNum == false) {
      if (this.random == 0) {
        this.choiceOne.on(
          "pointerdown",
          function (pointer) {
            this.buttonNum = true;
            console.log(this.buttonNum);
            console.log("clicked 1");
            this.reply.setTexture("reply1.1(n/b)");
            this.reply.x = config.width / 1.9;
            this.reply.y = config.height / 1.25;
            health -= 2;
            this.score1.anims.play('score_1');
            // this.score2.setTexture('score_+300');
            this.score2.anims.play('score_3');
            // this.score3.setTexture('score_+100');
            this.score3.anims.play('score_1');
            this.score1.alpha=1;
                this.score2.alpha=1;
                this.score3.alpha=1;
                scoreSound.play();
                yaySound.play();
          },
          this
        );

        this.choiceTwo.on(
          "pointerdown",
          function (pointer) {
            this.buttonNum = true;
            console.log(this.buttonNum);
            console.log("clicked 2");
            this.reply.setTexture("reply1.2(n/b)");
            this.reply.x = config.width / 1.9;
            this.reply.y = config.height / 1.25;
            this.score1.anims.play('score_1');
            // this.score2.setTexture('score_+300');
            this.score2.anims.play('score_3');
            // this.score3.setTexture('score_+100');
            this.score3.anims.play('score_1');
            this.score1.alpha=1;
                this.score2.alpha=1;
                this.score3.alpha=1;
                scoreSound.play();
                yaySound.play();
          },
          this
        );

        this.choiceThree.on(
          "pointerdown",
          function (pointer) {
            this.buttonNum = true;
            console.log(this.buttonNum);
            console.log("clicked 3");
            this.reply.setTexture("reply1.3(n/b)");
            this.reply.x = config.width / 1.9;
            this.reply.y = config.height / 1.25;
            health -= 1;
            this.score1.anims.play('score_1');
            // this.score2.setTexture('score_+300');
            this.score2.anims.play('score_3');
            // this.score3.setTexture('score_+100');
            this.score3.anims.play('score_1');
            this.score1.alpha=1;
                this.score2.alpha=1;
                this.score3.alpha=1;
                scoreSound.play();
                yaySound.play();
          },
          this
        );
      } //comment reply 1
      else if (this.random == 1) {
        this.reply.setTexture("reply2");
        this.reply.x = config.width / 1.9707;
        this.reply.y = config.height / 1.14;

        this.choiceOne.on(
          "pointerdown",
          function (pointer) {
            this.buttonNum = true;
            console.log(this.buttonNum);
            console.log("clicked 1");
            this.reply.setTexture("reply2.1(n/b)");
            this.reply.x = config.width / 1.93;
            this.reply.y = config.height / 1.16;
            this.score1.anims.play('score_1');
            // this.score2.setTexture('score_+300');
            this.score2.anims.play('score_3');
            // this.score3.setTexture('score_+100');
            this.score3.anims.play('score_1');
            this.score1.alpha=1;
                this.score2.alpha=1;
                this.score3.alpha=1;
                scoreSound.play();
                yaySound.play();
          },
          this
        );

        this.choiceTwo.on(
          "pointerdown",
          function (pointer) {
            this.buttonNum = true;
            console.log(this.buttonNum);
            console.log("clicked 2");
            this.reply.setTexture("reply2.2(n/b)");
            this.reply.x = config.width / 1.93;
            this.reply.y = config.height / 1.16;
            health -= 1;
            this.score1.anims.play('score_1');
            // this.score2.setTexture('score_+300');
            this.score2.anims.play('score_3');
            // this.score3.setTexture('score_+100');
            this.score3.anims.play('score_1');
            this.score1.alpha=1;
                this.score2.alpha=1;
                this.score3.alpha=1;
                scoreSound.play();
                yaySound.play();
          },
          this
        );

        this.choiceThree.on(
          "pointerdown",
          function (pointer) {
            this.buttonNum = true;
            console.log(this.buttonNum);
            console.log("clicked 3");
            this.reply.setTexture("reply2.3(n/b)");
            this.reply.x = config.width / 1.93;
            this.reply.y = config.height / 1.16;
            health -= 2;
            this.score1.anims.play('score_1');
            // this.score2.setTexture('score_+300');
            this.score2.anims.play('score_3');
            // this.score3.setTexture('score_+100');
            this.score3.anims.play('score_1');
            this.score1.alpha=1;
                this.score2.alpha=1;
                this.score3.alpha=1;
                scoreSound.play();
                yaySound.play();
          },
          this
        );
      } //comment reply 2
      else if (this.random == 2) {
        this.reply.setTexture("reply3");
        this.reply.x = config.width / 1.9707;
        this.reply.y = config.height / 1.14;
        this.choiceOne.on(
          "pointerdown",
          function (pointer) {
            this.buttonNum = true;
            console.log(this.buttonNum);
            console.log("clicked 1");
            this.reply.setTexture("reply3.1(n/b)");
            this.reply.x = config.width / 1.93;
            this.reply.y = config.height / 1.16;
            health -= 2;
            this.score1.anims.play('score_1');
            // this.score2.setTexture('score_+300');
            this.score2.anims.play('score_3');
            // this.score3.setTexture('score_+100');
            this.score3.anims.play('score_1');
            this.score1.alpha=1;
                this.score2.alpha=1;
                this.score3.alpha=1;
                scoreSound.play();
                yaySound.play();
          },
          this
        );

        this.choiceTwo.on(
          "pointerdown",
          function (pointer) {
            this.buttonNum = true;
            console.log(this.buttonNum);
            console.log("clicked 2");
            this.reply.setTexture("reply3.2(n/b)");
            this.reply.x = config.width / 1.93;
            this.reply.y = config.height / 1.16;
            this.score1.anims.play('score_1');
            // this.score2.setTexture('score_+300');
            this.score2.anims.play('score_3');
            // this.score3.setTexture('score_+100');
            this.score3.anims.play('score_1');
            this.score1.alpha=1;
                this.score2.alpha=1;
                this.score3.alpha=1;
                scoreSound.play();
                yaySound.play();
          },
          this
        );

        this.choiceThree.on(
          "pointerdown",
          function (pointer) {
            this.buttonNum = true;
            console.log(this.buttonNum);
            console.log("clicked 3");
            this.reply.setTexture("reply3.3(n/b)");
            this.reply.x = config.width / 1.93;
            this.reply.y = config.height / 1.16;
            health -= 2;
            this.score1.anims.play('score_1');
            // this.score2.setTexture('score_+300');
            this.score2.anims.play('score_3');
            // this.score3.setTexture('score_+100');
            this.score3.anims.play('score_1');
            this.score1.alpha=1;
                this.score2.alpha=1;
                this.score3.alpha=1;
                scoreSound.play();
                yaySound.play();
          },
          this
        );
      } //comment reply 3
    }

    {
      if (this.random == 0) {
        console.log("comment1");
        this.comments.setTexture("comments");
      } //basic comment
      else if (this.random == 1) {
        console.log("1");
        if (this.dogis == true) {
          console.log("comment2.2");
          this.comments.setTexture("comments2.2");
          this.comments.x = config.width / 1.83;
          this.comments.y = config.height / 2.205;
        } //dog filter
        else {
          console.log("comment2.1");
          this.comments.setTexture("comments2.1");
          this.comments.x = config.width / 1.87;
          this.comments.y = config.height / 2.205;
        } //anything else
      } else if (this.random == 2) {
        console.log("2");
        if (this.floweris == true) {
          console.log("comment3.1");
          this.comments.setTexture("comments3.1");
          this.comments.x = config.width / 1.87;
          this.comments.y = config.height / 2.205;
        } //dog filter
        else {
          console.log("comment3.2");
          this.comments.setTexture("comments3.2");
          this.comments.x = config.width / 1.87;
          this.comments.y = config.height / 2.205;
        } //anything else
      }
    } //Comment textures
}//comment and replies above 87 health

else if(health <= 86 && health >= 1) {//change 1 to 65
    // click on reply button
    if (this.buttonNum == false) {
      if (this.random == 0) {
        this.choiceOne.on(
          "pointerdown",
          function (pointer) {
            this.buttonNum = true;
            console.log(this.buttonNum);
            console.log("clicked 1");
            this.reply.setTexture("reply1.1(n/b)");
            this.reply.x = config.width / 1.9;
            this.reply.y = config.height / 1.25;
            health -= 2;
            this.score1.anims.play('score_1');
            // this.score2.setTexture('score_+300');
            this.score2.anims.play('score_3');
            // this.score3.setTexture('score_+100');
            this.score3.anims.play('score_1');
            this.score1.alpha=1;
                this.score2.alpha=1;
                this.score3.alpha=1;
                scoreSound.play();
                yaySound.play();
          },
          this
        );

        this.choiceTwo.on(
          "pointerdown",
          function (pointer) {
            this.buttonNum = true;
            console.log(this.buttonNum);
            console.log("clicked 2");
            this.reply.setTexture("reply1.2(n/b)");
            this.reply.x = config.width / 1.9;
            this.reply.y = config.height / 1.25;
            this.score1.anims.play('score_1');
            // this.score2.setTexture('score_+300');
            this.score2.anims.play('score_3');
            // this.score3.setTexture('score_+100');
            this.score3.anims.play('score_1');
            this.score1.alpha=1;
                this.score2.alpha=1;
                this.score3.alpha=1;
                scoreSound.play();
                yaySound.play();
          },
          this
        );

        this.choiceThree.on(
          "pointerdown",
          function (pointer) {
            this.buttonNum = true;
            console.log(this.buttonNum);
            console.log("clicked 3");
            this.reply.setTexture("reply1.3(n/b)");
            this.reply.x = config.width / 1.9;
            this.reply.y = config.height / 1.25;
            health -= 1;
            this.score1.anims.play('score_1');
            // this.score2.setTexture('score_+300');
            this.score2.anims.play('score_3');
            // this.score3.setTexture('score_+100');
            this.score3.anims.play('score_1');
            this.score1.alpha=1;
                this.score2.alpha=1;
                this.score3.alpha=1;
                scoreSound.play();
                yaySound.play();
          },
          this
        );
      } //comment reply 1
      else if (this.random == 1) {
        this.reply.setTexture("reply2");
        this.reply.x = config.width / 1.9707;
        this.reply.y = config.height / 1.14;

        this.choiceOne.on(
          "pointerdown",
          function (pointer) {
            this.buttonNum = true;
            console.log(this.buttonNum);
            console.log("clicked 1");
            this.reply.setTexture("reply2.1(n/b)");
            this.reply.x = config.width / 1.93;
            this.reply.y = config.height / 1.16;
            this.score1.anims.play('score_1');
            // this.score2.setTexture('score_+300');
            this.score2.anims.play('score_3');
            // this.score3.setTexture('score_+100');
            this.score3.anims.play('score_1');
            this.score1.alpha=1;
                this.score2.alpha=1;
                this.score3.alpha=1;
                scoreSound.play();
                yaySound.play();
          },
          this
        );

        this.choiceTwo.on(
          "pointerdown",
          function (pointer) {
            this.buttonNum = true;
            console.log(this.buttonNum);
            console.log("clicked 2");
            this.reply.setTexture("reply2.2(n/b)");
            this.reply.x = config.width / 1.93;
            this.reply.y = config.height / 1.16;
            health -= 1;
            this.score1.anims.play('score_1');
            // this.score2.setTexture('score_+300');
            this.score2.anims.play('score_3');
            // this.score3.setTexture('score_+100');
            this.score3.anims.play('score_1');
            this.score1.alpha=1;
                this.score2.alpha=1;
                this.score3.alpha=1;
                scoreSound.play();
                yaySound.play();
          },
          this
        );

        this.choiceThree.on(
          "pointerdown",
          function (pointer) {
            this.buttonNum = true;
            console.log(this.buttonNum);
            console.log("clicked 3");
            this.reply.setTexture("reply2.3(n/b)");
            this.reply.x = config.width / 1.93;
            this.reply.y = config.height / 1.16;
            health -= 2;
            this.score1.anims.play('score_1');
            // this.score2.setTexture('score_+300');
            this.score2.anims.play('score_3');
            // this.score3.setTexture('score_+100');
            this.score3.anims.play('score_1');
            this.score1.alpha=1;
                this.score2.alpha=1;
                this.score3.alpha=1;
                scoreSound.play();
                yaySound.play();
          },
          this
        );
      } //comment reply 2
      else if (this.random == 2) {
        this.reply.setTexture("reply3");
        this.reply.x = config.width / 1.9707;
        this.reply.y = config.height / 1.14;
        this.choiceOne.on(
          "pointerdown",
          function (pointer) {
            this.buttonNum = true;
            console.log(this.buttonNum);
            console.log("clicked 1");
            this.reply.setTexture("reply3.1(n/b)");
            this.reply.x = config.width / 1.93;
            this.reply.y = config.height / 1.16;
            health -= 2;
            this.score1.anims.play('score_1');
            // this.score2.setTexture('score_+300');
            this.score2.anims.play('score_3');
            // this.score3.setTexture('score_+100');
            this.score3.anims.play('score_1');
            this.score1.alpha=1;
                this.score2.alpha=1;
                this.score3.alpha=1;
                scoreSound.play();
                yaySound.play();
          },
          this
        );

        this.choiceTwo.on(
          "pointerdown",
          function (pointer) {
            this.buttonNum = true;
            console.log(this.buttonNum);
            console.log("clicked 2");
            this.reply.setTexture("reply3.2(n/b)");
            this.reply.x = config.width / 1.93;
            this.reply.y = config.height / 1.16;
            this.score1.anims.play('score_1');
            // this.score2.setTexture('score_+300');
            this.score2.anims.play('score_3');
            // this.score3.setTexture('score_+100');
            this.score3.anims.play('score_1');
            this.score1.alpha=1;
                this.score2.alpha=1;
                this.score3.alpha=1;
                scoreSound.play();
                yaySound.play();
          },
          this
        );

        this.choiceThree.on(
          "pointerdown",
          function (pointer) {
            this.buttonNum = true;
            console.log(this.buttonNum);
            console.log("clicked 3");
            this.reply.setTexture("reply3.3(n/b)");
            this.reply.x = config.width / 1.93;
            this.reply.y = config.height / 1.16;
            health -= 2;
            this.score1.anims.play('score_1');
            // this.score2.setTexture('score_+300');
            this.score2.anims.play('score_3');
            // this.score3.setTexture('score_+100');
            this.score3.anims.play('score_1');
            this.score1.alpha=1;
                this.score2.alpha=1;
                this.score3.alpha=1;
                scoreSound.play();
                yaySound.play();
          },
          this
        );
      } //comment reply 3
    }

    {
      if (this.random == 0) {
        console.log("comment1");
        this.comments.setTexture("comments");
      } //basic comment
      else if (this.random == 1) {
        console.log("1");
        if (this.dogis == true) {
          console.log("comment2.2");
          this.comments.setTexture("comments2.2");
          this.comments.x = config.width / 1.83;
          this.comments.y = config.height / 2.205;
        } //dog filter
        else {
          console.log("comment2.1");
          this.comments.setTexture("comments2.1");
          this.comments.x = config.width / 1.87;
          this.comments.y = config.height / 2.205;
        } //anything else
      } else if (this.random == 2) {
        console.log("2");
        if (this.floweris == true) {
          console.log("comment3.1");
          this.comments.setTexture("comments3.1");
          this.comments.x = config.width / 1.87;
          this.comments.y = config.height / 2.205;
        } //dog filter
        else {
          console.log("comment3.2");
          this.comments.setTexture("comments3.2");
          this.comments.x = config.width / 1.87;
          this.comments.y = config.height / 2.205;
        } //anything else
      }
    } //Comment textures
}
  if (this.crackScreen > 0) {
    this.add.image(639, 360, 'crack2');
    console.log("inside");
  }
    //just a fake timer for now
    this.timer = 0;
    this.timer2 = 0;
  }

  // getting data from old scene
  init(data) {
    this.dogis = data.dog;
    this.floweris = data.flower;
  }

  update() {
    console.log(health);
    console.log(this.timer2);

      if (this.timer2 <= 0) {
      }
      this.timer2 += 0.01;
      this.instruction2.anims.play("commentInfo", true);
      this.mouseClick.anims.play('mouseInstruction', true);
      this.mouseClick2.anims.play('mouseInstruction', true);

      if (this.timer2 >= 2) {
        this.instruction2.alpha = 0;
        this.mouseClick.alpha=0;
            this.mouseClick2.alpha=0;
      }
      // console.log('health 95+');
      if (this.buttonNum == true) {
        this.timer += 0.01;
        this.choiceOne.alpha = 0;
        this.choiceTwo.alpha = 0;
        this.choiceThree.alpha = 0;
        this.score1.alpha-=0.005;
            this.score2.alpha-=0.005;
            this.score3.alpha-=0.005;

            this.score1.y-=0.5;
            this.score2.y-=0.5;
            this.score3.y-=0.5;
        //console.log(this.time);
      }

      if (this.timer >= 3) {
        if (Math.floor(Math.random() * 3) == 0) {
          console.log("eyes");
          sceneCount++;
          this.scene.start("eyesGame");
        } else if (Math.floor(Math.random() * 3) == 1) {
          console.log("maze");
          sceneCount++;
          this.scene.start("mazeGame");
        } else if (Math.floor(Math.random() * 3) == 2) {
          console.log("defend");
          sceneCount++;
          this.scene.start("blockingGame");
        }
    }
  }
}
