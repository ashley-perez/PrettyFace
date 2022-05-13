class Comment extends Phaser.Scene {

    constructor() {
        super("commentGame")
    }

    preload() {
        this.load.image('player', './assets/placeholderCharacter.png');
        this.load.image('filter', './assets/placeholderFilter.png');
        this.load.image('sad', './assets/sadCharacter.png');

        this.load.image('background', './assets/testBackGround.png');

    }

    create() {
        // mouse stuff
        this.input.setDefaultCursor('url(./assets/testFingerPointer.png), pointer');

        this.normbackground = this.add.tileSprite
        (
            0,
            0,
            1280,
            720,
            "background"
        ).setOrigin(0, 0);
        
        //this.player = this.physics.add.sprite(config.width/2.71, config.height/1.96185286104, 'player', 0);
        // this.filter = this.physics.add.sprite(config.width/1.17647058824, config.height/4.86486486486, 'filter', 0).setInteractive();

        this.complete = true;
        

        //this.input.setDraggable(this.filter); // allow object to be draggable

        // if input then move, updates the location of object to the pointer("mouse")
        // this.input.on('drag', function(pointer, gameObject, dragX, dragY) {
        //     gameObject.x = dragX;
        //     gameObject.y = dragY;
        // });

        // collision detection
        // this.physics.add.overlap(this.player, this.filter, null, function() {
        //     console.log("hello");
        //     this.player.setTexture('sad');
        //     this.filter.destroy();
        //     this.complete = true;
        // }, this);

        //just a fake timer for now
        this.time = 0;


    }

    // getting data from old scene
    init(data) {
        this.heart = data.heart;
        this.dog = data.dog;
    }

    update() {

        if (this.heart == true) {
            this.add.text(game.config.width/2, game.config.height/2, 'the hearts are so cute',  {color: '#000000'});
        }
        else if (this.dog == true) {
            this.add.text(game.config.width/2.5, game.config.height/2, 'the dog filter is not slayful',  {color: '#000000'});
        }
       
        if(this.complete == true) {
            this.time += 0.01;
            //console.log(this.time);
        }

<<<<<<< HEAD
        if (this.time >= 1) {
=======
        if (this.time >= 5.5) {
>>>>>>> de49285fe920cb829dbac31b3826c930c8ce8dca
            this.scene.start("narrOne");
        }
    }

}