class Defend extends Phaser.Scene {
    constructor() {
        super("blockingGame")
    }
    
    preload() {
        this.load.image('heart', './assets/heart.png');
        this.load.image('block', './assets/block.png');
        this.load.image('missle', './assets/tempProjectile.png');
    }

    create() {
        // create the keys we will be using
        this.cursors = this.input.keyboard.createCursorKeys();

        this.shooting = false;
        this.coolDown = 0;
        this.randomNum = 0;

        // create multiple sprites and adds them to a group
        this.playerGroup = this.physics.add.group({
            key: 'heart',
            repeat: 6,
            setXY: {
                x: 900,
                y: 50,
                stepY: 100
            }
        });

        // item that blocks/defends the other sprites
        this.block = this.physics.add.sprite(820, config.height/2, 'block');
        this.Speed = 5;

        // path for otherBlock to follow
        this.path =  new Phaser.Curves.Path(60, 60).lineTo(60,650);
        this.otherBlock = this.add.follower(this.path, 0, 0, 'block');

        // get object to follow a path
        this.otherBlock.startFollow({
            positionOnPath: true,
            duration: 5000, // how long the object will take to get to end point
            yoyo: true,
            repeat: -1,
            rotateToPath: false,
            verticalAdjust: true
        });

        this.projectile = this.physics.add.sprite(-100, -100, 'missle');
        this.projectile.setScale(0.5);

        // collision between projectile and breakable object
        this.physics.add.overlap(this.playerGroup, this.projectile, this.hitObject, null, this);

        // collision between projectile and blocker
        this.physics.add.overlap(this.block, this.projectile, this.blockedProjectile, null, this);


        


    }
    
    update() {
        if (this.cursors.up.isDown) {
            this.block.y -= this.Speed;
        }
        else if (this.cursors.down.isDown) {
            this.block.y += this.Speed;
        }

        this.coolDown += 0.00001;
        this.num = this.randomNuminRange(2,5);


        // shoot the projectile from the moving block
        if (this.coolDown >= this.randomNum && this.shooting == false) {
            this.projectile.x = this.otherBlock.x + 50;
            this.projectile.y = this.otherBlock.y;
            this.projectile.setVelocityX(300);
            this.shooting = true;
            this.coolDown = 0;
        }
        
        // if projectile is off screen then reset
        if (this.shooting == true && this.projectile.x >= 1280) {
            this.shooting = false;
            this.coolDown = 0;
        }
        
    }

    hitObject (projectile, player) {
        projectile.x = -100;
        projectile.y = -100;
        player.disableBody(true,true);
        this.shooting = false;
        this.coolDown = 0;
    }

    blockedProjectile (block, projectile) {
        projectile.x = -100;
        projectile.y = -100
        this.shooting = false;
        this.coolDown = 0;
    }

    // round function that is returns a number in the range of min and max (inclusive)
    // function credit: https://tinyurl.com/roundingNums
    randomNuminRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }


}

