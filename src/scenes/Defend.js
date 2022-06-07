var secondProjectile = false;

class Defend extends Phaser.Scene {
    constructor() {
        super("blockingGame")
    }

    preload() {
        this.load.image('bg', './assets/')
        this.load.audio('sob', './assets/sob.wav');
        this.load.image('heart', './assets/heart.png');
        this.load.image('heartFetal', './assets/heartFetal.png');
        this.load.image('block', './assets/block.png');
        this.load.image("color_bg", "./assets/gameBG.png");
        this.load.image("black_bg", "./assets/gameBg5.png");
        this.load.image("scary_bg","./assets/finalScene1.png");
        this.load.image("scary_bg2","./assets/finalScene2.png");
        // this.load.image('enemy', './assets/badPhone.png');
        this.load.image('missile', './assets/phone_attack1.png');
        this.load.image('missile2', './assets/phone_attack2.png');
        this.load.image('missile3', './assets/phone_attack3.png');
        this.load.atlas('enemy', './assets/badPhone.png', './assets/bad_phone.json');
        this.load.atlas('defendInstruction', './assets/instructDefend.png', './assets/instructDefend.json');
        this.load.atlas('keyboardClick', './assets/keyboardClick.png','./assets/keyboard_click.json');
        this.load.audio("defend", "./assets/block.mp3");
        this.load.audio("hurt", "./assets/hurt.mp3");

    }

