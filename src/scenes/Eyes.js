class Eyes extends Phaser.Scene {
    constructor() {
        super("eyesGame")
    }

    preload() {
        this.load.image('player', './assets/noFilterFace.png');
        this.load.image('eye2', './assets/eyeP2.png');
        this.load.image('eye4', './assets/eyeP4.png');
        this.load.atlas('eyeInstruction', './assets/instructEyes.png', './assets/instructEyes.json');

    }

    create() {
        if (health >= 95)  {
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
            // movement this.cursors
            this.cursors = this.input.keyboard.createCursorKeys();

            this.instruction = this.physics.add.sprite(config.width/2, config.height/30, 'instruction', 0).setScale(2);

            this.player = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'player').setScale(0.2);
            this.eye = this.physics.add.sprite(0,-100,'eye2');
            this.eye2 = this.physics.add.sprite(950,800,'eye2');
            this.eye3 = this.physics.add.sprite(-150,700,'eye2');
            this.eye4 = this.physics.add.sprite(1400,300,'eye4');
            this.eye5 = this.physics.add.sprite(450,1100,'eye2');

            // check each eye exist
            this.e = false;
            this.e2 = false;
            this.e3 = false;
            this.e4 = false;
            this.e5 = false;

            this.disappear = false; // check if eye destroy

            // player colliding with each eye
            this.player.body.collideWorldBounds = true;
            this.physics.add.collider(this.player, this.eye, null, function() {
                this.eye.setPosition(0,-100);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye2, null, function() {
                this.eye2.setPosition(950,800);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye3, null, function() {
                this.eye3.setPosition(-150,700);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye4, null, function() {
                this.eye4.setPosition(1400,300);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye5, null, function() {
                this.eye5.setPosition(450,1100);
                health -= 2;
                console.log(health);
            }, this);

            this.timer = 0;
            this.timer2 = 0;
        }//end if

        else if (health >= 80 && health <=94)  {
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
            // movement this.cursors
            this.cursors = this.input.keyboard.createCursorKeys();

            this.instruction = this.physics.add.sprite(config.width/2, config.height/30, 'instruction', 0).setScale(2);

            this.player = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'player').setScale(0.2);
            this.eye = this.physics.add.sprite(0,-200,'eye2');
            this.eye2 = this.physics.add.sprite(950,800,'eye2');
            this.eye3 = this.physics.add.sprite(-450,800,'eye2');
            this.eye4 = this.physics.add.sprite(1500,300,'eye2');
            this.eye5 = this.physics.add.sprite(450,1100,'eye2');

            // check each eye exist
            this.e = false;
            this.e2 = false;
            this.e3 = false;
            this.e4 = false;
            this.e5 = false;

            this.disappear = false; // check if eye destroy

            // player colliding with each eye
            this.player.body.collideWorldBounds = true;
            this.physics.add.collider(this.player, this.eye, null, function() {
                this.reviveSprite(this.eye);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye2, null, function() {
                this.reviveSprite(this.eye2);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye3, null, function() {
                this.reviveSprite(this.eye3);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye4, null, function() {
                this.reviveSprite(this.eye4);
                health -= 2;
                console.log(health);
            }, this);
            this.physics.add.collider(this.player, this.eye5, null, function() {
                this.reviveSprite(this.eye5);
                health -= 2;
                console.log(health);
            }, this);

            this.timer = 0;
            this.timer2 = 0;
        }
    }

    update() {
        this.timer += 0.01;

        if (health >= 95) {
            this.timer2 += 0.01;
            this.instruction.anims.play('eyeInfo', true);
            if(this.timer2 >=2) {
            this.instruction.alpha=0;
            }
            this.player.setVelocity(0);

            this.eyeFollow(this.eye, this.player, 75);

            this.eyeFollow(this.eye2, this.player, 75);

            this.eyeFollow(this.eye3, this.player, 75);

            this.eyeFollow(this.eye4, this.player, 75);

            this.eyeFollow(this.eye5, this.player, 75);

            if (this.cursors.left.isDown)
            {
                this.player.setVelocityX(-200);
            }
            else if (this.cursors.right.isDown)
            {
                this.player.setVelocityX(200);
            }

            if (this.cursors.up.isDown)
            {
                this.player.setVelocityY(-200);
            }
            else if (this.cursors.down.isDown)
            {
                this.player.setVelocityY(200);
            }


            if (this.timer >= 9) {
                this.scene.start('narrOne');
                console.log("narrr");
            }
        }
        else if (health >=80 && health <=94) {
            this.timer2 += 0.01;
            this.instruction.anims.play('idle', true);
            if(this.timer2 >=2) {
            this.instruction.alpha=0;
            }
            this.player.setVelocity(0);

            if(this.disappear == false || this.e == false)
                this.eyeFollow(this.eye, this.player, 90);

            if(this.disappear == false || this.e2 == false)
                this.eyeFollow(this.eye2, this.player, 90);

            if(this.disappear == false || this.e3 == false)
                this.eyeFollow(this.eye3, this.player, 90);

            if(this.disappear == false || this.e4 == false)
                this.eyeFollow(this.eye4, this.player, 90);

            if(this.disappear == false || this.e5 == false)
                this.eyeFollow(this.eye5, this.player, 90);

            if (this.cursors.left.isDown)
            {
                this.player.setVelocityX(-180);
            }
            else if (this.cursors.right.isDown)
            {
                this.player.setVelocityX(180);
            }

            if (this.cursors.up.isDown)
            {
                this.player.setVelocityY(-180);
            }
            else if (this.cursors.down.isDown)
            {
                this.player.setVelocityY(180);
            }

            this.timer += 0.01;
            if (this.timer >= 9) {
                this.scene.start('narrOne'); // restaurant game
            }
        }
    }

    eyeFollow(eye, player, speed) {
        this.physics.moveToObject(eye, player, speed);
    }
}
