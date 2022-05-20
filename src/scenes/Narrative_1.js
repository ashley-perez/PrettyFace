var textDone = false;

class Cutscene extends Phaser.Scene {
    constructor() {
        super("narrOne");
    }

    preload() {
        // loading player texture atlas
        this.load.atlas('girl_atlas', './assets/testAtlas.png', './assets/testWalk.json');
    }

    create() {
        console.log("here at narrOne");
        // array of dialogue
        this.wordArray1 = ['damn im so happy', 'pretty meh', 'bruh', 'bye'];
        // this.wordArray = ['really good writing goes here', 'hello', 'bruh', 'bye'];
        this.index = 0;

        // text boxes that "write themselves"


        // player stuff
        // this.player = this.physics.add.sprite(game.config.width-200, game.config.height/2, 'girl_atlas', 'walk_left_0001').setScale(0.5);
        // this.charMoveSpeed = 2.5;

        // key inputs
        // keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        // keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        // keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        // keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

        if(health >= 95) {
            this.index=0;
            this.testBox = this.add.text(game.config.width/2, game.config.height/2, '', {color: '#FFFFFF'}).setWordWrapWidth(500); // empty '' needs to be there!!
	        this.typewriteText(this.wordArray1[this.index], this.testBox, 150);
        }
        else if(health >= 80 && health <=94) {
            this.index=1;
            this.testBox = this.add.text(game.config.width/2, game.config.height/2, '', {color: '#FFFFFF'}).setWordWrapWidth(500); // empty '' needs to be there!!
	        this.typewriteText(this.wordArray1[this.index], this.testBox, 150);
        }
        else if(health >= 65 && health <=79) {
            this.index=2;
            this.testBox = this.add.text(game.config.width/2, game.config.height/2, '', {color: '#FFFFFF'}).setWordWrapWidth(500); // empty '' needs to be there!!
	        this.typewriteText(this.wordArray1[this.index], this.testBox, 150);
        }

        this.complete = true;
        this.timer = 0;

    }

    update() {
        this.timer += 0.01;
        if(health >=95) {
            console.log("penis");
            if (this.timer >= 3) {
                health -= 10;
                this.scene.start("filterGame");
            }
        }
        else if(health >=80 && health <=94) {
            if (this.timer >= 2) {
                health -= 10;
                this.scene.start("filterGame");
            }
        }
        else if(health >= 65 && health <=79) {
            if (this.timer >= 1) {
                health -= 10;
                this.scene.start("filterGame");
            }
        }
    }

    // credit for the base of this function: https://tinyurl.com/typewritephaser3
    // allows text to slowly be written like in other rpg games
    // has been modified to better suit our needs :)
    typewriteText(text, textbox, speed) {
        const length = text.length; // how many times the loop should repeat (based on sentence length)
        let i = 0;
        //textDone = false;
        this.time.addEvent({
            callback: () => {
                textbox.text += text[i]
                i++

                // when there is no more to write set bool to false
                if (i == length) {
                    this.complete = true;
                }
            },
            repeat: length - 1,
            delay: speed // typing speed, big numbers = slower text, small = faster
        });
    }
}