class Maze extends Phaser.Scene {
    constructor() {
        super("mazeGame")
    }

    preload() {
        this.load.image('heart', './assets/heart.png');
        // this.load.atlas('girl_atlas', './assets/testAtlas.png', './assets/testWalk.json');
        this.load.image('maze', './assets/testMaze.png');
    }

    create() {
        // movement this.cursors
        console.log("hello");
        this.cursors = this.input.keyboard.createCursorKeys();
        this.tileSize = 20;

        this.player = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'heart').setScale(0.4);
        this.maze = this.add.group();
        for(let i = 0; i < game.config.width; i+=this.tileSize) {
            let groundTile = this.physics.add.sprite(i, game.config.height-this.tileSize, 'maze').setOrigin(0);
            groundTile.body.immovable = true;
            groundTile.body.allowGravity = false;
            this.maze.add(groundTile);
        }


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