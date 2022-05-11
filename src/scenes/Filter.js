class Filter extends Phaser.Scene {

    constructor() {
        super("filterGame")
    }

    preload() {
        this.load.image('player', './assets/placeholderCharacter.png');
        this.load.image('filter', './assets/placeholderFilter.png');
        this.load.image('sad', './assets/sadCharacter.png');

        // this.load.image('background', './assets/testBackGround.png');
        this.load.image('filterbackground', './assets/testFilterBackGround.png');

        // this.load.image('fingerPoint', './assets/testFingerPointer.png');
    }

    create() {
        // mouse stuff
        // this.input.mouse.capture = true;
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

        this.complete = false;

        this.input.setDraggable(this.filter); // allow object to be draggable

        // if input then move, updates the location of object to the pointer("mouse")
        this.input.on('drag', function(pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        // collisoin detection
        this.physics.add.overlap(this.player, this.filter, null, function() {
            console.log("hello");
            this.player.setTexture('sad');
            this.filter.destroy();
            this.complete = true;
        }, this);

        //just a fake timer for now
        this.time = 0;

    }

    update() {
        if(this.complete == true) {
        this.time += 0.01;
        console.log(this.time);
        }

        if (this.time >= 3) {
            this.scene.start("commentGame");
        }
    }

}