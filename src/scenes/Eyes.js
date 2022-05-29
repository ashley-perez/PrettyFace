class Eyes extends Phaser.Scene {
    constructor() {
        super("eyesGame")
    }

    preload() {
        this.load.audio('eyesMusic', './assets/eyes.wav');
        this.load.audio('ouch', './assets/ouch.mp3');
        this.load.audio('scream', './assets/scream.mp3');
        this.load.image('player1', './assets/heart.png');
        this.load.image('player2', './assets/fertal.png');
        this.load.image('eye2', './assets/eyeP2.png');
        this.load.image('eye4', './assets/eyeP4.png');
        this.load.atlas('eyeInstruction', './assets/instructEyes.png', './assets/instructEyes.json');
        this.load.atlas('keyboardClick', './assets/keyboardClick.png','./assets/keyboard_click.json');

    }

    create() {
        this.phase = 0;

        // movement this.cursors
        this.cursors = this.input.keyboard.createCursorKeys();

        if(this.phase <= 1) {
            this.player = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'player1');
        }
        else {
            this.player = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'player2').setScale(0.7);
        }

        this.instruction = this.physics.add.sprite(config.width/2, config.height/30, 'eyeInstruction', 0).setScale(2).setDepth(1);
        this.anims.create({
            key: 'eyeInfo',
            frames: this.anims.generateFrameNames('eyeInstruction', {
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
            key: 'keyboardInfo',
            frames: this.anims.generateFrameNames('keyboardClick', {
                prefix: 'frame_',
                start: 1,
                end: 5,
                suffix: '',
                zeroPad: 2
            }),
            frameRate: 5,
            repeat: -1,
        });

        this.keyboardInstruction = this.physics.add.sprite(config.width/8, config.height/30, 'keyboardClick', 0).setScale(2).setDepth(1);
        this.keyboardInstruction2 = this.physics.add.sprite(config.width/1.14, config.height/30, 'keyboardClick', 0).setScale(2).setDepth(1);

        if (health >= 87)  {    // phase 1
            this.phase++;
            // create eyes
            this.eye = this.physics.add.sprite(0,-100,'eye2');
            this.eye2 = this.physics.add.sprite(950,800,'eye2');
            this.eye3 = this.physics.add.sprite(-150,700,'eye2');
            this.eye4 = this.physics.add.sprite(1500,300,'eye2');
            this.eye5 = this.physics.add.sprite(450,1000,'eye2');

            // player colliding with each eye
            this.player.body.collideWorldBounds = true;
            this.physics.add.collider(this.player, this.eye, null, function() {
                this.sound.play('ouch', {volume: 0.5});
                this.eye.setPosition(0,-70);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye2, null, function() {
                this.sound.play('ouch', {volume: 0.5});
                this.eye2.setPosition(950,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye3, null, function() {
                this.sound.play('ouch', {volume: 0.5});
                this.eye3.setPosition(-150,700);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye4, null, function() {
                this.sound.play('ouch', {volume: 0.5});
                this.eye4.setPosition(1400,300);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye5, null, function() {
                this.sound.play('ouch', {volume: 0.5});
                this.eye5.setPosition(450,800);
                health -= 2;
                console.log(health);
            }, this);

            this.timer = 0;
            this.timer2 = 0;
        } //end if

        else if (health >= 65 && health <= 86)  {   // phase 2
            this.phase++;
            // create eyes
            this.eye = this.physics.add.sprite(0,-100,'eye2');
            this.eye2 = this.physics.add.sprite(950,800,'eye2');
            this.eye3 = this.physics.add.sprite(-150,700,'eye2');
            this.eye4 = this.physics.add.sprite(1500,300,'eye2');
            this.eye5 = this.physics.add.sprite(450,1000,'eye2');
            this.eye6 = this.physics.add.sprite(750,-70,'eye2');

            // player colliding with each eye
            this.player.body.collideWorldBounds = true;
            this.physics.add.collider(this.player, this.eye, null, function() {
                this.sound.play('ouch');
                this.eye.setPosition(0,-70);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye2, null, function() {
                this.sound.play('ouch');
                this.eye2.setPosition(950,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye3, null, function() {
                this.sound.play('ouch');
                this.eye3.setPosition(-150,700);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye4, null, function() {
                this.sound.play('ouch');
                this.eye4.setPosition(1400,300);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye5, null, function() {
                this.sound.play('ouch');
                this.eye5.setPosition(450,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye6, null, function() {
                this.sound.play('ouch');
                this.eye6.setPosition(750,-70);
                health -= 2;
                console.log(health);
            }, this);

            this.timer = 0;
            this.timer2 = 0;
        } //end if

        else if (health >= 35 && health <= 64)  {   // phase 3
            this.phase++;
            // create eyes
            this.eye = this.physics.add.sprite(0,-100,'eye2');
            this.eye2 = this.physics.add.sprite(950,800,'eye4');
            this.eye3 = this.physics.add.sprite(-150,700,'eye2');
            this.eye4 = this.physics.add.sprite(1500,300,'eye4');
            this.eye5 = this.physics.add.sprite(450,1000,'eye2');
            this.eye6 = this.physics.add.sprite(750,-70,'eye4');
            this.eye7 = this.physics.add.sprite(0,900,'eye4');

            // player colliding with each eye
            this.player.body.collideWorldBounds = true;
            this.physics.add.collider(this.player, this.eye, null, function() {
                this.sound.play('ouch', {volume: 0.6});
                this.eye.setPosition(0,-70);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye2, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye2.setPosition(950,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye3, null, function() {
                this.sound.play('ouch', {volume: 0.6});
                this.eye3.setPosition(-150,700);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye4, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye4.setPosition(1400,300);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye5, null, function() {
                this.sound.play('ouch', {volume: 0.6});
                this.eye5.setPosition(450,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye6, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye6.setPosition(750,-70);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye7, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye7.setPosition(0,800);
                health -= 2;
                console.log(health);
            }, this);

            this.timer = 0;
            this.timer2 = 0;
        } //end if
        else if (health >= 10 && health <= 34)  {   // phase 4
            this.phase+=4;
            // create eyes
            this.eye = this.physics.add.sprite(0,-100,'eye4');
            this.eye2 = this.physics.add.sprite(950,800,'eye4');
            this.eye3 = this.physics.add.sprite(-150,700,'eye4');
            this.eye4 = this.physics.add.sprite(1500,300,'eye4');
            this.eye5 = this.physics.add.sprite(450,1000,'eye4');
            this.eye6 = this.physics.add.sprite(750,-70,'eye4');
            this.eye7 = this.physics.add.sprite(0,900,'eye4');
            this.eye8 = this.physics.add.sprite(1300,-350,'eye4');

            // player colliding with each eye
            this.player.body.collideWorldBounds = true;
            this.physics.add.collider(this.player, this.eye, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye.setPosition(0,-70);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye2, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye2.setPosition(950,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye3, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye3.setPosition(-150,700);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye4, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye4.setPosition(1400,300);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye5, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye5.setPosition(450,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye6, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye6.setPosition(750,-70);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye7, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye7.setPosition(0,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye8, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye8.setPosition(1300,-300);
                health -= 2;
                console.log(health);
            }, this);

            this.timer = 0;
            this.timer2 = 0;
        } //end if
        else if (health >= 1 && health <= 9)  {   // phase 5
            this.phase++;
            // create eyes
            this.eye = this.physics.add.sprite(0,-100,'eye4');
            this.eye2 = this.physics.add.sprite(950,800,'eye4');
            this.eye3 = this.physics.add.sprite(-150,700,'eye4');
            this.eye4 = this.physics.add.sprite(1500,300,'eye4');
            this.eye5 = this.physics.add.sprite(450,1000,'eye4');
            this.eye6 = this.physics.add.sprite(750,-70,'eye4');
            this.eye7 = this.physics.add.sprite(0,900,'eye4');
            this.eye8 = this.physics.add.sprite(1300,-350,'eye4');

            // player colliding with each eye
            this.player.body.collideWorldBounds = true;
            this.physics.add.collider(this.player, this.eye, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye.setPosition(0,-70);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye2, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye2.setPosition(950,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye3, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye3.setPosition(-150,700);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye4, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye4.setPosition(1400,300);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye5, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye5.setPosition(450,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye6, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye6.setPosition(750,-70);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye7, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye7.setPosition(0,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye8, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye8.setPosition(1300,-300);
                health -= 2;
                console.log(health);
            }, this);

            this.timer = 0;
            this.timer2 = 0;
        } //end if
    }

    update() {
        this.timer += 0.01;
        this.timer2 += 0.01;

        this.instruction.anims.play('eyeInfo', true);
        this.keyboardInstruction.anims.play('keyboardInfo',true);
            this.keyboardInstruction2.anims.play('keyboardInfo',true);
        if(this.timer2 >=2) {
            this.instruction.alpha=0;
            this.keyboardInstruction.alpha=0;
            this.keyboardInstruction2.alpha=0;
        }
        if (this.phase == 1) {
            this.player.setVelocity(0);

            this.eyeFollow(this.eye, this.player, 90);
            this.eyeFollow(this.eye2, this.player, 90);
            this.eyeFollow(this.eye3, this.player, 90);
            this.eyeFollow(this.eye4, this.player, 90);
            this.eyeFollow(this.eye5, this.player, 90);

            if (this.cursors.left.isDown)
            {
                this.player.setVelocityX(-170);
            }
            else if (this.cursors.right.isDown)
            {
                this.player.setVelocityX(170);
            }

            if (this.cursors.up.isDown)
            {
                this.player.setVelocityY(-170);
            }
            else if (this.cursors.down.isDown)
            {
                this.player.setVelocityY(170);
            }
            // switch screen
            if (this.timer >= 9) {
                if(sceneCount<2){
                    if (Math.floor(Math.random() * 2) == 0) {
                        console.log("defend");
                        sceneCount++;
                        this.scene.start("blockingGame");
                      } else if (Math.floor(Math.random() * 2) == 1) {
                        console.log("maze");
                        sceneCount++;
                        this.scene.start("mazeGame");
                      }
                }
                else {
                    this.scene.start("narrOne")
                }
            }
        }
        else if (this.phase == 2) {
            this.player.setVelocity(0);

            this.eyeFollow(this.eye, this.player, 100);
            this.eyeFollow(this.eye2, this.player, 100);
            this.eyeFollow(this.eye3, this.player, 100);
            this.eyeFollow(this.eye4, this.player, 100);
            this.eyeFollow(this.eye5, this.player, 100);
            this.eyeFollow(this.eye6, this.player, 100);

            if (this.cursors.left.isDown)
            {
                this.player.setVelocityX(-160);
            }
            else if (this.cursors.right.isDown)
            {
                this.player.setVelocityX(160);
            }

            if (this.cursors.up.isDown)
            {
                this.player.setVelocityY(-160);
            }
            else if (this.cursors.down.isDown)
            {
                this.player.setVelocityY(160);
            }
            // switch screen
            if (this.timer >= 9) {
                if (Math.floor(Math.random() * 2) == 0) {
                    console.log("defend");
                    sceneCount++;
                    this.scene.start("blockingGame");
                  } else if (Math.floor(Math.random() * 2) == 1) {
                    console.log("maze");
                    sceneCount++;
                    this.scene.start("mazeGame");
                  }
            }
            else {
                this.scene.start("narrOne")
            }
        }

        else if (this.phase == 3) {
            this.player.setVelocity(0);

            this.eyeFollow(this.eye, this.player, 110);
            this.eyeFollow(this.eye2, this.player, 110);
            this.eyeFollow(this.eye3, this.player, 110);
            this.eyeFollow(this.eye4, this.player, 110);
            this.eyeFollow(this.eye5, this.player, 110);
            this.eyeFollow(this.eye6, this.player, 110);
            this.eyeFollow(this.eye7, this.player, 110);

            if (this.cursors.left.isDown)
            {
                this.player.setVelocityX(-150);
            }
            else if (this.cursors.right.isDown)
            {
                this.player.setVelocityX(150);
            }
            if (this.cursors.up.isDown)
            {
                this.player.setVelocityY(-150);
            }
            else if (this.cursors.down.isDown)
            {
                this.player.setVelocityY(150);
            }
            // switch screen
            if (this.timer >= 9) {
                if(sceneCount<2){
                    if (Math.floor(Math.random() * 2) == 0) {
                        console.log("defend");
                        sceneCount++;
                        this.scene.start("blockingGame");
                      } else if (Math.floor(Math.random() * 2) == 1) {
                        console.log("maze");
                        sceneCount++;
                        this.scene.start("mazeGame");
                      }
                }
                else {
                    this.scene.start("narrOne")
                }
            }
        }
        else if (this.phase == 4) {
            this.player.setVelocity(0);

            this.eyeFollow(this.eye, this.player, 115);
            this.eyeFollow(this.eye2, this.player, 115);
            this.eyeFollow(this.eye3, this.player, 115);
            this.eyeFollow(this.eye4, this.player, 115);
            this.eyeFollow(this.eye5, this.player, 115);
            this.eyeFollow(this.eye6, this.player, 115);
            this.eyeFollow(this.eye7, this.player, 115);
            this.eyeFollow(this.eye8, this.player, 115);

            if (this.cursors.left.isDown)
            {
                this.player.setVelocityX(-140);
            }
            else if (this.cursors.right.isDown)
            {
                this.player.setVelocityX(140);
            }
            if (this.cursors.up.isDown)
            {
                this.player.setVelocityY(-140);
            }
            else if (this.cursors.down.isDown)
            {
                this.player.setVelocityY(140);
            }
            // switch screen
            if (this.timer >= 9) {
                if (Math.floor(Math.random() * 2) == 0) {
                    console.log("defend");
                    sceneCount++;
                    this.scene.start("blockingGame");
                  } else if (Math.floor(Math.random() * 2) == 1) {
                    console.log("maze");
                    sceneCount++;
                    this.scene.start("mazeGame");
                  }
            }
            else {
                this.scene.start("narrOne")
            }
        }
        else if (this.phase == 5) {
            this.player.setVelocity(0);

            this.eyeFollow(this.eye, this.player, 120);
            this.eyeFollow(this.eye2, this.player, 120);
            this.eyeFollow(this.eye3, this.player, 120);
            this.eyeFollow(this.eye4, this.player, 120);
            this.eyeFollow(this.eye5, this.player, 120);
            this.eyeFollow(this.eye6, this.player, 120);
            this.eyeFollow(this.eye7, this.player, 120);
            this.eyeFollow(this.eye8, this.player, 120);

            if (this.cursors.left.isDown)
            {
                this.player.setVelocityX(-135);
            }
            else if (this.cursors.right.isDown)
            {
                this.player.setVelocityX(135);
            }
            if (this.cursors.up.isDown)
            {
                this.player.setVelocityY(-135);
            }
            else if (this.cursors.down.isDown)
            {
                this.player.setVelocityY(135);
            }
            // switch screen
            if (this.timer >= 9) {
                if(sceneCount<2){
                    if (Math.floor(Math.random() * 2) == 0) {
                        console.log("defend");
                        sceneCount++;
                        this.scene.start("blockingGame");
                      } else if (Math.floor(Math.random() * 2) == 1) {
                        console.log("maze");
                        sceneCount++;
                        this.scene.start("mazeGame");
                      }
                }
                else {
                    this.scene.start("narrOne")
                }
            }
        }

    }
    eyeFollow(eye, player, speed) {
        this.physics.moveToObject(eye, player, speed);
    }
}
