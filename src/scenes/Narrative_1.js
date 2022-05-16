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
<<<<<<< HEAD
=======
        // array of dialogue
        this.wordArray = ['really good writing goes here', 'hello', 'bruh', 'bye'];
        this.index = 0;

        // text boxes that "write themselves"
        this.testBox = this.add.text(100, 600, '', {color: '#FFFFFF'}).setWordWrapWidth(500); // empty '' needs to be there!!
	    this.typewriteText(this.wordArray[this.index], this.testBox, 70);

        // player stuff
        this.player = this.physics.add.sprite(game.config.width-200, game.config.height/2, 'girl_atlas', 'walk_left_0001').setScale(0.5);
        this.charMoveSpeed = 2.5;
>>>>>>> f952bfacc3c330b6f21f3468a334d534cc274246

        // key inputs
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

        // player animations
        this.anims.create({
            key: 'walk_left',
            frames: this.anims.generateFrameNames('girl_atlas', {
                prefix: 'walk_left_',
                start: 1,
                end: 4,
                suffix: '',
                zeroPad: 4
            }),
            frameRate: 4,
            repeat: -1,
        });

        this.anims.create({
            key: 'walk_right',
            frames: this.anims.generateFrameNames('girl_atlas', {
                prefix: 'walk_right_',
                start: 1,
                end: 4,
                suffix: '',
                zeroPad: 4
            }),
            frameRate: 4,
            repeat: -1,
        });

        if (gamePhase == 1) {
            // player stuff
            this.player = this.physics.add.sprite(game.config.width-200, game.config.height/2, 'girl_atlas', 'walk_left_0001').setScale(0.5);
            this.charMoveSpeed = 1.5;

            // array of dialogue 
            this.wordArray = ['really good writing goes here', 'wow nice, i keep getting more followers', 'i need to post more', 'hmmm how many people saw my story today...'];
            this.index = 0;

            // text boxes that "write themselves"
            this.testBox = this.add.text(100, 600, '', {color: '#FFFFFF'}).setWordWrapWidth(500); // empty '' needs to be there!!
            this.typewriteText(this.wordArray[this.index], this.testBox, 35);

            this.complete = false;
            this.timer = 0;
        }

        if (gamePhase == 2) {
            // player stuff
            this.player = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'girl_atlas', 'walk_left_0001').setScale(0.5);
            this.charMoveSpeed = 1.5;

            // array of dialogue 
            this.wordArray = ['phase 2!!!!', 'god i looked awful in my last post...', 'i just have to keep posting', 'i am not a good writer', 'bye'];
            this.index = 0;

            // text boxes that "write themselves"
            this.testBox = this.add.text(100, 600, '', {color: '#FFFFFF'}).setWordWrapWidth(500); // empty '' needs to be there!!
            this.typewriteText(this.wordArray[this.index], this.testBox, 35);

            this.complete = false;
            this.timer = 0;
        }

        if (gamePhase == 3) {
            // player stuff
            this.player = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'girl_atlas', 'walk_left_0001').setScale(0.5);
            this.charMoveSpeed = 1.5;

            // array of dialogue 
            this.wordArray = ['phase 3!!!!', 'sorry kate i dont have time to hangout today', '(literally spends 5 hours on tiktok', '(still thinking about that one negative comment)', '(bruh)'];
            this.index = 0;

            // text boxes that "write themselves"
            this.testBox = this.add.text(100, 600, '', {color: '#FFFFFF'}).setWordWrapWidth(500); // empty '' needs to be there!!
            this.typewriteText(this.wordArray[this.index], this.testBox, 35);

            this.complete = false;
            this.timer = 0;
        }

    }

    update() {

<<<<<<< HEAD
        if (gamePhase == 1) {
            // switch scene to eyes
            if (this.complete == true) {
                this.timer += 0.01
=======
        // switch scene to eyes
        if(this.complete == true) {
            this.timer += 0.01;
        }
        if (this.timer >= 7) {
            this.scene.start("eyesGame");//eyesgame
            gamePhase = 2;
        }

        // click for more text to be written
        if (this.input.activePointer.isDown && textDone == true) {
            this.index += 1;

            // so out of index error doesn't happen (clicked through all the dialogue)
            if (this.index >= this.wordArray.length) {
                textDone = false;
                return;
>>>>>>> f952bfacc3c330b6f21f3468a334d534cc274246
            }
            if (this.timer >= 3) {
                gamePhase = 2
                this.scene.start("filterGame");
            }
            
            // click for more text to be written
            if (this.input.activePointer.isDown && textDone == true) {
                this.index += 1; 

                // so out of index error doesn't happen (clicked through all the dialogue)
                if (this.index >= this.wordArray.length) {
                    textDone = false;
                    this.complete = true;
                    return;
                }

                this.testBox.text = ''; // reset the text
                this.typewriteText(this.wordArray[this.index], this.testBox, 35); 
                //console.log('SLAYYYYYY');
                textDone = false;
            }
        } // end of phase 1

        else if (gamePhase == 2) {
            // switch scene to eyes
            if (this.complete == true) {
                this.timer += 0.01
            }
            if (this.timer >= 3) {
                this.scene.start("filterGame");
                gamePhase = 3;
            }
            
            // click for more text to be written
            if (this.input.activePointer.isDown && textDone == true) {
                this.index += 1; 

                // so out of index error doesn't happen (clicked through all the dialogue)
                if (this.index >= this.wordArray.length) {
                    textDone = false;
                    this.complete = true;
                    return;
                }

                this.testBox.text = ''; // reset the text
                this.typewriteText(this.wordArray[this.index], this.testBox, 35); 
                console.log('one third slay');
                textDone = false;
            }
        } // end of phase 2

        else if (gamePhase == 3) {
            // switch scene to eyes
            if (this.complete == true) {
                this.timer += 0.01
            }
            if (this.timer >= 3) {
                gamePhase = 4;
                this.scene.start("filterGame");
            }
            
            // click for more text to be written
            if (this.input.activePointer.isDown && textDone == true) {
                this.index += 1; 

                // so out of index error doesn't happen (clicked through all the dialogue)
                if (this.index >= this.wordArray.length) {
                    textDone = false;
                    this.complete = true;
                    return;
                }

                this.testBox.text = ''; // reset the text
                this.typewriteText(this.wordArray[this.index], this.testBox, 35); 
                textDone = false;
            }
        } // end of phase 3

        // moving animations
        // thank you Prof for making the texture atlas lab
        // we always want this so not in game phase if statement
        if (keyRIGHT.isDown) {
            this.player.x += this.charMoveSpeed;
            this.player.anims.play('walk_right', true);
        }
        else if (keyLEFT.isDown) {
            this.player.x -= this.charMoveSpeed;
            this.player.anims.play('walk_left', true);
        }
        

    }

    // credit for the base of this function: https://tinyurl.com/typewritephaser3
    // allows text to slowly be written like in other rpg games
    // has been modified to better suit our needs :)
    typewriteText(text, textbox, speed) {
        const length = text.length; // how many times the loop should repeat (based on sentence length)
        let i = 0;
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