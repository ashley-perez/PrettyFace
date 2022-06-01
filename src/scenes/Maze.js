class Maze extends Phaser.Scene {
  constructor() {
    super("mazeGame");
  }

  preload() {
    this.load.audio('notifComment', './assets/comment.wav');
    this.load.audio("hm", "./assets/hm.mp3");
    this.load.audio("hmm", "./assets/hmm.mp3");

    this.load.image("heart", "./assets/heart.png");
    this.load.image("sad_heart","./assets/heartFetal.png");
    this.load.image("mark", "./assets/mazeMark.png");
    // this.load.atlas('girl_atlas', './assets/testAtlas.png', './assets/testWalk.json');
    {
      this.load.image("maze1", "./assets/testMaze1.png");
      this.load.image("maze2", "./assets/testMaze2.png");
      this.load.image("maze3", "./assets/testMaze3.png");
      this.load.image("maze4", "./assets/testMaze1.png");
      this.load.image("maze5", "./assets/testMaze4.png");
      this.load.image("maze6", "./assets/testMaze5.png");
      this.load.image("maze7", "./assets/testMaze6.png");
      this.load.image("maze8", "./assets/testMaze7.png");
      this.load.image("maze9", "./assets/testMaze8.png");
      this.load.image("maze10", "./assets/testMaze9.png");
      this.load.image("maze11", "./assets/testMaze10.png");
      this.load.image("maze12", "./assets/testMaze11.png");
      this.load.image("maze13", "./assets/testMaze12.png");
      this.load.image("maze14", "./assets/testMaze13.png");
      this.load.image("maze15", "./assets/testMaze14.png");
      this.load.image("maze16", "./assets/testMaze15.png");
      this.load.image("maze17", "./assets/testMaze16.png");
      this.load.atlas(
        "mazeEnd",
        "./assets/ideal_body.png",
        "./assets/ideal_body.json"
      );
    } //maze images
    {
      this.load.image("mirror", "./assets/mirror.png");
      this.load.image("mirror(broken)", "./assets/mirror(broken).png");
      this.load.image("mirror1", "./assets/mirror(filled1).png");
      this.load.image("mirror2", "./assets/mirror(filled2).png");
      this.load.image("mirror3", "./assets/mirror(filled3).png");
      this.load.image("mirror4", "./assets/mirror(filled4).png");
      this.load.image("mirror5", "./assets/mirror(filled5).png");
      this.load.image("mirror6", "./assets/mirror(filled6).png");
      this.load.image("phone", "./assets/mirrorPhone.png");
      this.load.image("phone1", "./assets/mirrorPhone(filled1).png");
      this.load.image("phone2", "./assets/mirrorPhone(filled2).png");
      this.load.image("phone3", "./assets/mirrorPhone(filled3).png");
      this.load.image("phone4", "./assets/mirrorPhone(filled4).png");
    } //mirrors and phones

    this.load.atlas(
      "mazeInstruction",
      "./assets/instructMaze.png",
      "./assets/instructMaze.json"
    );
    this.load.atlas(
      "keyboardClick",
      "./assets/keyboardClick.png",
      "./assets/keyboard_click.json"
    );

    this.load.image("color_bg", "./assets/gameBG.png");
    this.load.image("black_bg", "./assets/gameBg5.png");
    this.load.image("scary_bg","./assets/finalScene1.png");
    this.load.image("scary_bg2","./assets/finalScene2.png");
  }

  create() {
    var scoreSound = this.sound.add('score_sound', {volume: 0.5});
        scoreSound.play();
    scary_music.setVolume(0.8);
    music.setVolume(0);
    //100-85 Nothing
    //86-65 Only mirrors and phones
    //Mirrors1-4 randomized and Phones 1-4 randomized.
    //64-35 MIrrors and text
    //mirror 1 and 2 with word array 1. mirror 1 and 3 with word array 2 and

 {
    this.wordArray1 = [
      "not bad not bad",
      "my shoulders look broad \nfrom this angle.",
      "next post, I will change\nthe angle",
    ]; //64-35 mirrors 1 and 2
    this.wordArray2 = [
      "are they right?",
      "Am I becoming too wide?",
      "I think I'll skip dinner\ntonight...",
    ]; //64-35 mirrors 1 and 3
    this.wordArray3 = [
      "is my belly that big?",
      "was I ever skinny and pretty?",
      "how could I let this happen",
    ]; //64-35 mirrors 1 and 3
    this.wordArray4 = [
      "is my nose really\nthat big?",
      "its not small and cute\nlike everyone else...",
      "Im disgusting",
    ]; //64-35 mirror 4
    this.wordArray5 = [
      "they are so beautiful",
      "their waist and curves are\nso amazing...",
      "why don't I look\nlike that?",
    ]; //64-35 phone 2 and 3
    this.wordArray6 = [
      "their lips and face\nare perfect",
      "are my lips really\nthat small to them?...",
      "how can I compare\nto them?...",
    ]; //64-35 phone 1 and 4

    this.wordArray7 = [
      "who am I now?",
      "no one will think\nI'm pretty",
      "no one...",
    ]; //34-10 mirror 5 and 6
    this.wordArray8 = [
        "I dont even\nrecognize myself",
        "who could love\nme now?",
        "nobody...",
      ]; //34-10 mirror 5 and 6
 }//arrays

    this.index = 0;
    this.random = 0;
    this.holder = 0;
    this.isMirror = false;
    // if(health >=95) {
    this.anims.create({
      key: "maze",
      frames: this.anims.generateFrameNames("mazeInstruction", {
        prefix: "frame_",
        start: 1,
        end: 5,
        suffix: "",
        zeroPad: 2,
      }),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: "keyboardInfo",
      frames: this.anims.generateFrameNames("keyboardClick", {
        prefix: "frame_",
        start: 1,
        end: 5,
        suffix: "",
        zeroPad: 2,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.keyboardInstruction = this.physics.add
      .sprite(config.width / 8, config.height / 30, "keyboardClick", 0)
      .setScale(2)
      .setDepth(1);
    this.keyboardInstruction2 = this.physics.add
      .sprite(config.width / 1.14, config.height / 30, "keyboardClick", 0)
      .setScale(2)
      .setDepth(1);

    // movement this.cursors
    this.cursors = this.input.keyboard.createCursorKeys();
    this.markMn = this.physics.add
      .sprite(config.width / 2.066, config.height / 1.29, "mark")
      .setScale(1.6);
      this.markMn.visible = false;

    this.instruction = this.physics.add
      .sprite(config.width / 2, config.height / 30, "mazeInstruction", 0)
      .setScale(2)
      .setDepth(1);

    this.mirror = this.physics.add
      .sprite(config.width / 2.057, config.height / 1.425, "mirror", 0)
      .setScale(1.2)
      .setDepth(1);
    this.mirror2 = this.physics.add
      .sprite(config.width / 2.54, config.height / 1.853, "mirror", 0)
      .setScale(1.2)
      .setDepth(1);

    this.player = this.physics.add.sprite(760, 622, "heart").setScale(0.7);
    this.player.body.collideWorldBounds = true;

    this.mazeEnd = this.physics.add.sprite(856.5, 30, "mazeEnd").setScale(0.5);
    this.mazeEnd.alpha = 0;

    // when player collides with thing write a textbox near the player!!
    this.physics.add.overlap(
      this.player,
      this.markMn,
      this.writeStuff,
      null,
      this
    ); //collide with invisible objects
    this.testBox = this.add
      .text(this.player.x, this.player.y, "", { color: "#FFFFFF" })
      .setWordWrapWidth(500)
      .setDepth(1); // empty '' needs to be there!!

    // this.cameras.main.setScroll(this.player.x, this.player.y);
    this.cameras.main.setBounds(0, 0, config.width, config.height);

    this.cameras.main.startFollow(this.player);

    {
      this.maze1 = this.physics.add.sprite(game.config.width / 4.78504673,312,"maze1");
      this.maze2 = this.physics.add.sprite(game.config.width / 2.52714709,613.0,"maze2");
      this.maze3 = this.physics.add.sprite(852, 613.0, "maze3");
      this.maze4 = this.physics.add.sprite(909, 312.0, "maze4");
      this.maze5 = this.physics.add.sprite(581.5, 506.5, "maze5");
      this.maze6 = this.physics.add.sprite(400.5, 387.5, "maze6");
      this.maze7 = this.physics.add.sprite(621.5, 434.0, "maze7");
      this.maze8 = this.physics.add.sprite(767.0, 387.5, "maze8");
      this.maze9 = this.physics.add.sprite(439.0, 266.5, "maze9");
      this.maze10 = this.physics.add.sprite(717.0, 266.5, "maze10");
      this.maze11 = this.physics.add.sprite(520.5, 193.5, "maze11");
      this.maze12 = this.physics.add.sprite(717.0, 192.5, "maze12");
      this.maze13 = this.physics.add.sprite(394.0, 144.5, "maze13");
      this.maze14 = this.physics.add.sprite(658.5, 141.5, "maze14");
      this.maze15 = this.physics.add.sprite(856.5, 141.5, "maze15");
      this.maze16 = this.physics.add.sprite(621.5, 77.5, "maze16");
      this.maze17 = this.physics.add.sprite(547.0, 12.5, "maze17");

      this.anims.create({
        key: "ideal",
        frames: this.anims.generateFrameNames("mazeEnd", {
          prefix: "frame_",
          start: 1,
          end: 3,
          suffix: "",
          zeroPad: 2,
        }),
        frameRate: 4,
        repeat: -1,
      });

      this.markMn.body.allowGravity = false;
      this.markMn.body.immovable = true;
      this.maze1.body.allowGravity = false;
      this.maze1.body.immovable = true;
      this.maze2.body.immovable = true;
      this.maze2.body.allowGravity = false;
      this.maze3.body.immovable = true;
      this.maze3.body.allowGravity = false;
      this.maze4.body.immovable = true;
      this.maze4.body.allowGravity = false;
      this.maze5.body.immovable = true;
      this.maze5.body.allowGravity = false;
      this.maze6.body.immovable = true;
      this.maze6.body.allowGravity = false;
      this.maze7.body.immovable = true;
      this.maze7.body.allowGravity = false;
      this.maze8.body.immovable = true;
      this.maze8.body.allowGravity = false;
      this.maze9.body.immovable = true;
      this.maze9.body.allowGravity = false;
      this.maze10.body.immovable = true;
      this.maze10.body.allowGravity = false;
      this.maze11.body.immovable = true;
      this.maze11.body.allowGravity = false;
      this.maze12.body.immovable = true;
      this.maze12.body.allowGravity = false;
      this.maze13.body.immovable = true;
      this.maze13.body.allowGravity = false;
      this.maze14.body.immovable = true;
      this.maze14.body.allowGravity = false;
      this.maze15.body.immovable = true;
      this.maze15.body.allowGravity = false;
      this.maze16.body.immovable = true;
      this.maze16.body.allowGravity = false;
      this.maze17.body.immovable = true;
      this.maze17.body.allowGravity = false;
      this.mazeEnd.body.allowGravity = false;
    } //maze sprites and collisions all collapsed

    this.maze = this.add.group();
    {
      this.maze.add(this.maze1);
      this.maze.add(this.maze2);
      this.maze.add(this.maze3);
      this.maze.add(this.maze4);
      this.maze.add(this.maze5);
      this.maze.add(this.maze6);
      this.maze.add(this.maze7);
      this.maze.add(this.maze8);
      this.maze.add(this.maze9);
      this.maze.add(this.maze10);
      this.maze.add(this.maze11);
      this.maze.add(this.maze12);
      this.maze.add(this.maze13);
      this.maze.add(this.maze14);
      this.maze.add(this.maze15);
      this.maze.add(this.maze16);
      this.maze.add(this.maze17);
    } //add to maze group
    this.background = this.physics.add
      .sprite(config.width, config.height, "color_bg", 0)
      .setScale(2)
      .setDepth(-1); //full color
    this.background2 = this.physics.add
      .sprite(config.width, config.height, "black_bg", 0)
      .setScale(2)
      .setDepth(-2); //dark scary
      this.background3 = this.physics.add
      .sprite(config.width, config.height, "scary_bg", 0)
      .setScale(2)
      .setDepth(-3); //dark scary

    // this.background.tintBottomLeft - 0xfffff;

    //.setTint(0)
    if (phaseCount == 1) {
      this.physics.add.collider(this.player, this.maze);
      this.mirror.alpha = 0;
      this.mirror2.alpha = 0;
      // this.markMn.alpha=0;
      this.markMn.x = -10;
      this.markMn.y = -20;

      console.log("87-100"); //no mirrors or phones or texts
    } //no damage loss and no text or mirrors
    else if (phaseCount == 2) {
      this.background.alpha = 0.86;
      this.background2.alpha = 0.66;
      this.background.tintBottomLeft = 0x0FFFFF;
      this.random = Math.floor(Math.random() * 2); //choose between mirrors and phones. 0 = mirror. 1 = phones

      this.randomMirror = Math.floor(Math.random() * 4); //randomly decide which set of mirror story to paste
      this.randomPhone = Math.floor(Math.random() * 2); //randomly decide which set of phones story to paste
//////////////////These apply for the write stuff function^
      if (health >= 77) {
        this.physics.add.collider(this.player, this.maze);
      }
      // this.markMn.x=-10;
      // this.markMn.y=-20;
      if (this.holder == 0) {
        if (this.random == 0) {
          this.mirror.setTexture("mirror");
          this.mirror2.setTexture("mirror");
          this.isMirror = true;
          this.holder = 1;
          console.log(this.random + " is mirror");
        } //end set mirror
        else if (this.random == 1) {
          this.mirror.setTexture("phone");
          this.mirror2.setTexture("phone");
          this.isMirror = false;
          this.holder = 1;
          console.log(this.random + " is phone");
        } //end set phone
      } //end holder so this only happens once

      this.mazeEnd.x = game.config.width / 4.16;
      this.mazeEnd.y = game.config.height / 9.172;
      console.log("86-65"); //only mirror and phones
    } else if (phaseCount == 3) {
      this.background.alpha = 0.69;
      this.background2.alpha = 0.43;
      this.background.tintBottomLeft = 0x0FFFFF;
      this.random = Math.floor(Math.random() * 2); //choose between mirrors and phones. 0 = mirror. 1 = phones

      this.randomMirror = Math.floor(Math.random() * 4); //randomly decide which set of mirror story to paste
      this.randomPhone = Math.floor(Math.random() * 2); //randomly decide which set of phones story to paste
//////////////////These apply for the write stuff function^
      if (this.holder == 0) {
          if (this.random == 0) {
            this.mirror.setTexture("mirror");
            this.mirror2.setTexture("mirror");
            this.isMirror = true;
            this.holder = 1;
            console.log(this.random + " is mirror");
          } //end set mirror
          else if (this.random == 1) {
            this.mirror.setTexture("phone");
            this.mirror2.setTexture("phone");
            this.isMirror = false;
            this.holder = 1;
            console.log(this.random + " is phone");
          } //end set phone
      } //end holder so this only happens once
      this.player.x = game.config.width / 3.657;
      this.player.y = game.config.height / 8.372;
      this.markMn.x = game.config.width / 2.233;
      this.markMn.y = game.config.height / 3.55;
      this.mirror.x = game.config.width / 2.45;
      this.mirror.y = game.config.height / 3.52;
      // this.markMn.x=-10;
      // this.markMn.y=-20;
      this.mazeEnd.x = game.config.width / 1.92;
      this.mazeEnd.y = game.config.height / 1.6;
      console.log("64-35");
    } else if (health <= 34 && health >= 10) {
        this.player.setTexture("sad_heart");
      this.background.alpha = 0.5;
      this.background2.alpha = 0.5;
      this.background3.setTexture("scary_bg2");
      this.background.tintBottomLeft = 0x0FFFFF;
      this.randomMirror = Math.floor(Math.random() * 2); //randomly decide which set of mirror story to paste

      this.player.x = game.config.width / 1.488;
      this.player.y = game.config.height / 9.35;
      this.markMn.x = game.config.width / 1.66;
      this.markMn.y = game.config.height / 2.17;
      this.mirror.x = game.config.width / 1.66;
      this.mirror.y = game.config.height / 2.704;
      // this.markMn.x=-10;
      // this.markMn.y=-20;
      this.mazeEnd.x = game.config.width / 4.122;
      this.mazeEnd.y = game.config.height / 1.31;
      console.log("34-10");
    }

    if (health <= 76) {
      //so i dont have to copy paste the same code over and over
      this.physics.add.collider(
        this.player,
        this.maze,
        null,
        function () {
          health = health - 2;
          console.log(health);
          if (this.cursors.left.isDown) {
            // this.maze.flash(250);
            this.player.x = this.player.x + 20;
            this.timer3 = 0.5;
            this.cameras.main.flash(200);
            this.cameras.main.shake(200);
            this.sound.play('notifComment');
            // this.owwBox = this.add.text(this.player.x, (this.player.y+100), '', {color: '#FFFFFF'}).setWordWrapWidth(500); // empty '' needs to be there!!
          } else if (this.cursors.right.isDown) {
            this.player.x = this.player.x - 20;
            this.timer3 = 0.5;
            this.cameras.main.flash(200);
            this.cameras.main.shake(200);
            this.sound.play('notifComment');
            // this.owwBox = this.add.text(this.player.x, (this.player.y+100), '', {color: '#FFFFFF'}).setWordWrapWidth(500); // empty '' needs to be there!!
          } else if (this.cursors.up.isDown) {
            this.player.y = this.player.y + 20;
            this.timer3 = 0.5;
            this.cameras.main.flash(200);
            this.cameras.main.shake(200);
            this.sound.play('notifComment');
            // this.owwBox = this.add.text(this.player.x, (this.player.y+100), '', {color: '#FFFFFF'}).setWordWrapWidth(500); // empty '' needs to be there!!
          } else if (this.cursors.down.isDown) {
            this.player.y = this.player.y - 20;
            this.timer3 = 0.5;
            this.cameras.main.flash(200);
            this.cameras.main.shake(200);
            this.sound.play('notifComment');
            // this.owwBox = this.add.text(this.player.x, (this.player.y+100), '', {color: '#FFFFFF'}).setWordWrapWidth(500); // empty '' needs to be there!!
          }
        },
        this
      );
    } //too sad and now hurt when hit walls

    // when player reaches end of maze do something
    this.physics.add.collider(
      this.player,
      this.mazeEnd,
      null,
      function () {
        if (sceneCount < 2) {
          if (Math.floor(Math.random() * 2) == 0) {
            console.log("defend");
            sceneCount++;
            this.scene.start("blockingGame");
          } else if (Math.floor(Math.random() * 2) == 1) {
            console.log("eye");
            sceneCount++;
            this.scene.start("eyesGame");
          }
        } else {
          this.scene.start("narrOne");
        }
      },
      this
    ); //collides with the end of the maze

    this.followP = false;
    this.timer = 300; //narration timer
    this.timer2 = 0; //instruction timer
    this.timer3 = 1.5; //freeze player

    // }//end
    this.playerPositionX = this.player.x;
    this.playerPositionY = this.player.y;
  }

  update() {
    this.playerPositionX = this.player.x;
    this.playerPositionY = this.player.y;

    // console.log(this.timer3);
    if (this.timer3 > 0) {
      this.timer3 = this.timer3 - 0.01;
    } //freeze the player
    this.timer2 += 0.01; //instruction timer
    this.instruction.anims.play("maze", true);
    this.mazeEnd.anims.play("ideal", true);
    this.keyboardInstruction.anims.play("keyboardInfo", true);
    this.keyboardInstruction2.anims.play("keyboardInfo", true);
    if (this.timer2 >= 2.2) {
      this.instruction.alpha = 0;
      this.keyboardInstruction.alpha = 0;
      this.keyboardInstruction2.alpha = 0;
      this.cameras.main.setZoom(2.5);
    } //instructions
    this.player.body.setVelocity(0);
    // console.log(this.timer3);
    if (this.timer3 <= 0) {
      //unfreeze player to move
      this.mazeEnd.alpha = 1;
      if (this.cursors.left.isDown) {
        this.player.setVelocityX(-100);
      } else if (this.cursors.right.isDown) {
        this.player.setVelocityX(100);
      }

      if (this.cursors.up.isDown) {
        this.player.setVelocityY(-100);
      } else if (this.cursors.down.isDown) {
        this.player.setVelocityY(100);
      } //movement
    }
    if (this.followP == true) {
      this.testBox.x = this.player.x;
      this.testBox.y = this.player.y;
      this.timer--;
    } //text follow the player
    if (this.timer <= 0) {
      this.followP = false;
      this.testBox.text = "";
      this.timer = this.timerMax;
    } //count down timer
    //    console.log(this.timer);
  }

  writeStuff(player, object) {
    this.testBox.alpha = 1;
    this.followP = true;
    this.testBox.text = "";
    if (health <= 86 && health >= 65) {
      // this.typewriteText(this.wordArray1[this.index], this.testBox, 40);

      if (this.isMirror == true) {
        if (this.randomMirror == 0) {
          if (this.index == 0) {
            this.mirror.setTexture("mirror1");
            this.sound.play("hm");
            object.x = config.width / 2.542;
            object.y = config.height / 1.6;
            this.timer = 200;
          } else if (this.index == 1) {
            this.mirror2.setTexture("mirror2");
            this.sound.play("hmm");
            object.x = game.config.width / 1.66;
            object.y = game.config.height / 2.17;
            this.timer = 400;
          } else if (this.index == 2) {
            object.x = config.width / -100;
            object.y = config.height / -100;
            this.holder=0;
            this.timer = 250;
          }
          this.index++;
        console.log("mirror list "+this.randomMirror);
        } //end if mirror 1 and 2 array 1
        else if (this.randomMirror == 1) {
            if (this.index == 0) {
              this.mirror.setTexture("mirror1");
              this.sound.play("hm");
              object.x = config.width / 2.542;
              object.y = config.height / 1.6;
              this.timer = 200;
            } else if (this.index == 1) {
              this.mirror2.setTexture("mirror3");
              this.sound.play("hmm");
              object.x = game.config.width / 1.66;
              object.y = game.config.height / 2.17;
              this.timer = 400;
            } else if (this.index == 2) {
              object.x = config.width / -100;
              object.y = config.height / -100;
                this.holder=0;
              this.timer = 250;
            }
            this.index++;
            console.log("mirror list "+this.randomMirror);
          } //end if mirror 1 and 3 array 2
          else if (this.randomMirror == 2) {
            if (this.index == 0) {
              this.mirror.setTexture("mirror3");
              this.sound.play("hm");
              object.x = config.width / 2.542;
              object.y = config.height / 1.6;
              this.timer = 200;
            } else if (this.index == 1) {
              this.mirror2.setTexture("mirror1");
              this.sound.play("hmm");
              object.x = game.config.width / 1.66;
              object.y = game.config.height / 2.17;
              this.timer = 400;
            } else if (this.index == 2) {
              object.x = config.width / -100;
              object.y = config.height / -100;
            this.holder=0;
              this.timer = 250;
            }
            this.index++;
            console.log("mirror list "+this.randomMirror);
          } //end if mirror 1 and 3 array 3
          else if (this.randomMirror == 3) {
            if (this.index == 0) {
              this.mirror.setTexture("mirror4");
              this.sound.play("hm");
              object.x = config.width / 2.542;
              object.y = config.height / 1.6;
              this.timer = 200;
            } else if (this.index == 1) {
              this.mirror2.setTexture("mirror4");
              this.sound.play("hmm");
              object.x = game.config.width / 1.66;
              object.y = game.config.height / 2.17;
              this.timer = 400;
            } else if (this.index == 2) {
              object.x = config.width / -100;
              object.y = config.height / -100;
            this.holder=0;
              this.timer = 250;
            }
            this.index++;
            console.log("mirror list "+this.randomMirror);
          } //end if mirror 4 array 4
      }//end if picked mirror

      else if (this.isMirror == false) {
        if (this.randomPhone == 0) {
          if (this.index == 0) {
            this.mirror.setTexture("phone2");
            this.sound.play("hm");
            object.x = config.width / 2.542;
            object.y = config.height / 1.6;
            this.timer = 200;
          } else if (this.index == 1) {
            this.mirror2.setTexture("phone3");
            this.sound.play("hmm");
            object.x = game.config.width / 1.66;
            object.y = game.config.height / 2.17;
            this.timer = 400;
          } else if (this.index == 2) {
            object.x = config.width / -100;
            object.y = config.height / -100;
            this.holder=0;
            this.timer = 250;
          }
          this.index++;
        console.log("phone list "+this.randomPhone);
        } //end if phone 2 and 4 array 5
        else if (this.randomPhone == 1) {
            if (this.index == 0) {
              this.mirror.setTexture("phone1");
              this.sound.play("hm");
              object.x = config.width / 2.542;
              object.y = config.height / 1.6;
              this.timer = 200;
            } else if (this.index == 1) {
              this.mirror2.setTexture("phone4");
              this.sound.play("hmm");
              object.x = game.config.width / 1.66;
              object.y = game.config.height / 2.17;
              this.timer = 400;
            } else if (this.index == 2) {
              object.x = config.width / -100;
              object.y = config.height / -100;
            this.holder=0;
              this.timer = 250;
            }
            this.index++;
            console.log("phone list "+this.randomPhone);
          } //end if mirror 1 and 4 array 6
      }//end if picked phones
    } //end 86 - 65
    else if (health >= 35 && health <= 64) {

      if (this.isMirror == true) {
        if (this.randomMirror == 0) {
            this.typewriteText(this.wordArray1[this.index], this.testBox, 40);
          if (this.index == 0) {
            this.mirror.setTexture("mirror1");
            this.sound.play("hm");
            object.x = config.width / 2.542;
            object.y = config.height / 1.6;
            this.timer = 200;
          } else if (this.index == 1) {
            this.mirror2.setTexture("mirror2");
            this.sound.play("hmm");
            object.x = game.config.width / 2.077;
            object.y = game.config.height / 1.29;
            this.timer = 400;
          } else if (this.index == 2) {
            object.x = config.width / -100;
            object.y = config.height / -100;
            this.holder=0;
            this.timer = 250;
          }
          this.index++;
        console.log("mirror list "+this.randomMirror);
        } //end if mirror 1 and 2 array 1
        else if (this.randomMirror == 1) {
            this.typewriteText(this.wordArray2[this.index], this.testBox, 40);
            if (this.index == 0) {
              this.mirror.setTexture("mirror1");
              this.sound.play("hm");
              object.x = config.width / 2.542;
              object.y = config.height / 1.6;
              this.timer = 200;
            } else if (this.index == 1) {
              this.mirror2.setTexture("mirror3");
              this.sound.play("hmm");
              object.x = game.config.width / 2.077;
            object.y = game.config.height / 1.29;
              this.timer = 400;
            } else if (this.index == 2) {
              object.x = config.width / -100;
              object.y = config.height / -100;
                this.holder=0;
              this.timer = 250;
            }
            this.index++;
            console.log("mirror list "+this.randomMirror);
          } //end if mirror 1 and 3 array 2
          else if (this.randomMirror == 2) {
            this.typewriteText(this.wordArray3[this.index], this.testBox, 40);
            if (this.index == 0) {
              this.mirror.setTexture("mirror3");
              this.sound.play("hm");
              object.x = config.width / 2.542;
              object.y = config.height / 1.6;
              this.timer = 200;
            } else if (this.index == 1) {
              this.mirror2.setTexture("mirror1");
              this.sound.play("hmm");
              object.x = game.config.width / 2.077;
            object.y = game.config.height / 1.29;
              this.timer = 400;
            } else if (this.index == 2) {
              object.x = config.width / -100;
              object.y = config.height / -100;
            this.holder=0;
              this.timer = 250;
            }
            this.index++;
            console.log("mirror list "+this.randomMirror);
          } //end if mirror 1 and 3 array 3
          else if (this.randomMirror == 3) {
            this.typewriteText(this.wordArray4[this.index], this.testBox, 40);
            if (this.index == 0) {
              this.mirror.setTexture("mirror4");
              this.sound.play("hm");
              object.x = config.width / 2.542;
              object.y = config.height / 1.6;
              this.timer = 200;
            } else if (this.index == 1) {
              this.mirror2.setTexture("mirror4");
              this.sound.play("hmm");
              object.x = game.config.width / 2.077;
            object.y = game.config.height / 1.29;
              this.timer = 400;
            } else if (this.index == 2) {
              object.x = config.width / -100;
              object.y = config.height / -100;
            this.holder=0;
              this.timer = 250;
            }
            this.index++;
            console.log("mirror list "+this.randomMirror);
          } //end if mirror 4 array 4
      }//end if picked mirror

      else if (this.isMirror == false) {
        if (this.randomPhone == 0) {
            this.typewriteText(this.wordArray5[this.index], this.testBox, 40);
          if (this.index == 0) {
            this.mirror.setTexture("phone2");
            this.sound.play("hm");
            object.x = config.width / 2.542;
            object.y = config.height / 1.6;
            this.timer = 200;
          } else if (this.index == 1) {
            this.mirror2.setTexture("phone3");
            this.sound.play("hmm");
            object.x = game.config.width / 2.077;
            object.y = game.config.height / 1.29;
            this.timer = 400;
          } else if (this.index == 2) {
            object.x = config.width / -100;
            object.y = config.height / -100;
            this.holder=0;
            this.timer = 250;
          }
          this.index++;
        console.log("phone list "+this.randomPhone);
        } //end if phone 2 and 4 array 5
        else if (this.randomPhone == 1) {
            this.typewriteText(this.wordArray6[this.index], this.testBox, 40);
            if (this.index == 0) {
              this.mirror.setTexture("phone1");
              this.sound.play("hm");
              object.x = config.width / 2.542;
              object.y = config.height / 1.6;
              this.timer = 200;
            } else if (this.index == 1) {
              this.mirror2.setTexture("phone4");
              this.sound.play("hmm");
              object.x = game.config.width / 2.077;
            object.y = game.config.height / 1.29;
              this.timer = 400;
            } else if (this.index == 2) {
              object.x = config.width / -100;
              object.y = config.height / -100;
            this.holder=0;
              this.timer = 250;
            }
            this.index++;
            console.log("phone list "+this.randomPhone);
          } //end if mirror 1 and 4 array 6
      }//end if picked phones
    } //mehish comments
    else if (health >= 10 && health <= 34) {
      if (this.randomMirror == 0) {
        this.typewriteText(this.wordArray7[this.index], this.testBox, 40);
      if (this.index == 0) {
        this.mirror.setTexture("mirror5");
        this.sound.play("hm");
        object.x = config.width / 2.542;
        object.y = config.height / 1.6;
        this.timer = 200;
        this.timer3 = 0.9;
        // this.maze1.setScale(1.3);this.maze2.setScale(1.3);this.maze3.setScale(1.3);this.maze4.setScale(1.3);this.maze6.setScale(1.2);
        // this.maze7.setScale(1.3);this.maze8.setScale(1.3);this.maze9.setScale(1.3);this.maze10.setScale(1.3);this.maze11.setScale(1.3);this.maze12.setScale(1.3);
        // this.maze13.setScale(1.3);this.maze14.setScale(1.3);this.maze15.setScale(1.3);this.maze16.setScale(1.3);this.maze17.setScale(1.3);
      } else if (this.index == 1) {
        this.mirror2.setTexture("mirror6");
        this.sound.play("hmm");
        object.x = game.config.width / 2.077;
        object.y = game.config.height / 1.29;
        this.timer = 400;
        this.timer3 = 0.9;

      } else if (this.index == 2) {
        object.x = config.width / -100;
        object.y = config.height / -100;
        this.holder=0;
        this.timer = 250;
      }
      this.index++;
    console.log("mirror list "+this.randomMirror);
    } //end if mirror 5 and 6 array 7
    else if (this.randomMirror == 1) {
        this.typewriteText(this.wordArray8[this.index], this.testBox, 40);
      if (this.index == 0) {
        this.mirror.setTexture("mirror5");
        this.sound.play("hm");
        object.x = config.width / 2.542;
        object.y = config.height / 1.6;
        this.timer = 200;
        this.timer3 = 0.9;
      } else if (this.index == 1) {
        this.mirror2.setTexture("mirror6");
        this.sound.play("hmm");
        object.x = game.config.width / 2.077;
        object.y = game.config.height / 1.29;
        this.timer = 400;
        this.timer3 = 0.9;
      } else if (this.index == 2) {
        object.x = config.width / -100;
        object.y = config.height / -100;
        this.holder=0;
        this.timer = 250;
      }
      this.index++;
    console.log("mirror list "+this.randomMirror);
    } //end if mirror 5 and 6 array 8
    } //not bueno comments
  }

  typewriteText(text, textbox, speed) {
    console.log("the passed in text: " + text);
    const length = text.length; // how many times the loop should repeat (based on sentence length)
    let i = 0;
    //textDone = false;
    this.time.addEvent({
      callback: () => {
        textbox.text += text[i];
        i++;

        // when there is no more to write set bool to false
        if (i == length) {
          // textbox.text='';
          this.complete = true;
          // textbox = '';
        }
      },
      repeat: length - 1,
      delay: speed, // typing speed, big numbers = slower text, small = faster
    });
  }
}
