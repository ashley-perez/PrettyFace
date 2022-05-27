class Maze extends Phaser.Scene {
    constructor() {
        super("mazeGame")
    }

    preload() {
        this.load.audio('hm', './assets/hm.mp3');
        this.load.audio('hmm', './assets/hmm.mp3');

        this.load.image('heart', './assets/heart.png');
        this.load.image('mark', './assets/mazeMark.png');
        // this.load.atlas('girl_atlas', './assets/testAtlas.png', './assets/testWalk.json');
        {this.load.image('maze1', './assets/testMaze1.png');
        this.load.image('maze2', './assets/testMaze2.png');
        this.load.image('maze3', './assets/testMaze3.png');
        this.load.image('maze4', './assets/testMaze1.png');
        this.load.image('maze5', './assets/testMaze4.png');
        this.load.image('maze6', './assets/testMaze5.png');
        this.load.image('maze7', './assets/testMaze6.png');
        this.load.image('maze8', './assets/testMaze7.png');
        this.load.image('maze9', './assets/testMaze8.png');
        this.load.image('maze10', './assets/testMaze9.png');
        this.load.image('maze11', './assets/testMaze10.png');
        this.load.image('maze12', './assets/testMaze11.png');
        this.load.image('maze13', './assets/testMaze12.png');
        this.load.image('maze14', './assets/testMaze13.png');
        this.load.image('maze15', './assets/testMaze14.png');
        this.load.image('maze16', './assets/testMaze15.png');
        this.load.image('maze17', './assets/testMaze16.png');
        this.load.image('mazeEnd', './assets/ideal_body.png');
    }//maze images
        this.load.image('mirror', './assets/mirror.png');
        this.load.image('mirror1', './assets/mirror(filled1).png');
        this.load.image('mirror2', './assets/mirror(filled2).png');

        this.load.atlas('mazeInstruction', './assets/instructMaze.png', './assets/instructMaze.json');
    }

    create() {

        // this.createAnimations();
        this.wordArray1 = ['not bad not bad', 'my shoulders look broad \nthough.I should shoot\n from another angle.', 'next post I will'];//meh confidence
        this.wordArray2 = ['are they right?', 'Am I becoming too wide?', 'I think Ill skip dinner\ntonight...'];//bad confidence
        this.wordArray3 = ['I dont look like them', 'My lips are too small', 'Injections will fix it'];//bad confidence

            this.index=0;
            // if(health >=95) {
            this.anims.create({
                key: 'maze',
                frames: this.anims.generateFrameNames('mazeInstruction', {
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
            this.markMn = this.physics.add.sprite(config.width/2.066, config.height/1.29, 'mark');

            this.instruction = this.physics.add.sprite(config.width/2, config.height/30, 'mazeInstruction', 0).setScale(2).setDepth(1);
            this.mirror = this.physics.add.sprite(config.width/2.057, config.height/1.425, 'mirror', 0).setScale(1.2).setDepth(1);
            this.mirror2 = this.physics.add.sprite(config.width/2.54, config.height/1.853, 'mirror', 0).setScale(1.2).setDepth(1);


            this.player = this.physics.add.sprite(760, 622, 'heart').setScale(0.7);
            this.player.body.collideWorldBounds = true;

            // this.cameras.main.setScroll(this.player.x, this.player.y);
            this.cameras.main.setBounds(0, 0, config.width, config.height);

            this.cameras.main.startFollow(this.player);

            {this.maze1 = this.physics.add.sprite(game.config.width/4.78504673, 312, 'maze1');
            this.maze2 = this.physics.add.sprite(game.config.width/2.52714709, 613.00, 'maze2');
            this.maze3 = this.physics.add.sprite(852, 613.00, 'maze3');
            this.maze4 = this.physics.add.sprite(909, 312.00, 'maze4');
            this.maze5 = this.physics.add.sprite(581.50, 506.50, 'maze5');
            this.maze6 = this.physics.add.sprite(400.50 , 387.50 , 'maze6');
            this.maze7 = this.physics.add.sprite(621.50, 434.00, 'maze7');
            this.maze8 = this.physics.add.sprite(767.00 , 387.50 , 'maze8');
            this.maze9 = this.physics.add.sprite(439.00, 266.50 , 'maze9');
            this.maze10 = this.physics.add.sprite(717.00, 266.50, 'maze10');
            this.maze11 = this.physics.add.sprite(520.50 ,193.50 , 'maze11');
            this.maze12 = this.physics.add.sprite(717.00 ,192.50 , 'maze12');
            this.maze13 = this.physics.add.sprite(394.00 ,144.50 , 'maze13');
            this.maze14 = this.physics.add.sprite(658.50 ,141.50 , 'maze14');
            this.maze15 = this.physics.add.sprite(856.50 ,141.50 , 'maze15');
            this.maze16 = this.physics.add.sprite(621.50 ,77.50 , 'maze16');
            this.maze17 = this.physics.add.sprite(547.00 ,12.50 , 'maze17');
            this.mazeEnd = this.physics.add.sprite(856.50  ,30 , 'mazeEnd').setScale(0.5);

            this.markMn.body.allowGravity = false; this.markMn.body.immovable = true;
            this.maze1.body.allowGravity = false; this.maze1.body.immovable = true;
            this.maze2.body.immovable = true; this.maze2.body.allowGravity = false;
            this.maze3.body.immovable = true; this.maze3.body.allowGravity = false;
            this.maze4.body.immovable = true; this.maze4.body.allowGravity = false;
            this.maze5.body.immovable = true; this.maze5.body.allowGravity = false;
            this.maze6.body.immovable = true; this.maze6.body.allowGravity = false;
            this.maze7.body.immovable = true; this.maze7.body.allowGravity = false;
            this.maze8.body.immovable = true; this.maze8.body.allowGravity = false;
            this.maze9.body.immovable = true; this.maze9.body.allowGravity = false;
            this.maze10.body.immovable = true; this.maze10.body.allowGravity = false;
            this.maze11.body.immovable = true; this.maze11.body.allowGravity = false;
            this.maze12.body.immovable = true; this.maze12.body.allowGravity = false;
            this.maze13.body.immovable = true; this.maze13.body.allowGravity = false;
            this.maze14.body.immovable = true; this.maze14.body.allowGravity = false;
            this.maze15.body.immovable = true; this.maze15.body.allowGravity = false;
            this.maze16.body.immovable = true; this.maze16.body.allowGravity = false;
            this.maze17.body.immovable = true; this.maze17.body.allowGravity = false;
            this.mazeEnd.body.allowGravity = false;
        }//maze sprites and collisions all collapsed

            this.maze = this.add.group();
            {this.maze.add(this.maze1);this.maze.add(this.maze2);this.maze.add(this.maze3);this.maze.add(this.maze4);this.maze.add(this.maze5);this.maze.add(this.maze6);
            this.maze.add(this.maze7);this.maze.add(this.maze8);this.maze.add(this.maze9);this.maze.add(this.maze10);this.maze.add(this.maze11);this.maze.add(this.maze12);
            this.maze.add(this.maze13);this.maze.add(this.maze14);this.maze.add(this.maze15);this.maze.add(this.maze16);this.maze.add(this.maze17);
            }//add to maze group

            if(health >= 77) {
            this.physics.add.collider(this.player, this.maze);
            }//no damage loss
            else if(health <= 76) {
                this.physics.add.collider(this.player, this.maze, null, function(){
                    health= health - 2;
                    console.log(health);
                    if(this.cursors.left.isDown){
                        // this.maze.flash(250);
                        this.player.x = this.player.x + 20;
                        this.timer3 = 50;
                        this.cameras.main.flash(200);
                        this.cameras.main.shake(200);
                        // this.owwBox = this.add.text(this.player.x, (this.player.y+100), '', {color: '#FFFFFF'}).setWordWrapWidth(500); // empty '' needs to be there!!
                    }
                    else if(this.cursors.right.isDown) {
                        this.player.x = this.player.x - 20;
                        this.timer3 = 50;
                        this.cameras.main.flash(200);
                        this.cameras.main.shake(200);
                        // this.owwBox = this.add.text(this.player.x, (this.player.y+100), '', {color: '#FFFFFF'}).setWordWrapWidth(500); // empty '' needs to be there!!

                    }
                    else if(this.cursors.up.isDown) {
                        this.player.y = this.player.y + 20;
                        this.timer3 = 50;
                        this.cameras.main.flash(200);
                        this.cameras.main.shake(200);
                        // this.owwBox = this.add.text(this.player.x, (this.player.y+100), '', {color: '#FFFFFF'}).setWordWrapWidth(500); // empty '' needs to be there!!

                    }
                    else if(this.cursors.down.isDown) {
                        this.player.y = this.player.y - 20;
                        this.timer3 = 50;
                        this.cameras.main.flash(200);
                        this.cameras.main.shake(200);
                        // this.owwBox = this.add.text(this.player.x, (this.player.y+100), '', {color: '#FFFFFF'}).setWordWrapWidth(500); // empty '' needs to be there!!

                    }

                }, this);
            }//too sad and now hurt when hit walls

            // when player reaches end of maze do something
            this.physics.add.collider(this.player, this.mazeEnd, null, function() {
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
                        this.scene.start("narrOne");
                }
            }, this);

            this.followP = false;
            this.timer=300;//narration timer
            this.timer2 = 0;//instruction timer
            this.timer3= 50;
            // when player collides with thing write a textbox near the player!!
            this.physics.add.overlap(this.player, this.markMn, this.writeStuff, null, this);//collide with invisible objects
            this.testBox = this.add.text(this.player.x, this.player.y, '', {color: '#FFFFFF'}).setWordWrapWidth(500); // empty '' needs to be there!!

        // }//end
            this.playerPositionX = this.player.x;
            this.playerPositionY = this.player.y;
    }

    update() {
        this.playerPositionX = this.player.x;
        this.playerPositionY = this.player.y;

        // console.log(health);
        if(this.timer3 >0){
            this.timer3 = this.timer3 - 1;
        }//freeze the player
            this.timer2 += 0.01;//instruction timer
            this.instruction.anims.play('maze', true);
            if(this.timer2 >=1.5) {
                this.instruction.alpha=0;
                this.cameras.main.setZoom(2.5);
            }//instructions
            this.player.body.setVelocity(0);
            // console.log(this.timer3);
            if(this.timer3 <=0) {//unfreeze playe to move
            if (this.cursors.left.isDown)
            {
                this.player.setVelocityX(-100);
            }
            else if (this.cursors.right.isDown)
            {
                this.player.setVelocityX(100);
            }

            if (this.cursors.up.isDown)
            {
                this.player.setVelocityY(-100);
            }
            else if (this.cursors.down.isDown)
            {
                this.player.setVelocityY(100);
            }//movement
        }
            if(this.followP==true) {
                this.testBox.x = this.player.x;
                this.testBox.y = this.player.y;
                this.timer--;
            }//text follow the player
            if(this.timer <=0) {
                this.followP=false;
                this.testBox.text='';
                this.timer=this.timerMax;
            }//count down timer
           console.log(this.timer);

    }

    writeStuff(player, object) {
        this.testBox.alpha=1;
        this.followP=true;
        this.testBox.text = '';
        if(health >=87) {
        this.typewriteText(this.wordArray1[this.index], this.testBox, 90);
        if(this.index==0){
            this.mirror.setTexture('mirror1');
            this.sound.play('hm');
            object.x=config.width/2.542;
            object.y=config.height/1.6;
            this.timer = 200;
        }
        else if(this.index==1){
            this.mirror2.setTexture('mirror2');
            this.sound.play('hmm');
            object.x=config.width/1.5;
            object.y=config.height/2.2;
            this.timer = 400;
        }
        else if(this.index==2){
            object.x=config.width/-100;
            object.y=config.height/-100;
            this.timer = 250;

        }
        this.index++;
        }//Positive comments
        else if(health >=65 && health <=86) {
            this.typewriteText(this.wordArray2[this.index], this.testBox, 90);
            if(this.index==0){
                this.mirror.setTexture('mirror1');
                this.sound.play('hm');
                object.x=config.width/2.542;
                object.y=config.height/1.6;
                this.timer = 200;
            }
            else if(this.index==1){
                this.mirror2.setTexture('mirror2');
                this.sound.play('hmm');
                object.x=config.width/1.5;
                object.y=config.height/2.2;
                this.timer = 400;
            }
            else if(this.index==2){
                object.x=config.width/-100;
                object.y=config.height/-100;
                this.timer = 250;

            }
            this.index++;
            }//Positive comments
    }

    typewriteText(text, textbox, speed) {
        console.log('the passed in text: ' + text);
        const length = text.length; // how many times the loop should repeat (based on sentence length)
        let i = 0;
        //textDone = false;
        this.time.addEvent({
            callback: () => {
                textbox.text += text[i]
                i++

                // when there is no more to write set bool to false
                if (i == length) {
                    // textbox.text='';
                    this.complete = true;
                    // textbox = '';
                }
            },
            repeat: length - 1,
            delay: speed // typing speed, big numbers = slower text, small = faster
        });
    }
}