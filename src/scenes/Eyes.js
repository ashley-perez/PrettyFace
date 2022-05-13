class Eyes extends Phaser.Scene {
    constructor() {
        super("eyesGame")
    }

    preload() {
        this.load.image('pupil', './assets/pupil.png');

        this.load.image('eye', './assets/placeHolderEye.png');
    }

    create() {
        // var eyeLeft = this.add.ellipse(480, 110, 230, 90, 0xFFFFFF);
        // var eyeRight = this.add.ellipse(790, 110, 230, 90, 0xFFFFFF);
        // var pupilLeft = this.add.sprite(480,110, 'pupil');
        // var pupilRight = this.physics.add.image(790, 110, 'pupil');

        this.eye = this.physics.add.sprite(480, 110, 'eye');

        // pupil follow to mouse object
        this.input.on('pointermove', function (pointer) {
            this.physics.moveToObject(this.eye, pointer, 200);
        }, this);

    }

}