class Eyes extends Phaser.Scene {
    constructor() {
        super("eyesGame")
    }

    preload() {
        this.load.audio('eyesMusic', './assets/eyes.wav');
        this.load.audio('score_sound', './assets/score_sound.mp3');
        this.load.audio('ouch', './assets/ouch.mp3');
        this.load.audio('scream', './assets/scream.mp3');
        this.load.image('heartNormal', './assets/heart.png');
        this.load.image('heartSad', './assets/heartFetal.png');
        this.load.image('eye2', './assets/eyeP2.png');
        this.load.image('eye4', './assets/eyeP4.png');
        this.load.atlas('eyeInstruction', './assets/instructEyes.png', './assets/instructEyes.json');
        this.load.atlas('keyboardClick', './assets/keyboardClick.png','./assets/keyboard_click.json');
        this.load.image('gameBg1', "./assets/gameBg1.png");
        this.load.image('gameBg2', "./assets/gameBg2.png");
        this.load.image('gameBg3', "./assets/gameBg3.png");
        this.load.image('gameBg4', "./assets/gameBg4.png");
        this.load.image('gameBg5', "./assets/gameBg5.png");
    }

    create() {
        var scoreSound = this.sound.add('score_sound', {volume: 0.5});
        scoreSound.play();
        // scary_music.setVolume(0.8);
        // music.setVolume(0);
        // phase5_music.setVolume(0);

        this.phase = 0;

        // movement this.cursors
        this.cursors = this.input.keyboard.createCursorKeys();

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

        if (phaseCount == 1)  {    // phase 1
            this.phase = 0;
            this.add.tileSprite(0, 0, 1280, 720, 'gameBg1').setOrigin(0, 0).setDepth(0);
            this.eyePlayer = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'heartNormal');
            // create eyes
            this.eye = this.physics.add.sprite(0,-100,'eye2');
            this.eye2 = this.physics.add.sprite(950,800,'eye2');
            this.eye3 = this.physics.add.sprite(-150,700,'eye2');
            this.eye4 = this.physics.add.sprite(1500,300,'eye2');
            this.eye5 = this.physics.add.sprite(450,1000,'eye2');

            // eyePlayer colliding with each eye
            this.eyePlayer.body.collideWorldBounds = true;
            this.physics.add.collider(this.eyePlayer, this.eye, null, function() {
                this.sound.play('ouch', {volume: 0.5});
                this.eye.setPosition(0,-70);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye2, null, function() {
                this.sound.play('ouch', {volume: 0.5});
                this.eye2.setPosition(950,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye3, null, function() {
                this.sound.play('ouch', {volume: 0.5});
                this.eye3.setPosition(-150,700);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye4, null, function() {
                this.sound.play('ouch', {volume: 0.5});
                this.eye4.setPosition(1400,300);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye5, null, function() {
                this.sound.play('ouch', {volume: 0.5});
                this.eye5.setPosition(450,800);
                health -= 2;
                console.log(health);
            }, this);

            this.timer = 0;
            this.timer2 = 0;
        } //end if

        else if (phaseCount == 2)  {   // phase 2
            this.phase = 1;
            this.add.tileSprite(0, 0, 1280, 720, 'gameBg2').setOrigin(0, 0).setDepth(0);
            this.eyePlayer = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'heartNormal');

            // create eyes
            this.eye = this.physics.add.sprite(0,-100,'eye2');
            this.eye2 = this.physics.add.sprite(950,800,'eye2');
            this.eye3 = this.physics.add.sprite(-150,700,'eye2');
            this.eye4 = this.physics.add.sprite(1500,300,'eye2');
            this.eye5 = this.physics.add.sprite(450,1000,'eye2');
            this.eye6 = this.physics.add.sprite(750,-70,'eye2');

            // eyePlayer colliding with each eye
            this.eyePlayer.body.collideWorldBounds = true;
            this.physics.add.collider(this.eyePlayer, this.eye, null, function() {
                this.sound.play('ouch');
                this.eye.setPosition(0,-70);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye2, null, function() {
                this.sound.play('ouch');
                this.eye2.setPosition(950,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye3, null, function() {
                this.sound.play('ouch');
                this.eye3.setPosition(-150,700);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye4, null, function() {
                this.sound.play('ouch');
                this.eye4.setPosition(1400,300);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye5, null, function() {
                this.sound.play('ouch');
                this.eye5.setPosition(450,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye6, null, function() {
                this.sound.play('ouch');
                this.eye6.setPosition(750,-70);
                health -= 2;
                console.log(health);
            }, this);

            this.timer = 0;
            this.timer2 = 0;
        } //end if

        else if (phaseCount == 3)  {   // phase 3
            this.phase = 2;
            this.add.tileSprite(0, 0, 1280, 720, 'gameBg3').setOrigin(0, 0).setDepth(0);
            this.eyePlayer = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'heartNormal');
            // create eyes
            this.eye = this.physics.add.sprite(0,-100,'eye2');
            this.eye2 = this.physics.add.sprite(950,800,'eye4');
            this.eye3 = this.physics.add.sprite(-150,700,'eye2');
            this.eye4 = this.physics.add.sprite(1500,300,'eye4');
            this.eye5 = this.physics.add.sprite(450,1000,'eye2');
            this.eye6 = this.physics.add.sprite(750,-70,'eye4');
            this.eye7 = this.physics.add.sprite(0,900,'eye4');

            // eyePlayer colliding with each eye
            this.eyePlayer.body.collideWorldBounds = true;
            this.physics.add.collider(this.eyePlayer, this.eye, null, function() {
                this.sound.play('ouch', {volume: 0.6});
                this.eye.setPosition(0,-70);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye2, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye2.setPosition(950,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye3, null, function() {
                this.sound.play('ouch', {volume: 0.6});
                this.eye3.setPosition(-150,700);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye4, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye4.setPosition(1400,300);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye5, null, function() {
                this.sound.play('ouch', {volume: 0.6});
                this.eye5.setPosition(450,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye6, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye6.setPosition(750,-70);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye7, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye7.setPosition(0,800);
                health -= 2;
                console.log(health);
            }, this);

            this.timer = 0;
            this.timer2 = 0;
        } //end if
        else if (phaseCount == 4)  {   // phase 4
            this.phase = 3;
            this.add.tileSprite(0, 0, 1280, 720, 'gameBg4').setOrigin(0, 0).setDepth(0);
            this.eyePlayer = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'heartSad');
            // create eyes
            this.eye = this.physics.add.sprite(0,-100,'eye4');
            this.eye2 = this.physics.add.sprite(950,800,'eye4');
            this.eye3 = this.physics.add.sprite(-150,700,'eye4');
            this.eye4 = this.physics.add.sprite(1500,300,'eye4');
            this.eye5 = this.physics.add.sprite(450,1000,'eye4');
            this.eye6 = this.physics.add.sprite(750,-70,'eye4');
            this.eye7 = this.physics.add.sprite(0,900,'eye4');
            this.eye8 = this.physics.add.sprite(1300,-350,'eye4');

            // eyePlayer colliding with each eye
            this.eyePlayer.body.collideWorldBounds = true;
            this.physics.add.collider(this.eyePlayer, this.eye, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye.setPosition(0,-70);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye2, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye2.setPosition(950,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye3, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye3.setPosition(-150,700);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye4, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye4.setPosition(1400,300);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye5, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye5.setPosition(450,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye6, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye6.setPosition(750,-70);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye7, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye7.setPosition(0,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye8, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye8.setPosition(1300,-300);
                health -= 2;
                console.log(health);
            }, this);

            this.timer = 0;
            this.timer2 = 0;
        } //end if
        else if (phaseCount == 5)  {   // phase 5
            this.phase = 4;
            this.add.tileSprite(0, 0, 1280, 720, 'gameBg5').setOrigin(0, 0).setDepth(0);
            this.eyePlayer = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'heartSad');
            // create eyes
            this.eye = this.physics.add.sprite(0,-100,'eye4');
            this.eye2 = this.physics.add.sprite(950,800,'eye4');
            this.eye3 = this.physics.add.sprite(-150,700,'eye4');
            this.eye4 = this.physics.add.sprite(1500,300,'eye4');
            this.eye5 = this.physics.add.sprite(450,1000,'eye4');
            this.eye6 = this.physics.add.sprite(750,-70,'eye4');
            this.eye7 = this.physics.add.sprite(0,900,'eye4');
            this.eye8 = this.physics.add.sprite(1300,-350,'eye4');

            // eyePlayer colliding with each eye
            this.eyePlayer.body.collideWorldBounds = true;
            this.physics.add.collider(this.eyePlayer, this.eye, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye.setPosition(0,-70);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye2, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye2.setPosition(950,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye3, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye3.setPosition(-150,700);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye4, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye4.setPosition(1400,300);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye5, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye5.setPosition(450,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye6, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye6.setPosition(750,-70);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye7, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye7.setPosition(0,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.eyePlayer, this.eye8, null, function() {
                this.sound.play('scream', {volume: 0.6});
                this.eye8.setPosition(1300,-300);
                health -= 2;
                console.log(health);
            }, this);

            this.timer = 0;
            this.timer2 = 0;
        } //end if
        // add bg
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
        if (this.phase == 0) {
            this.eyePlayer.setVelocity(0);

            this.eyeFollow(this.eye, this.eyePlayer, 100);
            this.eyeFollow(this.eye2, this.eyePlayer, 100);
            this.eyeFollow(this.eye3, this.eyePlayer, 100);
            this.eyeFollow(this.eye4, this.eyePlayer, 100);
            this.eyeFollow(this.eye5, this.eyePlayer, 100);

            if (this.cursors.left.isDown)
            {
                this.eyePlayer.setVelocityX(-170);
            }
            else if (this.cursors.right.isDown)
            {
                this.eyePlayer.setVelocityX(170);
            }

            if (this.cursors.up.isDown)
            {
                this.eyePlayer.setVelocityY(-170);
            }
            else if (this.cursors.down.isDown)
            {
                this.eyePlayer.setVelocityY(170);
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
        else if (this.phase == 1) {
            this.eyePlayer.setVelocity(0);

            this.eyeFollow(this.eye, this.eyePlayer, 120);
            this.eyeFollow(this.eye2, this.eyePlayer, 120);
            this.eyeFollow(this.eye3, this.eyePlayer, 120);
            this.eyeFollow(this.eye4, this.eyePlayer, 120);
            this.eyeFollow(this.eye5, this.eyePlayer, 120);
            this.eyeFollow(this.eye6, this.eyePlayer, 120);

            if (this.cursors.left.isDown)
            {
                this.eyePlayer.setVelocityX(-160);
            }
            else if (this.cursors.right.isDown)
            {
                this.eyePlayer.setVelocityX(160);
            }

            if (this.cursors.up.isDown)
            {
                this.eyePlayer.setVelocityY(-160);
            }
            else if (this.cursors.down.isDown)
            {
                this.eyePlayer.setVelocityY(160);
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
            this.eyePlayer.setVelocity(0);

            this.eyeFollow(this.eye, this.eyePlayer, 125);
            this.eyeFollow(this.eye2, this.eyePlayer, 125);
            this.eyeFollow(this.eye3, this.eyePlayer, 125);
            this.eyeFollow(this.eye4, this.eyePlayer, 125);
            this.eyeFollow(this.eye5, this.eyePlayer, 125);
            this.eyeFollow(this.eye6, this.eyePlayer, 125);
            this.eyeFollow(this.eye7, this.eyePlayer, 125);

            if (this.cursors.left.isDown)
            {
                this.eyePlayer.setVelocityX(-150);
            }
            else if (this.cursors.right.isDown)
            {
                this.eyePlayer.setVelocityX(150);
            }
            if (this.cursors.up.isDown)
            {
                this.eyePlayer.setVelocityY(-150);
            }
            else if (this.cursors.down.isDown)
            {
                this.eyePlayer.setVelocityY(150);
            }// switch screen
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
        else if (this.phase == 3) {
            this.eyePlayer.setVelocity(0);

            this.eyeFollow(this.eye, this.eyePlayer, 135);
            this.eyeFollow(this.eye2, this.eyePlayer, 135);
            this.eyeFollow(this.eye3, this.eyePlayer, 135);
            this.eyeFollow(this.eye4, this.eyePlayer, 135);
            this.eyeFollow(this.eye5, this.eyePlayer, 135);
            this.eyeFollow(this.eye6, this.eyePlayer, 135);
            this.eyeFollow(this.eye7, this.eyePlayer, 135);
            this.eyeFollow(this.eye8, this.eyePlayer, 135);

            if (this.cursors.left.isDown)
            {
                this.eyePlayer.setVelocityX(-140);
            }
            else if (this.cursors.right.isDown)
            {
                this.eyePlayer.setVelocityX(140);
            }
            if (this.cursors.up.isDown)
            {
                this.eyePlayer.setVelocityY(-140);
            }
            else if (this.cursors.down.isDown)
            {
                this.eyePlayer.setVelocityY(140);
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
            this.eyePlayer.setVelocity(0);

            this.eyeFollow(this.eye, this.eyePlayer, 140);
            this.eyeFollow(this.eye2, this.eyePlayer, 140);
            this.eyeFollow(this.eye3, this.eyePlayer, 140);
            this.eyeFollow(this.eye4, this.eyePlayer, 140);
            this.eyeFollow(this.eye5, this.eyePlayer, 140);
            this.eyeFollow(this.eye6, this.eyePlayer, 140);
            this.eyeFollow(this.eye7, this.eyePlayer, 140);
            this.eyeFollow(this.eye8, this.eyePlayer, 140);

            if (this.cursors.left.isDown)
            {
                this.eyePlayer.setVelocityX(-135);
            }
            else if (this.cursors.right.isDown)
            {
                this.eyePlayer.setVelocityX(135);
            }
            if (this.cursors.up.isDown)
            {
                this.eyePlayer.setVelocityY(-135);
            }
            else if (this.cursors.down.isDown)
            {
                this.eyePlayer.setVelocityY(135);
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
    eyeFollow(eye, eyePlayer, speed) {
        this.physics.moveToObject(eye, eyePlayer, speed);
    }
}
