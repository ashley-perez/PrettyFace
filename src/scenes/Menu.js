class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // stuff
    }

    create() {
        // more stuff
        this.scene.start("filterGame");
    }

    update() {
        // even more stuff
    }
}