class Eyes extends Phaser.Scene {
    constructor() {
        super("eyesGame")
    }

    preload() {
        this.load.image('heart', './assets/heart.png');
        this.load.image('eye', './assets/eye.png');
    }

    create() {
        // movement this.cursors
        this.cursors = this.input.keyboard.createCursorKeys();

        this.player = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'heart').setScale(0.4);
        this.eye = this.physics.add.sprite(300,400,'eye');

        this.player.body.collideWorldBounds = true;
        this.complete = true;
        this.timer = 0;
    }

    update() {
        if(this.complete == true) {
            this.timer += 0.01;
        }
        if (this.timer >= 1) {
            this.scene.start("restaurantGame");// restaurant game
            gamePhase = 2;
        }
        this.player.setVelocity(0);
        this.eyeFollow(this.eye, this.player, 120);

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

    eyeFollow(eye, player, speed) {
        this.physics.moveToObject(eye, player, speed);
    }

}