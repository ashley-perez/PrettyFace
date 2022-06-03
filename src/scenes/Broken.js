var textDone = true; // please don't delete this

class Broken extends Phaser.Scene {
    constructor() {
        super("endingScene");
    }

    preload() {
        this.load.atlas('brokenBg','./assets/finalsheet.png','./assets/finalScene.json');
        this.load.atlas('phoneflash','./assets/phoneflash.png','./assets/phoneflash.json');

        this.load.image('dialogbox', './assets/dialogbox.png');
        this.load.audio('gameover', './assets/gameover.mp3');

    }

    create() {
        deadMusic = this.sound.add('gameover', {volume: 0});  // add music background
        deadMusic.play();
        deadMusic.setLoop(true);
        music.stop();
        scary_music.stop();



        let distortedWriting = {
            fontFamily: 'Scribbles',
            fontSize: '45px',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        let small = {
            fontFamily: 'Scribbles',
            fontSize: '30px',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.cursors =  this.input.keyboard.createCursorKeys();
        this.textArray = ["This has to be a bad dream. ", "... ", "That's it! ", "This is  j u s t  a dream. This isn't happening.","hahaha ", "All I need to do is wake myself up... ", "... "];
        this.index = 0;

        this.UIbox = this.add.sprite(650, 150, 'dialogbox');
        this.UIbox.scaleX = 1.5;
        this.text = this.add.text(100,70, "", distortedWriting);
        this.typewriteText('... ', this.text, 75);
        this.continuePrompt = this.add.text(1100, 190, '[SPACE]', small);
        this.continuePrompt.visible = false;



        this.anims.create({
            key: 'broken',
            frames: this.anims.generateFrameNames('brokenBg', {
                prefix: 'sprite',
                start: 1,
                end: 3,
                suffix: '',
                zeroPad: 1  // number of digits of the frame name ex: "sprite2"
            }),
            frameRate: 16,
            repeat: -1,
        });
        this.finalScene = this.physics.add.sprite(config.width/2, config.height/2, 'brokenBg', 0);
        this.finalScene.alpha = 0;
        // this.finalScene.anims.play('broken', true);

        this.anims.create({
            key: 'phone',
            frames: this.anims.generateFrameNames('phoneflash', {
                prefix: 'sprite',
                start: 1,
                end: 3,
                suffix: '',
                zeroPad: 1
            }),
            frameRate: 7,
            repeat: -1,
        });
        this.phone1 = this.physics.add.sprite(config.width/6, config.height/3, 'phoneflash', 0).setScale(0.7).setAlpha(0);
        this.phone2 = this.physics.add.sprite(config.width/3, config.height/1.05, 'phoneflash', 0).setScale(0.7).setAlpha(0);
        this.phone3 = this.physics.add.sprite(config.width/1.2, config.height/1.5, 'phoneflash', 0).setScale(0.7).setAlpha(0);
        this.phone4 = this.physics.add.sprite(config.width/1.4, config.height/5, 'phoneflash', 0).setScale(0.7).setAlpha(0);
        this.phone5 = this.physics.add.sprite(config.width/1.5, config.height/1.1, 'phoneflash', 0).setScale(0.7).setAlpha(0);
        this.phone6 = this.physics.add.sprite(config.width/12, config.height/1.4, 'phoneflash', 0).setScale(0.7).setAlpha(0);
        this.phone7 = this.physics.add.sprite(config.width/1.05, config.height/2.5, 'phoneflash', 0).setScale(0.7).setAlpha(0);
        this.phone8 = this.physics.add.sprite(config.width/1.05, config.height/1, 'phoneflash', 0).setScale(0.7).setAlpha(0);
        this.phone9 = this.physics.add.sprite(config.width/1.15, config.height/18, 'phoneflash', 0).setScale(0.7).setAlpha(0);
        this.phone10 = this.physics.add.sprite(config.width/3.5, config.height/1.7, 'phoneflash', 0).setScale(0.7).setAlpha(0);
        this.phone11 = this.physics.add.sprite(config.width/3, config.height/9, 'phoneflash', 0).setScale(0.7).setAlpha(0);
        this.phone12 = this.physics.add.sprite(config.width/18, config.height/13, 'phoneflash', 0).setScale(0.7).setAlpha(0);

        this.timer = 0;
        this.sceneTimer = 0;

        this.textDone = false;
        this.complete = false;
        this.textisDONE = false;
    }

    update() {
        console.log("we are broken");
        if(Phaser.Input.Keyboard.JustDown(this.cursors.space) && textDone) {// && textDone
            this.continuePrompt.visible = false; // prompt goes away because writing is happening
            this.text.text = ''; // reset the text box

            if (this.index >= this.textArray.length) {
                this.complete = true;
                textDone = false;
                this.text.visible = false;
                this.continuePrompt.visible = false;
                return;
            }

            this.typewriteText(this.textArray[this.index], this.text, 75);
            this.index += 1;

        }

        // this.timer += 0.01;
        // this.sceneTimer += 0.01;
        if (this.complete == true) {
            deadMusic.setVolume(1);
            this.phone1.alpha = 100;
            this.phone2.alpha = 100;
            this.phone3.alpha = 100;
            this.phone4.alpha = 100;
            this.phone5.alpha = 100;
            this.phone6.alpha = 100;
            this.phone7.alpha = 100;
            this.phone8.alpha = 100;
            this.phone9.alpha = 100;
            this.phone10.alpha = 100;
            this.phone11.alpha = 100;
            this.phone12.alpha = 100;
            this.phone1.anims.play('phone', true);
            this.phone2.anims.play('phone', true);
            this.phone3.anims.play('phone', true);
            this.phone4.anims.play('phone', true);
            this.phone5.anims.play('phone', true);
            this.phone6.anims.play('phone', true);
            this.phone7.anims.play('phone', true);
            this.phone8.anims.play('phone', true);
            this.phone9.anims.play('phone', true);
            this.phone10.anims.play('phone', true);
            this.phone11.anims.play('phone', true);
            this.phone12.anims.play('phone', true);

            this.finalScene.alpha = 100;
            this.finalScene.anims.play('broken', true);
            this.textisDONE = true;
        }

        if (this.textisDONE == true) {
            this.sceneTimer += 0.01;
        }

        // go to credit scene
        if (this.sceneTimer >= 5) {
            this.scene.start('credits');
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