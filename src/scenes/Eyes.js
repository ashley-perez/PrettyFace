class Eyes extends Phaser.Scene {
    constructor() {
        super("eyesGame")
    }

    preload() {
        this.load.image('player', './assets/noFilterFace.png');
        this.load.image('eye2', './assets/eyeP2.png');
        this.load.image('eye4', './assets/eyeP4.png');
    }

    create() {
        if (health >= 95)  {
            // movement this.cursors
            this.cursors = this.input.keyboard.createCursorKeys();

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
                this.destroySprite(this.eye);
            }, this);
            this.physics.add.collider(this.player, this.eye2, null, function() {
                this.destroySprite(this.eye2);
            }, this);
            this.physics.add.collider(this.player, this.eye3, null, function() {
                this.destroySprite(this.eye3);
            }, this);
            this.physics.add.collider(this.player, this.eye4, null, function() {
                this.destroySprite(this.eye4);
            }, this);
            this.physics.add.collider(this.player, this.eye5, null, function() {
                this.destroySprite(this.eye5);
            }, this);

            this.timer = 0;
        }

        else if (health >= 80 && health <=94)  {
            // movement this.cursors
            this.cursors = this.input.keyboard.createCursorKeys();

            this.player = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'player').setScale(0.2);
            this.eye = this.physics.add.sprite(300,200,'eye2');
            this.eye2 = this.physics.add.sprite(750,100,'eye2');
            this.eye3 = this.physics.add.sprite(850,500,'eye2');
            this.eye4 = this.physics.add.sprite(300,600,'eye2');

            this.disappear = false; // check if eye destroy

            // player colliding with each eye
            this.player.body.collideWorldBounds = true;
            this.physics.add.collider(this.player, this.eye, null, function() {
                this.destroySprite(this.eye);
            }, this);
            this.physics.add.collider(this.player, this.eye2, null, function() {
                this.destroySprite(this.eye2);
            }, this);
            this.physics.add.collider(this.player, this.eye3, null, function() {
                this.destroySprite(this.eye3);
            }, this);
            this.physics.add.collider(this.player, this.eye4, null, function() {
                this.destroySprite(this.eye4);
            }, this);

            this.timer = 0;
        }
    }

    update() {
        this.timer += 0.01;

        if (health >= 95) {
            this.player.setVelocity(0);

            if(this.disappear == false || this.e == false)
                this.eyeFollow(this.eye, this.player, 75);

            if(this.disappear == false || this.e2 == false)
                this.eyeFollow(this.eye2, this.player, 75);

            if(this.disappear == false || this.e3 == false)
                this.eyeFollow(this.eye3, this.player, 75);

            if(this.disappear == false || this.e4 == false)
                this.eyeFollow(this.eye4, this.player, 75);

            if(this.disappear == false || this.e5 == false)
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

    destroySprite(sprite) {
        sprite.destroy(true);
        this.disappear = true;

        if(sprite == this.eye)
            this.e = true;
        if(sprite == this.eye2)
            this.e2 = true;
        if(sprite == this.eye3)
            this.e3 = true;
        if(sprite == this.eye4)
            this.e4 = true;
        if(sprite == this.eye5)
            this.e5 = true;
    }

    eyeFollow(eye, player, speed) {
        this.physics.moveToObject(eye, player, speed);
    }
}
