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
        color: '#000000',
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
        color: '#000000',
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
        color: '#000000',
        align: 'center',
        padding: {
            top: 5,
            bottom: 5,
        },
        fixedWidth: 0
      }


      // text boxes
      this.credits = this.add.text(450, 60, 'CREDITS', normalWriting);
      this.one = this.add.text(85, 250, 'Andrew Dresel-Kurtz    Art & Programming', smaller); 
      this.two = this.add.text(75, 300, '             Ashley Perez    Programming', smaller);
      this.three=this.add.text(85, 350, '                 Jane Tran    Art & Programming', smaller);
      this.menuPrompt = this.add.text(435, 500, 'Press M for Menu', evenSmaller);

      // key
      keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);

    }

    update() {

      // go back to menu
      if (Phaser.Input.Keyboard.JustDown(keyM)) {
         // get all music to stop so it doesn't keep playing when you restart
         music.stop();
         scary_music.stop();
         this.scene.start('menuScene')
      }

    }

} 

