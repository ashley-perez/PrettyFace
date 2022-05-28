var textDone = true;

class Cutscene extends Phaser.Scene {
    constructor() {
        super("narrOne");
    }

    preload() {
        this.load.image('dialogbox', './assets/dialogbox.png');
    }

    create() {
        let distortedWriting = {
            fontFamily: 'Scribbles',
            fontSize: '36px',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

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

        this.phase1Text = [ "They really like me. ", "*notifications popping* ", "thank you... "];
        this.phase2Text = [ "placeholder -- Phase 2 / health stage 2 "];
        this.phase3Text = [ "FUCK YOU [username] ", "Who fucking says that?! ", "You don't know what it's like... ", "... ", "This is fine. I'm fine. "];
        this.phase4Text = [ "...How could they say those things about me? ", "... ", "is this really what I look like? ", "I- ", "maybe they're right "];
        this.phase5Text = [ "WHY IS IT NOT ENOUGH??!! ", "THEY CRITIQUE EVERY FUCKING LITTLE THING I DO!!!! ", "... ", "This was supposed to make me happy... I was happy. "];

        this.index = 0;

        this.UIbox = this.add.sprite(650, 575, 'dialogbox');

        // set up font based on health
        if (health >= 40) {
            this.textbox = this.add.text(275, 500, ' ', normalWriting).setWordWrapWidth(750);
            this.continuePrompt = this.add.text(920, 620, '[SPACE]', normalWriting);
        }
        else {
            this.textbox = this.add.text(275, 500, ' ', distortedWriting).setWordWrapWidth(750);
            this.continuePrompt = this.add.text(920, 620, '[SPACE]', distortedWriting);
        }

        this.continuePrompt.visible = false;

        this.cursors =  this.input.keyboard.createCursorKeys();
        
        this.complete = false;

        this.typewriteText("...", this.textbox, 300);

        this.timer = 0;
    }

    update() {
        
        // check for spacebar press to advance text
        // will only advance text when previous writing is done
        if(Phaser.Input.Keyboard.JustDown(this.cursors.space) && textDone) {
            this.continuePrompt.visible = false; // prompt goes away because writing is happening
            this.textbox.text = ''; // reset the text box
            // phase 1 health
            if (health >= 87) {
                // done going through array, narration is over
                if (this.index >= this.phase1Text.length) {
                    this.complete = true;
                    textDone = false;
                    return;
                }
                this.typewriteText(this.phase1Text[this.index], this.textbox, 50);
            }
            else if (health <= 86 && health >= 65) {
                if (this.index >= this.phase2Text.length) {
                    this.complete = true;
                    textDone = false;
                    return;
                }
                // this.textbox = this.add.text(this.TEXT_X, this.TEXT_Y, this.phase2Text[this.index], {color: '#FFFFFF'});
                this.typewriteText(this.phase2Text[this.index], this.textbox, 50);
            }
            else if (health <= 64 && health >= 35) {
                if (this.index >= this.phase3Text.length) {
                    this.complete = true;
                    textDone = false;
                    return;
                }
                this.typewriteText(this.phase3Text[this.index], this.textbox, 50);
            }
            else if (health <= 34 && health >= 10) {
                if (this.index >= this.phase4Text.length) {
                    this.complete = true;
                    textDone = false;
                    return;
                }
                this.typewriteText(this.phase4Text[this.index], this.textbox, 50);

            }
            else {
                if (this.index >= this.phase5Text.length) {
                    this.complete = true;
                    textDone = false;
                    return;
                }
                this.typewriteText(wrappedText, this.textbox, 50);
            } 
            this.index += 1;
        }

        // done with narration, go to next scene
        if (this.complete == true && health >= 0) {
            this.timer += 0.01;
        }
        if (this.timer >= 3) {
            health -= 9;
            narrCount++;
            sceneCount = 0;
            this.scene.start('filterGame');
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
                textDone = false;

                // when there is no more text to write set bool to false
                if (i == length) {
                    textDone = true;
                    this.continuePrompt.visible = true; // visual cue for the player to advance the text appears
                }
            },
            repeat: length - 1,
            delay: speed // typing speed, big numbers = slower text, small = faster
        });
    }
    
}