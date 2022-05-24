class Eyes extends Phaser.Scene {
    constructor() {
        super("eyesGame")
    }

    preload() {
        this.load.audio('eyesMusic', './assets/eyes.wav');
        this.load.audio('sob', './assets/sob.wav');
        this.load.audio('scream', './assets/scream.mp3');
        this.load.image('player', './assets/heart.png');
        this.load.image('eye2', './assets/eyeP2.png');
        this.load.image('eye4', './assets/eyeP4.png');
        this.load.atlas('eyeInstruction', './assets/instructEyes.png', './assets/instructEyes.json');

    }

    create() {
        //this.music.pause();
        //this.eyesMusic = this.sound.play('eyesMusic');
        this.phase2 = false;
        this.phase3 = false;
        this.phase4 = true;

        // movement this.cursors
        this.cursors = this.input.keyboard.createCursorKeys();

        this.player = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'player');

        this.instruction = this.physics.add.sprite(config.width/2, config.height/30, 'eyeInstruction', 0).setScale(2);

        if (health >= 87)  {
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
                this.sound.play('sob');
                this.eye.setPosition(0,-70);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye2, null, function() {
                this.sound.play('sob');
                this.eye2.setPosition(950,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye3, null, function() {
                this.sound.play('sob');
                this.eye3.setPosition(-150,700);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye4, null, function() {
                this.sound.play('sob');
                this.eye4.setPosition(1400,300);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye5, null, function() {
                this.sound.play('sob');
                this.eye5.setPosition(450,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye6, null, function() {
                this.sound.play('sob');
                this.eye6.setPosition(750,-70);
                health -= 2;
                console.log(health);
            }, this);

            this.phase2 = true;

            this.timer = 0;
            this.timer2 = 0;
        } //end if

        else if (health >= 65 && health <= 86)  {
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
            this.phase2 = false;
            this.phase3 = true;

            // create eyes
            this.eye = this.physics.add.sprite(0,-100,'eye2');
            this.eye2 = this.physics.add.sprite(950,800,'eye2');
            this.eye3 = this.physics.add.sprite(-150,700,'eye2');
            this.eye4 = this.physics.add.sprite(1500,300,'eye2');
            this.eye5 = this.physics.add.sprite(450,1000,'eye2');
            this.eye6 = this.physics.add.sprite(750,-70,'eye2');
            this.eye7 = this.physics.add.sprite(0,900,'eye2');
            this.eye8 = this.physics.add.sprite(1300,-350,'eye2');

            // player colliding with each eye
            this.player.body.collideWorldBounds = true;
            this.physics.add.collider(this.player, this.eye, null, function() {
                this.sound.play('sob');
                this.eye.setPosition(0,-70);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye2, null, function() {
                this.sound.play('sob');
                this.eye2.setPosition(950,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye3, null, function() {
                this.sound.play('sob');
                this.eye3.setPosition(-150,700);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye4, null, function() {
                this.sound.play('sob');
                this.eye4.setPosition(1400,300);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye5, null, function() {
                this.sound.play('sob');
                this.eye5.setPosition(450,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye6, null, function() {
                this.sound.play('sob');
                this.eye6.setPosition(750,-70);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye7, null, function() {
                this.sound.play('sob');
                this.eye7.setPosition(0,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye8, null, function() {
                this.sound.play('sob');
                this.eye8.setPosition(1300,-300);
                health -= 2;
                console.log(health);
            }, this);

            this.timer = 0;
            this.timer2 = 0;
        } //end if

        else if (health >= 35 && health <= 64)  {
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

            this.phase3 = false;
            this.phase4 = true;

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
                this.sound.play('scream');
                this.eye.setPosition(0,-70);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye2, null, function() {
                this.sound.play('scream');
                this.eye2.setPosition(950,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye3, null, function() {
                this.sound.play('scream');
                this.eye3.setPosition(-150,700);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye4, null, function() {
                this.sound.play('scream');
                this.eye4.setPosition(1400,300);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye5, null, function() {
                this.sound.play('scream');
                this.eye5.setPosition(450,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye6, null, function() {
                this.sound.play('scream');
                this.eye6.setPosition(750,-70);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye7, null, function() {
                this.sound.play('scream');
                this.eye7.setPosition(0,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye8, null, function() {
                this.sound.play('scream');
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

        if (this.phase2 == true) {
            this.timer2 += 0.01;
            this.instruction.anims.play('eyeInfo', true);
            if(this.timer2 >=2) {
            this.instruction.alpha=0;
            }
            this.player.setVelocity(0);

            this.eyeFollow(this.eye, this.player, 80);
            this.eyeFollow(this.eye2, this.player, 80);
            this.eyeFollow(this.eye3, this.player, 80);
            this.eyeFollow(this.eye4, this.player, 80);
            this.eyeFollow(this.eye5, this.player, 80);
            this.eyeFollow(this.eye6, this.player, 80);

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
        else if (this.phase3 == true) {
            this.timer2 += 0.01;
            this.instruction.anims.play('eyeInfo', true);
            if(this.timer2 >=2) {
            this.instruction.alpha=0;
            }
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

        else if (this.phase4 == true) {
            this.timer2 += 0.01;
            this.instruction.anims.play('eyeInfo', true);
            if(this.timer2 >=2) {
            this.instruction.alpha=0;
            }
            this.player.setVelocity(0);

            this.eyeFollow(this.eye, this.player, 135);
            this.eyeFollow(this.eye2, this.player, 135);
            this.eyeFollow(this.eye3, this.player, 135);
            this.eyeFollow(this.eye4, this.player, 135);
            this.eyeFollow(this.eye5, this.player, 135);
            this.eyeFollow(this.eye6, this.player, 135);
            this.eyeFollow(this.eye7, this.player, 135);
            this.eyeFollow(this.eye8, this.player, 135);

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
        //this.eyesMusic.pause();
        //music.resume();
    }

    eyeFollow(eye, player, speed) {
        this.physics.moveToObject(eye, player, speed);
    }
}
