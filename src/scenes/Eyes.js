class Eyes extends Phaser.Scene {
    constructor() {
        super("eyesGame")
    }

    preload() {
        this.load.image('pupil', './assets/pupil.png');
    }

    create() {
        var eyeLeft = this.add.ellipse(480, 110, 230, 90, 0xFFFFFF);
        var eyeRight = this.add.ellipse(790, 110, 230, 90, 0xFFFFFF);
        var pupilLeft = this.add.sprite(480,110, 'pupil');
        var pupilRight = this.physics.add.image(790, 110, 'pupil');

        // pupil follow to mouse object
        this.input.on('pointermove', function (pointer)
    {
        this.physics.moveToObject(pupilRight, pointer, 200);
    }, this);
    }

}