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
        this.wordArray = ['really good writing goes here', 'hello', 'bruh', 'bye'];
        this.index = 0;

        // text boxes that "write themselves"
        this.testBox = this.add.text(100, 600, '', {color: '#FFFFFF'}).setWordWrapWidth(500); // empty '' needs to be there!!
	    this.typewriteText(this.wordArray[this.index], this.testBox, 70);

        // player stuff
        this.player = this.physics.add.sprite(game.config.width-200, game.config.height/2, 'girl_atlas', 'walk_left_0001').setScale(0.5);
        this.charMoveSpeed = 2.5;

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

        this.complete = true;
        this.timer = 0;

    }

    update() {

        // switch scene to eyes
        if(this.complete == true) {
            this.timer += 0.01;
        }
        if (this.timer >= 7) {
            this.scene.start("filterGame");//eyesgame
            gamePhase = 2;
        }
        
        // click for more text to be written
        if (this.input.activePointer.isDown && textDone == true) {
            this.index += 1; 

            // so out of index error doesn't happen (clicked through all the dialogue)
            if (this.index >= this.wordArray.length) {
                textDone = false;
                return;
            }

            this.testBox.text = ''; // reset the text
            this.typewriteText(this.wordArray[this.index], this.testBox, 60); 
            console.log('SLAYYYYYY');
            textDone = false;

        }

        // moving animations
        // thank you Prof for making the texture atlas lab
        if (keyRIGHT.isDown) {
            this.player.x += this.charMoveSpeed;
            this.player.anims.play('walk_right', true);
        }
        else if (keyLEFT.isDown) {
            this.player.x -= this.charMoveSpeed;
            this.player.anims.play('walk_left', true);
        }
        // else if (keyUP.isDown) {
        //     this.player.y -= this.charMoveSpeed;
        //     this.player.anims.play('run_up', true);
        // }
        // else if (keyDOWN.isDown) {
        //     this.player.y += this.charMoveSpeed;
        //     this.player.anims.play('run_down', true);
        // }
        // idle animations
        // else if (!keyRIGHT.isDown && !keyLEFT.isDown && !keyUP.isDown && !keyDOWN.isDown) {
            
        //     if (this.player.anims.isPlaying && this.player.anims.currentAnim.key === 'run_left') {
        //         this.player.anims.play('idle_left');
        //     }
        //     if (this.player.anims.isPlaying && this.player.anims.currentAnim.key === 'run_right') {
        //         this.player.anims.play('idle_right');
        //     }
        //     if (this.player.anims.isPlaying && this.player.anims.currentAnim.key === 'run_up') {
        //         this.player.anims.play('idle_up');
        //     }
        //     if (this.player.anims.isPlaying && this.player.anims.currentAnim.key === 'run_down') {
        //         this.player.anims.play('idle_down');
        //     }

        // }
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