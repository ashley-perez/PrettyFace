var player, cursors, eyes;
class Eyes extends Phaser.Scene {
    constructor() {
        super("eyesGame")
    }

    preload() {
        this.load.image('heart', './assets/heart.png');
        this.load.image('eye', './assets/eye.png');
    }

    create() {
        // movement cursors
        cursors = this.input.keyboard.createCursorKeys();

        player = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'heart').setScale(0.4);
        eyes = this.physics.add.sprite(300,400,'eye');

        player.body.collideWorldBounds = true;

        // eyes follow player ?
        //this.physics.moveToObject(this.eyes, this.player, 60);

    }

    update() {
        player.setVelocity(0);

        if (cursors.left.isDown)
        {
            player.setVelocityX(-200);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(200);
        }

        if (cursors.up.isDown)
        {
            player.setVelocityY(-200);
        }
        else if (cursors.down.isDown)
        {
            player.setVelocityY(200);
        }
    }

}