class Broken extends Phaser.Scene {
    constructor() {
        super("endingScene");
    }

    preload() {
        this.load.atlas('brokenBg','./assets/finalsheet.png','./assets/finalScene.json');
    }

    create() {
        let normalWriting = {
            fontFamily: 'Normal',
            fontSize: '30px',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.textBox = this.add.text(200, 200, 'hello', normalWriting);

        this.anims.create({
            key: 'broken',
            frames: this.anims.generateFrameNames('brokenBg', {
                prefix: 'sprite',
                start: 1,
                end: 3,
                suffix: '',
                zeroPad: 1
            }),
            frameRate: 15,
            repeat: -1,
        });
        this.finalScene = this.physics.add.sprite(config.width/2, config.height/2, 'brokenBg', 0);
        this.finalScene.anims.play('broken', true);
    }

    update() {

    }
}