var textDone = false;

class Cutscene extends Phaser.Scene {
    constructor() {
        super("narrOne");
    }

    preload() {
        // stuff
        this.load.atlas('link_atlas', './assets/linksheet.png', './assets/link.json');
    }

    create() {
        this.testBox = this.add.text(100, 100, '', {color: '#FFFFFF'}).setWordWrapWidth(500); // empty '' needs to be there!!
	    this.typewriteText('really good writing goes here', this.testBox, 70);
        // array of dialogue
        this.wordArray = ['really good writing goes here', 'hello', 'bye'];
        this.index = 0;

        // text boxes that "write themselves"
        this.testBox = this.add.text(100, 600, '', {color: '#FFFFFF'}).setWordWrapWidth(500); // empty '' needs to be there!!
	    this.typewriteText(this.wordArray[this.index], this.testBox, 70);

        // player stuff
        this.player = this.physics.add.sprite(game.config.width-200, game.config.height/2, 'link_atlas', 'idle_down_001').setScale(0.5);
        this.charMoveSpeed = 2.5;

        // key inputs
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

        // player animations
        this.anims.create({
            key: 'idle_left',
            frames: this.anims.generateFrameNames('link_atlas', {
                prefix: 'idle_left_',
                start: 1,
                end: 3,
                suffix: '',
                zeroPad: 4
            }),
            frameRate: 15,
            repeat: -1,
            repeatDelay: 3000,
            yoyo: true
        });

        this.anims.create({
            key: 'idle_right',
            frames: this.anims.generateFrameNames('link_atlas', {
                prefix: 'idle_right_',
                start: 1,
                end: 3,
                suffix: '',
                zeroPad: 4
            }),
            frameRate: 15,
            repeat: -1,
            repeatDelay: 3000,
            yoyo: true
        });

        this.anims.create({
            key: 'idle_up',
            frames: this.anims.generateFrameNames('link_atlas', {
                prefix: 'idle_up_',
                start: 1,
                end: 1,
                zeroPad: 4
            }),
            frameRate: 0,
            repeat: -1,
        });

        this.anims.create({
            key: 'idle_down',
            frames: this.anims.generateFrameNames('link_atlas', {
                prefix: 'idle_down_',
                start: 1,
                end: 3,
                suffix: '',
                zeroPad: 4
            }),
            frameRate: 15,
            repeat: -1,
            repeatDelay: 3000,
            yoyo: true
        });

        this.anims.create({
            key: 'run_left',
            frames: this.anims.generateFrameNames('link_atlas', {
                prefix: 'run_left_',
                start: 1,
                end: 10,
                suffix: '',
                zeroPad: 4
            }),
            frameRate: 30,
            repeat: -1,
        });

        this.anims.create({
            key: 'run_right',
            frames: this.anims.generateFrameNames('link_atlas', {
                prefix: 'run_right_',
                start: 1,
                end: 10,
                suffix: '',
                zeroPad: 4
            }),
            frameRate: 30,
            repeat: -1,
        });

        this.anims.create({
            key: 'run_up',
            frames: this.anims.generateFrameNames('link_atlas', {
                prefix: 'run_up_',
                start: 1,
                end: 10,
                suffix: '',
                zeroPad: 4
            }),
            frameRate: 30,
            repeat: -1,
        });

        this.anims.create({
            key: 'run_down',
            frames: this.anims.generateFrameNames('link_atlas', {
                prefix: 'run_down_',
                start: 1,
                end: 10,
                suffix: '',
                zeroPad: 4
            }),
            frameRate: 30,
            repeat: -1,
        });

        this.time = 0;
        this.complete = true;


    }

    update() {
        // switch scene to eyes
        if(this.complete == true) {
            this.time += 0.01;
        }
        if (this.time >= 5) {
            this.scene.start("eyesGame");
        }
        // click for more text to be written
        if (this.input.activePointer.isDown && textDone == true) {
            this.index += 1;

            if (this.index >= this.wordArray.length) {
                textDone = false;
                return;
            }

            this.testBox.text = '';
            this.typewriteText(this.wordArray[this.index], this.testBox, 70);
            console.log('SLAYYYYYY');
            textDone = false;

        }

        // moving animations
        // thank you Prof for making the texture atlas lab
        if (keyRIGHT.isDown) {
            this.player.x += this.charMoveSpeed;
            this.player.anims.play('run_right', true);
        }
        else if (keyLEFT.isDown) {
            this.player.x -= this.charMoveSpeed;
            this.player.anims.play('run_left', true);
        }
        else if (keyUP.isDown) {
            this.player.y -= this.charMoveSpeed;
            this.player.anims.play('run_up', true);
        }
        else if (keyDOWN.isDown) {
            this.player.y += this.charMoveSpeed;
            this.player.anims.play('run_down', true);
        }
        // idle animations
        else if (!keyRIGHT.isDown && !keyLEFT.isDown && !keyUP.isDown && !keyDOWN.isDown) {

            if (this.player.anims.isPlaying && this.player.anims.currentAnim.key === 'run_left') {
                this.player.anims.play('idle_left');
            }
            if (this.player.anims.isPlaying && this.player.anims.currentAnim.key === 'run_right') {
                this.player.anims.play('idle_right');
            }
            if (this.player.anims.isPlaying && this.player.anims.currentAnim.key === 'run_up') {
                this.player.anims.play('idle_up');
            }
            if (this.player.anims.isPlaying && this.player.anims.currentAnim.key === 'run_down') {
                this.player.anims.play('idle_down');
            }

        }
    }

    // credit for this function: https://tinyurl.com/typewritephaser3
    // allows text to slowly be written like in other rpg games
    typewriteText(text, textbox, speed) {
        const length = text.length; // how many times the loop should repeat (based on string length)
        let i = 0;
        textDone = false;
        this.time.addEvent({
            callback: () => {
                textbox.text += text[i]
                ++i
                console.log('hi: ', i);

                if (i == length) {
                    textDone = true;
                }
            },
            repeat: length - 1,
            delay: speed // typing speed, big numbers = slower text, small = faster
        });
        }
    }
