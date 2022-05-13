class Cutscene extends Phaser.Scene {
    constructor() {
        super("narrOne");
    }

    preload() {
        // stuff
    }

    create() {
        this.testBox = this.add.text(100, 100, '', {color: '#FFFFFF'}).setWordWrapWidth(500); // empty '' needs to be there!!
	    this.typewriteText('really good writing goes here', this.testBox, 70);

        this.time = 0;
        this.complete = true;
    }

    update() {
        if(this.complete == true) {
            this.time += 0.01;
            console.log(this.time);
        }
        if (this.time >= 1) {
            this.scene.start("eyesGame");
        }
    }

    // credit for this function: https://tinyurl.com/typewritephaser3
    // allows text to slowly be written like in other rpg games
    typewriteText(text, textbox, speed) {
        const length = text.length; // how many times the loop should repeat (based on string length)
        let i = 0;
        this.time.addEvent({
            callback: () => {
                textbox.text += text[i]
                ++i
            },
            repeat: length - 1,
            delay: speed // typing speed, big numbers = slower text, small = faster
        });
    }
}