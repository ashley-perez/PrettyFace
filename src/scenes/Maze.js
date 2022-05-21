class Maze extends Phaser.Scene {
    constructor() {
        super("mazeGame")
    }

    preload() {

        this.load.image('heart', './assets/heart.png');
        // this.load.atlas('girl_atlas', './assets/testAtlas.png', './assets/testWalk.json');
        this.load.image('maze1', './assets/testMaze1.png');
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
        this.load.image('mazeEnd', './assets/testMazeEnd.png');

        this.load.atlas('mazeInstruction', './assets/instructMaze.png', './assets/instructMaze.json');
    }

    create() {
        if(health >=95) {
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
            this.countT = 5;

            this.instruction = this.physics.add.sprite(config.width/2, config.height/30, 'mazeInstruction', 0).setScale(2).setDepth(1);

            this.player = this.physics.add.sprite(755, 622, 'heart').setScale(0.9);
            this.maze1 = this.physics.add.sprite(game.config.width/4.78504673, 312, 'maze1');
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
            this.mazeEnd = this.physics.add.sprite(856.50  ,16.88 , 'mazeEnd').setScale(0.5);

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


            this.maze = this.add.group();
            this.maze.add(this.maze1);this.maze.add(this.maze2);this.maze.add(this.maze3);this.maze.add(this.maze4);this.maze.add(this.maze5);this.maze.add(this.maze6);
            this.maze.add(this.maze7);this.maze.add(this.maze8);this.maze.add(this.maze9);this.maze.add(this.maze10);this.maze.add(this.maze11);this.maze.add(this.maze12);
            this.maze.add(this.maze13);this.maze.add(this.maze14);this.maze.add(this.maze15);this.maze.add(this.maze16);this.maze.add(this.maze17);

            this.player.body.collideWorldBounds = true;

            this.physics.add.collider(this.player, this.maze);

            // when player reaches end of maze do something
            this.physics.add.collider(this.player, this.mazeEnd, null, function() {
                // this.countT = 0;
                // console.log(this.countT);
                this.scene.start("narrOne");
            }, this);
            this.timer2 = 0;
        }//end

        else if (health >= 80 && health <=94)  {
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
            this.countT = 5;

            this.instruction = this.physics.add.sprite(config.width/2, config.height/30, 'mazeInstruction', 0).setScale(2).setDepth(1);

            this.player = this.physics.add.sprite(755, 622, 'heart').setScale(0.4);
            this.maze1 = this.physics.add.sprite(game.config.width/4.78504673, 312, 'maze1');
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
            this.mazeEnd = this.physics.add.sprite(856.50  ,16.88 , 'mazeEnd');

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


            this.maze = this.add.group();
            this.maze.add(this.maze1);this.maze.add(this.maze2);this.maze.add(this.maze3);this.maze.add(this.maze4);this.maze.add(this.maze5);this.maze.add(this.maze6);
            this.maze.add(this.maze7);this.maze.add(this.maze8);this.maze.add(this.maze9);this.maze.add(this.maze10);this.maze.add(this.maze11);this.maze.add(this.maze12);
            this.maze.add(this.maze13);this.maze.add(this.maze14);this.maze.add(this.maze15);this.maze.add(this.maze16);this.maze.add(this.maze17);

            this.player.body.collideWorldBounds = true;

            this.physics.add.collider(this.player, this.maze);

            // when player reaches end of maze do something
            this.physics.add.collider(this.player, this.mazeEnd, null, function() {
                // this.countT = 0;
                // console.log(this.countT);
                this.scene.start("narrOne");
            }, this);
            this.timer2 = 0;
        }//end
    }

    update() {
        if(health >= 95) {
            this.timer2 += 0.01;
            this.instruction.anims.play('maze', true);
            if(this.timer2 >=2) {
            this.instruction.alpha=0;
            }
            this.player.body.setVelocity(0);
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
        }//end
        else if (health >= 80 && health <=94)  {
            this.timer2 += 0.01;
            this.instruction.anims.play('maze', true);
            if(this.timer2 >=2) {
            this.instruction.alpha=0;
            }
            this.player.body.setVelocity(0);
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
        }//end

    }

}