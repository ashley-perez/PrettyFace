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
    }

    create() {
        // movement this.cursors
        this.cursors = this.input.keyboard.createCursorKeys();
        this.tileSize = 20;

        this.player = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'heart').setScale(0.4);
        this.maze1 = this.physics.add.sprite(game.config.width/4.78504673, 312, 'maze1');
        this.maze2 = this.physics.add.sprite(game.config.width/2.52714709, 613.00, 'maze2');
        this.maze3 = this.physics.add.sprite(852, 613.00, 'maze3');
        this.maze4 = this.physics.add.sprite(909, 312.00, 'maze4');

        this.maze1.body.allowGravity = false; this.maze1.body.immovable = true;
        this.maze2.body.immovable = true; this.maze2.body.allowGravity = false;
        this.maze3.body.immovable = true; this.maze3.body.allowGravity = false;
        this.maze4.body.immovable = true; this.maze4.body.allowGravity = false;


        this.maze = this.add.group();
        this.maze.add(this.maze1); this.maze.add(this.maze2); this.maze.add(this.maze3); this.maze.add(this.maze4);

        this.player.body.collideWorldBounds = true;

        this.physics.add.collider(this.player, this.maze);

    }

    update() {
        this.player.setVelocity(0);

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
    }


}