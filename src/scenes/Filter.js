class Filter extends Phaser.Scene {

    constructor() {
        super("filterGame")
    }

    preload() {
        this.load.image('player', './assets/placeholderCharacter.png');
        this.load.image('filter', './assets/placeholderFilter.png');
    }

    create() {
        this.player = this.physics.add.sprite(config.width/2, config.height/2, 'player', 0);
        this.filter = this.physics.add.sprite(config.width/2+200, config.height/2, 'filter', 0).setInteractive();

        this.input.setDraggable(this.filter); // allow object to be draggable

        // if input then move, updates the location of object to the pointer("mouse")
        this.input.on('drag', function(pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        // collisoin detection
        this.physics.add.overlap(this.player, this.filter, null, function() {
            console.log("hello");
        }, this);

    }

    update() {

    }

}