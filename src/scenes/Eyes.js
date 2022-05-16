class Eyes extends Phaser.Scene {
    constructor() {
        super("eyesGame")
    }

    preload() {
        this.load.image('player', './assets/noFilterFace.png');
        this.load.image('eye', './assets/placeHolderEye.png');
    }

    create() {
        if (gamePhase == 2)  {
            // movement this.cursors
            this.cursors = this.input.keyboard.createCursorKeys();

            this.eyeGroup = this.add.group();

<<<<<<< HEAD
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
=======
            this.player = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'player').setScale(0.2);
            this.eye = this.physics.add.sprite(300,400,'eye');
            this.eye2 = this.physics.add.sprite(950,400,'eye'); 

            this.eyeGroup.add(this.eye);
            this.eyeGroup.add(this.eye2);

            this.player.body.collideWorldBounds = true;

            this.physics.add.collider(this.player, this.eyeGroup, null, function() {
                console.log("COLLISION");
            }, this);

            this.timer = 0;
        }

        if (gamePhase == 3)  {
            // movement this.cursors
            this.cursors = this.input.keyboard.createCursorKeys();

            this.eyeGroup = this.add.group();

            this.player = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'player').setScale(0.2);
            this.eye = this.physics.add.sprite(300,100,'eye');
            this.eye2 = this.physics.add.sprite(950,100,'eye'); 
            this.eye3 = this.physics.add.sprite(950,600,'eye'); 
            this.eye4 = this.physics.add.sprite(300,600,'eye'); 

            this.eyeGroup.add(this.eye);
            this.eyeGroup.add(this.eye2);
            this.eyeGroup.add(this.eye3);
            this.eyeGroup.add(this.eye4);

            this.player.body.collideWorldBounds = true;

            this.physics.add.collider(this.player, this.eyeGroup, null, function() {
                console.log("COLLISION");
            }, this);

            this.timer = 0;
        }
    }

    update() {
        console.log(gamePhase);
        if (gamePhase == 2) {
            this.player.setVelocity(0);
            this.eyeFollow(this.eye, this.player, 70);
            this.eyeFollow(this.eye2, this.player, 70);
>>>>>>> e141434bc720803a5df257988d8d6ecfc2e3efe3

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

            this.timer += 0.01;
            if (this.timer >= 9) {
                this.scene.start('narrOne');
            }
        }
        else if (gamePhase == 3) {
            this.player.setVelocity(0);
            this.eyeFollow(this.eye, this.player,  85);
            this.eyeFollow(this.eye2, this.player, 85);
            this.eyeFollow(this.eye3, this.player, 85);
            this.eyeFollow(this.eye4, this.player, 85);

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

            this.timer += 0.01;
            if (this.timer >= 9) {
                this.scene.start('mazeGame');
            }
        }
    }

    eyeFollow(eye, player, speed) {
        this.physics.moveToObject(eye, player, speed);
    }

}