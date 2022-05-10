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
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(game.config.width/2, game.config.height/2, 'Put on Your Pretty Face', menuConfig).setOrigin(0.5, 2.5);

        
        this.fakeTimer = 0
    }

    update() {
        this.fakeTimer += 0.01;
        if (this.fakeTimer >= 4) {
            this.scene.start("filterGame");
        }
    }
}