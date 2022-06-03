var textDone = true;
var lastPhase = false;

class Cutscene extends Phaser.Scene {
    constructor() {
        super("narrOne");
    }

    preload() {
        this.load.image('dialogbox', './assets/dialogbox.png');

         // player
        this.load.image('player1', './assets/noFilterFace1.png');
        this.load.image('player2', './assets/noFilterFace2.png');
        this.load.image('player3', './assets/noFilterFace3.png');
        this.load.image('player4', './assets/noFilterFace4.png');
        this.load.image('player5', './assets/noFilterFace5.png');
    }

    create() {

        this.back = this.physics.add.sprite(config.width/2, config.height/2, 'player1', 0).setScale(2);

        if(phaseCount == 1){
            this.back.setTexture('player1');
            this.back.alpha = 0.2;
        }
        else if(phaseCount == 2){
            this.back.setTexture('player2');
            this.back.alpha = 0.2;
        }
        else if(phaseCount == 3){
            this.back.setTexture('player3');
            this.back.alpha = 0.2;
        }
        else if(phaseCount == 4){
            this.back.setTexture('player4');
            this.back.alpha = 0.2;
        }
        else if(phaseCount == 5){
            this.back.setTexture('player5');
            this.back.alpha = 0.2;
        }
        let distortedWriting = {
            fontFamily: 'Scribbles',
            fontSize: '32px',
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
        // sometimes i get scared i'm not enough or they'll get tired of me but that's just all in my head... right????
        this.phase1Text = ["I've always found it hard to make friends... ", "It's just easier for me to be myself online. ","They know the me I want them to know. ", "I have a lot of online friends who say nice things to me. ", "What else could I ever want? ",];
        this.phase2Text = ["Everybody has been so kind to me lately... ","Sometimes I get scared I'm not enough. That they'll get tired of me... ", "but that's just all in my head. ", "... ", "r i g h t ? ? "];
        this.phase3Text = [ "...How could they say those things about me? ", "... ", "I just want to fit in and be like everybody else. ", "Why does it all have to be so fucking complicated? ", "I know I shouldn't let it bother me so much but... ", "... "];
        this.phase4Text = [ "FUCK YOU ", "Who says that to a person?! ", "Don't they know I have feelings too? ", "They don't know what it's like. ", "Why are they targeting me? ","....... ", "This is fine... I'm fine. "];
        // this.phase4Text = [ "...How could they say those things about me? ", "... ", "is this really what I look like? ", "I- ", "maybe they're right "];
        this.phase5Text = [ "WHY IS IT NOT ENOUGH??!! ", "THEY CRITIQUE EVERY FUCKING LITTLE THING I DO!!!! ", "Is this what I really look like? ", "I don't even recognize myself anymore ", "... ", "This was supposed to make me happy...", "I was so happy. ", "e v e r y t h i n g   w a s   o k  "];

        this.index = 0;

        this.UIbox = this.add.sprite(650, 575, 'dialogbox');

        // set up font based on health
        if (phaseCount <= 3) {
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
            if (phaseCount == 1) {
                // done going through array, narration is over
                if (this.index >= this.phase1Text.length) {
                    this.complete = true;
                    textDone = false;
                    return;
                }
                this.typewriteText(this.phase1Text[this.index], this.textbox, 50);
            }
            else if (phaseCount == 2) {
                if (this.index >= this.phase2Text.length) {
                    this.complete = true;
                    textDone = false;
                    return;
                }
                this.typewriteText(this.phase2Text[this.index], this.textbox, 50);
            }
            else if (phaseCount == 3) {
                if (this.index >= this.phase3Text.length) {
                    this.complete = true;
                    textDone = false;
                    return;
                }
                this.typewriteText(this.phase3Text[this.index], this.textbox, 50);
            }
            else if (phaseCount == 4) {
                if (this.index >= this.phase4Text.length) {
                    this.complete = true;
                    textDone = false;
                    return;
                }
                this.typewriteText(this.phase4Text[this.index], this.textbox, 50);

            }
            else if (phaseCount == 5) {
                if (this.index >= this.phase5Text.length) {
                    this.complete = true;
                    textDone = false;
                    lastPhase = true;
                    return;
                }
                this.typewriteText(this.phase5Text[this.index], this.textbox, 50);
            } 
            this.index += 1;
        }

        
        console.log("this is this.complete " + this.complete);
        console.log("hellllloooo " + this.timer);
        // done with narration, go to next scene
        // health >= 0
        if (this.complete == true) {
            this.timer += 0.1;
            console.log('inside update timer if')
            console.log(this.timer);
        }

        if (this.timer >= 3 && phaseCount<=4) {
            health -= 9;
            phaseCount++;
            sceneCount = 1;
            console.log("scene Count = " + sceneCount);
            this.scene.start('filterGame');
        }
        else if (this.timer >= 3 && phaseCount==5) {
            console.log("end scene is about to start");
            this.scene.start("endingScene");
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