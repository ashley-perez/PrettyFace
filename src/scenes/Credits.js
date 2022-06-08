class Credits extends Phaser.Scene {
    constructor() {
      super("credits");
    }

    preload() {
      this.load.image('background', './assets/creds.png');

    }

    create() {
      // background
      this.tempBG = this.add.tileSprite(0, 0, 1280, 720, 'background').setOrigin(0, 0);

      // text config
      let normalWriting = {
        fontFamily: 'Normal',
        fontSize: '100px',
        color: '#f0a8ba',
        align: 'center',
        padding: {
            top: 5,
            bottom: 5,
        },
        fixedWidth: 0
      }
      let smaller = {
        fontFamily: 'Normal',
        fontSize: '55px',
        color: '#f0a8ba',
        align: 'center',
        padding: {
            top: 5,
            bottom: 5,
        },
        fixedWidth: 0
      }
      let evenSmaller = {
        fontFamily: 'Normal',
        fontSize: '50px',
        color: '#ff99b9',
        align: 'center',
        padding: {
            top: 5,
            bottom: 5,
        },
        fixedWidth: 0
      }


      // text boxes
      this.credits = this.add.text(450, 60, 'CREDITS', normalWriting);
      this.one = this.add.text(85, 260, 'Andrew Dresel-Kurtz    Art & Programming', smaller);
      this.two = this.add.text(75, 320, '             Ashley Perez    Programming', smaller);
      this.three=this.add.text(85, 380, '                 Jane Tran    Art & Programming', smaller);
      this.add.rectangle(644, 649, 480, 85, 0x5c4ae4);
      this.menuPrompt = this.add.text(440, 620, 'Press M for Menu', evenSmaller);

      // key
      keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);

    }

    update() {

      // go back to menu
      if (Phaser.Input.Keyboard.JustDown(keyM)) {
         // get all music to stop so it doesn't keep playing when you restart
         music.stop();
         scary_music.stop();
         deadMusic.stop();
         this.scene.start('menuScene')
      }

    }

}