    create() {
        if(phaseCount<=3){
            var scoreSound = this.sound.add('score_sound', {volume: 0.5});
            scoreSound.play();
            scary_music.setVolume(0.8);
            music.setVolume(0);
            phase5_music.setVolume(0);
        }
        else if(phaseCount==4){
            var scoreSound = this.sound.add('score_sound', {volume: 0.3});
            scoreSound.play();
            scary_music.setVolume(0.8);
            music.setVolume(0);
            phase5_music.setVolume(0);
        }
        else if(phaseCount == 5){
            scary_music.setVolume(0.5);
            music.setVolume(0);
            phase5_music.setVolume(0.7);
        }

        this.shieldNoise = this.sound.add('defend', {volume: 2});
        this.damageNoise = this.sound.add('hurt', {volume:0.7});

        this.background = this.physics.add.sprite(config.width, config.height, "color_bg", 0).setScale(2).setDepth(-1); //full color
        this.background2 = this.physics.add.sprite(config.width, config.height, "black_bg", 0).setScale(2).setDepth(-2); //dark scary
        this.background3 = this.physics.add.sprite(config.width, config.height, "scary_bg", 0).setScale(2).setDepth(-3); //dark scary
        

        this.anims.create({
            key: 'defendInfo',
            frames: this.anims.generateFrameNames('defendInstruction', {
                prefix: 'frame_',
                start: 1,
                end: 5,
                suffix: '',
                zeroPad: 2
            }),
            frameRate: 20,
            repeat: -1,
        });

        this.defendInstruction = this.physics.add.sprite(config.width/2, config.height/30, 'defendInstruction', 0).setScale(2).setDepth(1);

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


        // create the keys we will be using
        this.cursors = this.input.keyboard.createCursorKeys();

        this.shooting = false;
        this.shootingTwo = false;

        this.projectileVelocity = 0;

        // create multiple sprites and adds them to a group
        if (phaseCount <= 3) {
            this.playerGroup = this.physics.add.group({
                key: 'heart',
                repeat: 8,
                setXY: {
                    x: 900,
                    y: 50,
                    stepY: 75
                }
            });
        }
        else {
            this.playerGroup = this.physics.add.group({
                key: 'heartFetal',
                repeat: 8,
                setXY: {
                    x: 900,
                    y: 50,
                    stepY: 75
                }
            });
        }

        // item that blocks/defends the other sprites
        this.block = this.physics.add.sprite(820, config.height/2, 'block');
        this.block.body.collideWorldBounds = true;
        this.Speed = 0;

        this.anims.create({
            key: 'phone',
            frames: this.anims.generateFrameNames('enemy', {
                prefix: 'frame_',
                start: 1,
                end: 3,
                suffix: '',
                zeroPad: 2
            }),
            frameRate: 7,
            repeat: -1,
        });

        // phase 1 health
        if (phaseCount == 1) {
            this.background.alpha = 1;
            // path for otherBlock to follow
            this.pathOne =  new Phaser.Curves.Path(100, 60).lineTo(100,650);
            this.phoneOne = this.add.follower(this.pathOne, 0, 0, 'enemy');
            this.phoneOne.anims.play('phone');
            // get object to follow a path
            this.phoneOne.startFollow({
                positionOnPath: true,
                duration: 3000, // how long the object will take to get to end point
                yoyo: true,
                repeat: -1,
                rotateToPath: false,
                verticalAdjust: true
            });
            this.projectileVelocity = 300;
            this.Speed = 5;
        }
        else if (phaseCount == 2) {
            this.background.alpha = 0.9;
            this.background2.alpha = 0.7;
            // path for otherBlock to follow
            this.pathOne =  new Phaser.Curves.Path(100, 60).lineTo(100,650);
            this.phoneOne = this.add.follower(this.pathOne, 0, 0, 'enemy');
            this.phoneOne.anims.play('phone');
            this.phoneOne.startFollow({
                positionOnPath: true,
                duration: 2000, // how long the object will take to get to end point
                yoyo: true,
                repeat: -1,
                rotateToPath: false,
                verticalAdjust: true
            });
            this.projectileVelocity = 350;
            this.Speed = 4;
        }
        else if (phaseCount == 3) {
            this.background.alpha = 0.69;
            this.background2.alpha = 0.43;
            // path for otherBlock to follow
            this.pathOne =  new Phaser.Curves.Path(100, 60).lineTo(100,650);
            this.phoneOne = this.add.follower(this.pathOne, 0, 0, 'enemy');
            this.phoneOne.anims.play('phone');
            this.phoneOne.startFollow({
                positionOnPath: true,
                duration: 1800, // how long the object will take to get to end point
                yoyo: true,
                repeat: -1,
                rotateToPath: false,
                verticalAdjust: true
            });
            this.projectileVelocity = 400;
            this.Speed = 3.5;
        }
        else if (phaseCount == 4) {
            this.background.alpha = 0.5;
            this.background2.alpha = 0.5;
            this.pathOne =  new Phaser.Curves.Path(100, 60).lineTo(100,355);
            this.pathTwo = new Phaser.Curves.Path(100,355).lineTo(100,650);
            this.phoneOne = this.add.follower(this.pathOne, 0, 0, 'enemy');
            this.phoneTwo = this.add.follower(this.pathTwo, 0,0, 'enemy');
            this.phoneOne.anims.play('phone');
            this.phoneTwo.anims.play('phone');

            this.phoneOne.startFollow({
                positionOnPath: true,
                duration: 3000, // how long the object will take to get to end point
                yoyo: true,
                repeat: -1,
                rotateToPath: false,
                verticalAdjust: true
            });
            this.phoneTwo.startFollow({
                positionOnPath: true,
                duration: 3000, // how long the object will take to get to end point
                yoyo: true,
                repeat: -1,
                rotateToPath: false,
                verticalAdjust: true
            });

            this.projectileVelocity = 400;
            secondProjectile = true;
            this.Speed = 3.2;
        }
        else if (phaseCount == 5) {
            this.background.alpha = 0.5;
            this.background2.alpha = 0.6;
            this.pathOne =  new Phaser.Curves.Path(100, 60).lineTo(100,355);
            this.pathTwo = new Phaser.Curves.Path(100,355).lineTo(100,650);
            this.phoneOne = this.add.follower(this.pathOne, 0, 0, 'enemy');
            this.phoneTwo = this.add.follower(this.pathTwo, 0,0, 'enemy');
            this.phoneOne.anims.play('phone');
            this.phoneTwo.anims.play('phone');

            this.phoneOne.startFollow({
                positionOnPath: true,
                duration: 3000, // how long the object will take to get to end point
                yoyo: true,
                repeat: -1,
                rotateToPath: false,
                verticalAdjust: true
            });
            this.phoneTwo.startFollow({
                positionOnPath: true,
                duration: 3000, // how long the object will take to get to end point
                yoyo: true,
                repeat: -1,
                rotateToPath: false,
                verticalAdjust: true
            });

            this.projectileVelocity = 400;
            secondProjectile = true;
            this.Speed = 3;
        }

        this.random = 0;

        this.projectile = this.physics.add.sprite(-100, -100, 'missile');
        this.projectile.setScale(1.3);

        if (secondProjectile == true) {
            this.projectileTwo = this.physics.add.sprite(-100, -100, 'missile');
            this.projectileTwo.setScale(1.3);

            this.physics.add.overlap(this.playerGroup, this.projectileTwo, this.hitObject2, null, this);
            this.physics.add.overlap(this.block, this.projectileTwo, this.blockedProjectile2, null, this);
        }


        // collision between projectile and breakable object
        this.physics.add.overlap(this.playerGroup, this.projectile, this.hitObject, null, this);

        // collision between projectile and blocker
        this.physics.add.overlap(this.block, this.projectile, this.blockedProjectile, null, this);

        this.battery = this.physics.add.sprite(this.block.x, this.block.y-100, "battery1", 0).setDepth(2);



        this.timer=0;
        this.timer2=0;
    }

