class Comment extends Phaser.Scene {
  constructor() {
    super("commentGame");
  }

  preload() {
    this.load.image("comments", "./assets/comments1.png");
    this.load.image("comments2.1", "./assets/comments2(ver1).png");
    this.load.image("comments2.2", "./assets/comments2(ver2).png");
    this.load.image("comments2.2", "./assets/comments2(ver2).png");
    this.load.image("comments3.1", "./assets/comments3(ver1).png");
    this.load.image("comments3.2", "./assets/comments3(ver2).png");
    this.load.image("comments4.1", "./assets/comments4(ver1).png");
    this.load.image("comments4.2", "./assets/comments4(ver2).png");

    this.load.image("background", "./assets/testBackGround.png");
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


    // this.load.image('replyButton', './assets/replyButton.png');

    this.load.image("one", "./assets/reply1.png");
    this.load.image("two", "./assets/reply2.png");
    this.load.image("three", "./assets/reply3.png");
    this.load.atlas("commentInstruction", "./assets/instructComment.png","./assets/instructComment.json"
    );
  }

  create() {
      if(health >=87) {
    this.random = Math.floor(Math.random() * 3);
    console.log("random " +this.random);
      }//3 different options of comments for most positive
      else if (health <= 86 && health >= 65) {
        this.random = Math.floor(Math.random() * 1);
        console.log("random "+this.random);
          }//3 different options of comments for most positive
    this.anims.create({
      key: "frame",
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
    this.instruction2 = this.physics.add
      .sprite(config.width / 2, config.height / 30, "commentInstruction", 0)
      .setScale(2);

    // mouse stuff
    this.input.setDefaultCursor("url(./assets/testFingerPointer.png), pointer");

    this.normbackground = this.add
      .tileSprite(0, 0, 1280, 720, "background")
      .setOrigin(0, 0);

    this.complete = false;
    this.buttonNum = false;

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
            health -= 1;
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
            health -= 2;
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
            health -= 1;
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
            health -= 1;
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
    
      if (this.timer2 <= 0) {
      }
      this.timer2 += 0.01;
      this.instruction2.anims.play("frame", true);
      if (this.timer2 >= 2) {
        this.instruction2.alpha = 0;
      }
      // console.log('health 95+');
      if (this.buttonNum == true) {
        this.timer += 0.01;
        this.choiceOne.alpha = 0;
        this.choiceTwo.alpha = 0;
        this.choiceThree.alpha = 0;
        //console.log(this.time);
      }

      if (this.timer >= 3) {
        if (Math.floor(Math.random() * 3) == 0) {
          console.log("eyes");
          this.scene.start("eyesGame");
        } else if (Math.floor(Math.random() * 3) == 1) {
          console.log("maze");
          this.scene.start("mazeGame");
        } else if (Math.floor(Math.random() * 3) == 2) {
          console.log("defend");
          this.scene.start("blockingGame");
        }
    }
  }
}
