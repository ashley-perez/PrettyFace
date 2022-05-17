class Filter extends Phaser.Scene {

    constructor() {
        super("filterGame")
    }

    preload() {
        this.load.image('player', './assets/noFilterFace.png');
        this.load.image('playerHeart', './assets/HeartFilterFace1.png');
        this.load.image('playerDog', './assets/DogFilterFace1.png');

        this.load.image('heartFilter', './assets/HeartFilterSelect.png');
        this.load.image('dogFilter', './assets/DogFilterSelect.png');

        this.load.image('filterbackground', './assets/testFilterBackground.png');
        this.load.image('post', './assets/postButton.png');

        this.load.image('sad', './assets/sadCharacter.png');
    }

    create() {
        // START OF PHASE 1 ---------------------------------------------------------------------------------------------------------
        if(health >= 95) {
            // mouse stuff
            this.input.setDefaultCursor('url(./assets/testFingerPointer.png), pointer');

            this.filterbackground = this.add.tileSprite
            (
                0,
                0,
                1280,
                720,
                "filterbackground"
            ).setOrigin(0, 0);

            this.player = this.physics.add.sprite(config.width/3, config.height/2, 'player', 0);
            this.heart = this.physics.add.sprite(config.width/1.2, config.height/4.8, 'heartFilter', 0).setInteractive();
            this.dog = this.physics.add.sprite(config.width/1.2, (config.height/4.8)+150, 'dogFilter', 0).setInteractive();

            this.postButton = this.physics.add.sprite(config.width/3, (config.height/2)+228, 'post',0).setInteractive();

            this.complete = false;
            this.dogFilter = false;
            this.heartFilter = false;

            // allow objects to be draggable
            this.input.setDraggable(this.heart);
            this.input.setDraggable(this.dog);

            // if input then move, updates the location of object to the pointer
            this.input.on('drag', function(pointer, gameObject, dragX, dragY) {
                gameObject.x = dragX;
                gameObject.y = dragY;
            });

            // collision detection
            this.physics.add.overlap(this.player, this.heart, null, function() {
                this.player.setTexture('playerHeart');
                this.heart.destroy();
                this.heartFilter = true;
                this.dogFilter = false;
                console.log('heart');
            }, this);

            this.physics.add.overlap(this.player, this.dog, null, function() {
                this.player.setTexture('playerDog');
                this.dog.destroy();
                this.dogFilter = true;
                this.heartFilter = false;
                console.log('dog');
            }, this);


            // click on post button
            this.postButton.on('pointerdown', function(pointer) {
                // can only proceed after using a filter
                if (this.dogFilter == true || this.heartFilter == true) {
                    this.complete = true;
                }
                console.log('CLICKKKKK');
            }, this);

            this.timer = 0;
        }//end
        else if(health >= 80 && health <=94) {
            // mouse stuff
            this.input.setDefaultCursor('url(./assets/testFingerPointer.png), pointer');

            this.filterbackground = this.add.tileSprite
            (
                0,
                0,
                1280,
                720,
                "filterbackground"
            ).setOrigin(0, 0);

            this.player = this.physics.add.sprite(config.width/3, config.height/2, 'player', 0);
            this.heart = this.physics.add.sprite(config.width/1.2, config.height/4.8, 'heartFilter', 0).setInteractive();
            this.dog = this.physics.add.sprite(config.width/1.2, (config.height/4.8)+150, 'dogFilter', 0).setInteractive();

            this.postButton = this.physics.add.sprite(config.width/3, (config.height/2)+228, 'post',0).setInteractive();

            this.complete = false;
            this.dogFilter = false;
            this.heartFilter = false;

            // allow objects to be draggable
            this.input.setDraggable(this.heart);
            this.input.setDraggable(this.dog);

            // if input then move, updates the location of object to the pointer
            this.input.on('drag', function(pointer, gameObject, dragX, dragY) {
                gameObject.x = dragX;
                gameObject.y = dragY;
            });

            // collision detection
            this.physics.add.overlap(this.player, this.heart, null, function() {
                this.player.setTexture('playerHeart');
                this.heart.destroy();
                this.heartFilter = true;
                this.dogFilter = false;
                console.log('heart');
            }, this);

            this.physics.add.overlap(this.player, this.dog, null, function() {
                this.player.setTexture('playerDog');
                this.dog.destroy();
                this.dogFilter = true;
                this.heartFilter = false;
                console.log('dog');
            }, this);


            // click on post button
            this.postButton.on('pointerdown', function(pointer) {
                // can only proceed after using a filter
                if (this.dogFilter == true || this.heartFilter == true) {
                    this.complete = true;
                }
                console.log('CLICKKKKK');
            }, this);

            this.timer = 0;
        }//end

    }

    update() {

        // 1
        if(health >=95 ) {
            console.log(health);
            console.log("filter 95 +");
            if(this.complete == true) {
                this.timer += 0.01;
            }
            if (this.timer >= 3) {
                // pass data to new scene
                // will affect the comments
                if (this.dogFilter == true) {
                    this.scene.start('commentGame', {dog:true, heart:false});
                }
                else if (this.heartFilter == true) {
                    this.scene.start('commentGame', {dog:false, heart:true});
                }
            }
        } // end gamephase 1
        else if(health >=80 && health <=94 ) {
            console.log(health);
            console.log("filter 95 +");
            if(this.complete == true) {
                this.timer += 0.01;
            }
            if (this.timer >= 3) {
                // pass data to new scene
                // will affect the comments
                if (this.dogFilter == true) {
                    this.scene.start('commentGame', {dog:true, heart:false});
                }
                else if (this.heartFilter == true) {
                    this.scene.start('commentGame', {dog:false, heart:true});
                }
            }
        } // end gamephase 1
    }

}