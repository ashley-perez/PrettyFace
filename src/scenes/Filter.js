class Filter extends Phaser.Scene {

    constructor() {
        super("filterGame")
    }

    preload() {
        this.load.image('player', './assets/placeholderCharacter.png');
        this.load.image('filter', './assets/placeholderFilter.png');
        this.load.image('dogFilter', './assets/otherFilter.png');
        this.load.image('sad', './assets/sadCharacter.png');

        this.load.image('filterbackground', './assets/testFilterBackGround.png');
    }

    create() {
        if(gamePhase == 1) {
        // mouse stuff
        this.input.setDefaultCursor('url(./assets/testFingerPointer.png), pointer');


        // this.normbackground = this.add.tileSprite
        // (
        //     0,
        //     0,
        //     1280,
        //     720,
        //     "background"
        // ).setOrigin(0, 0);

        this.filterbackground = this.add.tileSprite
        (
            0,
            0,
            1280,
            720,
            "filterbackground"
        ).setOrigin(0, 0);

        this.player = this.physics.add.sprite(config.width/3, config.height/2, 'player', 0);
        this.filter = this.physics.add.sprite(config.width/1.2, config.height/4.8, 'filter', 0).setInteractive();
        this.otherFilter = this.physics.add.sprite(config.width/1.2, (config.height/4.8)+150, 'dogFilter', 0).setInteractive();

        this.complete = false;
        this.dogFilter = false;
        this.heartFilter = false;

        // allow objects to be draggable
        this.input.setDraggable(this.filter);
        this.input.setDraggable(this.otherFilter);

        // if input then move, updates the location of object to the pointer
        this.input.on('drag', function(pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        // collision detection
        this.physics.add.collider(this.player, this.filter, null, function() {
            this.player.setTexture('sad');
            this.filter.destroy();
            this.complete = true;
            this.heartFilter = true;
            console.log('heart');
        }, this);

        this.physics.add.overlap(this.player, this.otherFilter, null, function() {
            this.player.setTexture('sad');
            this.otherFilter.destroy();
            this.complete = true;
            this.dogFilter = true;
            console.log('dog');
        }, this);

        //just a fake timer for now
        this.time = 0;
    }//end gamephase 1


    }

    update() {

        if(gamePhase==1) {

        if(this.complete == true) {
            this.time += 0.01;
        }


        // if (this.time >= 1) {
        //     this.scene.start("commentGame");

        if (this.time >= 3) {
            // pass data to new scene
            // will affect the comments
            if (this.dogFilter == true) {
                this.scene.start('commentGame', {dog:true, heart:false});
            }
            else if (this.heartFilter == true) {
                this.scene.start('commentGame', {dog:false, heart:true});
            }

        }
    }//end gamephase 1
    }
    }
// }