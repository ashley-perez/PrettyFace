class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // stuff
    }

    create() {
        // more stuff
        let menuConfig = {
            fontFamily: 'Horror',
            fontSize: '50px',
            color: '#eeeeee',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(game.config.width/2, game.config.height/2, 'Put on Your Pretty Face', menuConfig).setOrigin(0.5, 2.5);

        this.scene.start("filterGame");
    }

    update() {
        // even more stuff
    }
}