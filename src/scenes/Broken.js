class Broken extends Phaser.Scene {
    constructor() {
        super("endingScene");
    }

    preload() {
        this.load.atlas('brokenBg','./assets/finalsheet.png','./assets/finalScene.json');
        this.load.atlas('phoneflash','./assets/phoneflash.png','./assets/phoneflash.json');
    }

    create() {
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

        this.textBox = this.add.text(200, 200, 'hello', normalWriting);

        this.anims.create({
            key: 'broken',
            frames: this.anims.generateFrameNames('brokenBg', {
                prefix: 'sprite',
                start: 1,
                end: 3,
                suffix: '',
                zeroPad: 1  // number of digits of the frame name ex: "sprite2"
            }),
            frameRate: 3,
            repeat: -1,
        });
        this.finalScene = this.physics.add.sprite(config.width/2, config.height/2, 'brokenBg', 0);
        this.finalScene.anims.play('broken', true);

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
        this.phone1 = this.physics.add.sprite(config.width/6, config.height/3, 'phoneflash', 0).setScale(0.7);
        this.phone2 = this.physics.add.sprite(config.width/3, config.height/1.05, 'phoneflash', 0).setScale(0.7);
        this.phone3 = this.physics.add.sprite(config.width/1.2, config.height/1.5, 'phoneflash', 0).setScale(0.7);
        this.phone4 = this.physics.add.sprite(config.width/1.4, config.height/5, 'phoneflash', 0).setScale(0.7);
        this.phone5 = this.physics.add.sprite(config.width/1.5, config.height/1.1, 'phoneflash', 0).setScale(0.7);
        this.phone6 = this.physics.add.sprite(config.width/12, config.height/1.4, 'phoneflash', 0).setScale(0.7);
        this.phone7 = this.physics.add.sprite(config.width/1.05, config.height/2.5, 'phoneflash', 0).setScale(0.7);
        this.phone8 = this.physics.add.sprite(config.width/1.05, config.height/1, 'phoneflash', 0).setScale(0.7);
        this.phone9 = this.physics.add.sprite(config.width/1.15, config.height/18, 'phoneflash', 0).setScale(0.7);
        this.phone10 = this.physics.add.sprite(config.width/3.5, config.height/1.7, 'phoneflash', 0).setScale(0.7);
        this.phone11 = this.physics.add.sprite(config.width/3, config.height/9, 'phoneflash', 0).setScale(0.7);
        this.phone12 = this.physics.add.sprite(config.width/18, config.height/13, 'phoneflash', 0).setScale(0.7);
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
    }

    update() {

    }
}