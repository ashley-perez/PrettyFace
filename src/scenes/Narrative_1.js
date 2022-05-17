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
        // array of dialogue
        this.wordArray1 = ['damn im so happy', 'pretty meh', 'bruh', 'bye'];
        // this.wordArray = ['really good writing goes here', 'hello', 'bruh', 'bye'];
        this.index = 0;

        // text boxes that "write themselves"
        this.testBox = this.add.text(100, 600, '', {color: '#FFFFFF'}).setWordWrapWidth(500); // empty '' needs to be there!!
	    this.typewriteText(this.wordArray[this.index], this.testBox, 70);

        // player stuff
        // this.player = this.physics.add.sprite(game.config.width-200, game.config.height/2, 'girl_atlas', 'walk_left_0001').setScale(0.5);
        // this.charMoveSpeed = 2.5;

        // key inputs
        // keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        // keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        // keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        // keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

        this.complete = true;
        this.timer = 0;

    }

    update() {
        if(health >=95) {
       
        if(this.complete == true) {
            this.timer += 0.01;
            this.testBox.text = ''; // reset the text
            this.typewriteText(this.wordArray[0], this.testBox, 60);
        }
        if (this.timer >= 7) {
            health -= 3;
            this.scene.start("filterGame");
        }

        // click for more text to be written
        // if (this.input.activePointer.isDown && textDone == true) {
        //     this.index += 1;

        //     // so out of index error doesn't happen (clicked through all the dialogue)
        //     if (this.index >= this.wordArray.length) {
        //         textDone = false;
        //         return;
        //     }

            
        //     console.log('SLAYYYYYY');
        //     textDone = false;

        // }
        }
        else if(health >=80 && health <=94) {
       
            if(this.complete == true) {
                this.timer += 0.01;
                this.testBox.text = ''; // reset the text
                this.typewriteText(this.wordArray[1], this.testBox, 60);
            }
            if (this.timer >= 7) {
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
                ++i

                // when there is no more to write set bool to false
                if (i == length) {
                    textDone = true;
                }
            },
            repeat: length - 1,
            delay: speed // typing speed, big numbers = slower text, small = faster
        });
    }
}