    update() {
        //a(health);
        this.battery.x= this.block.x+10;
        this.battery.y=this.block.y-50;
        if(health >=87){
            this.battery.setTexture("battery1");
            //a("87+");
          }
          else if (health <= 86 && health >= 65) {
            this.battery.setTexture("battery2");
            //a("65+");
          }
          else if(health <= 64 && health >= 35) {
            this.battery.setTexture("battery3");
            //a("35+");
          }
          else if (health <= 34 && health >= 10) {
            this.battery.setTexture("battery4");
            //a("10+");
          }
          else if (health <= 9 && health >= 1) {
            this.battery.setTexture("battery5");
            //a("5+");
          }
          else {
            this.battery.setTexture("battery6");
            //a("1+");
          }
        this.timer += 0.01;
        this.timer2 += 0.01;
        this.timer += 0.01;
        this.timer2 += 0.01;

        // go to next scene when timer is over
        if (this.timer >= 12) {
            if(sceneCount < 2){
                if (Math.floor(Math.random() * 2) == 0) {
                    //a("eyes");
                    sceneCount++;
                    this.scene.start("eyesGame");
                }
                else if (Math.floor(Math.random() * 2) == 1) {
                    //a("maze");
                    sceneCount++;
                    this.scene.start("mazeGame");
                }
            }
            else {
                this.scene.start("narrOne")
            }
        }

        this.defendInstruction.anims.play('defendInfo', true);
        this.keyboardInstruction.anims.play('keyboardInfo',true);
        this.keyboardInstruction2.anims.play('keyboardInfo',true);

        if(this.timer2 >= 5) {
            this.defendInstruction.alpha=0;
            this.keyboardInstruction.alpha=0;
            this.keyboardInstruction2.alpha=0;
        }

        if (this.cursors.up.isDown) {
            this.block.y -= this.Speed;
        }
        else if (this.cursors.down.isDown) {
            this.block.y += this.Speed;
        }

        // shoot the projectile from the moving block
        if (this.shooting == false) {
            this.projectile.x = this.phoneOne.x + 50;
            this.projectile.y = this.phoneOne.y;
            this.projectile.setVelocityX(this.projectileVelocity);
            this.shooting = true;
            // this.coolDown = 0;
        }

        // if projectile is off screen then reset
        if (this.shooting == true && this.projectile.x >= 920) {
            this.shooting = false;
        }

        if (secondProjectile == true) {
            if (this.shootingTwo == false) {
                this.projectileTwo.x = this.phoneTwo.x + 50;
                this.projectileTwo.y = this.phoneTwo.y;
                this.projectileTwo.setVelocityX(this.projectileVelocity);
                this.shootingTwo = true;
            }

            // if projectile is off screen then reset
            if (this.shootingTwo == true && this.projectileTwo.x >= 920) {
                this.shootingTwo = false;
            }
        }

    }

    hitObject (projectile, player) {
        // still has some bugs
        this.random= Math.floor(Math.random() * 3);
        if(this.random == 0) {
            //a(this.random);
            projectile.setTexture('missile');
        }
        else if(this.random == 1) {
            //a(this.random);
            projectile.setTexture('missile2');
        }
        else if (this.random == 2) {
            //a(this.random);
            projectile.setTexture('missile3');
        }
        projectile.x = -100;
        projectile.y = -100;
        player.disableBody(true,true);
        this.shooting = false;
        this.coolDown = 0;
        health = health - 2;
        this.damageNoise.play();
    }

    blockedProjectile (block, projectile) {
        //still has some bugs
        this.random= Math.floor(Math.random() * 3);
        if(this.random == 0) {
            //a(this.random);
            projectile.setTexture('missile');
        }
        else if(this.random == 1) {
            //a(this.random);
            projectile.setTexture('missile2');
        }
        else if (this.random == 2) {
            //a(this.random);
            projectile.setTexture('missile3');
        }
        projectile.x = -100;
        projectile.y = -100
        this.shooting = false;
        this.coolDown = 0;

        this.shieldNoise.play();
        
    }

    hitObject2 (projectile, player) {
        // still has some bugs
        this.random= Math.floor(Math.random() * 3);
        if(this.random == 0) {
            //a(this.random);
            projectile.setTexture('missile');
        }
        else if(this.random == 1) {
            //a(this.random);
            projectile.setTexture('missile2');
        }
        else if (this.random == 2) {
            //a(this.random);
            projectile.setTexture('missile3');
        }
        projectile.x = -100;
        projectile.y = -100;
        player.disableBody(true,true);
        this.shootingTwo = false;
        health = health - 2;
        this.damageNoise.play();
    }

    blockedProjectile2 (block, projectile) {
        //still has some bugs
        this.random= Math.floor(Math.random() * 3);
        if(this.random == 0) {
            //a(this.random);
            projectile.setTexture('missile');
        }
        else if(this.random == 1) {
            //a(this.random);
            projectile.setTexture('missile2');
        }
        else if (this.random == 2) {
            //a(this.random);
            projectile.setTexture('missile3');
        }
        projectile.x = -100;
        projectile.y = -100
        this.shootingTwo = false;
        this.shieldNoise.play();
    }

}
