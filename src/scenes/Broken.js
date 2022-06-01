class Broken extends Phaser.Scene {
    constructor() {
        super("endingScene");
    }

    preload() {

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
    }

    update() {

    }
}