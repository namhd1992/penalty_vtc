import Phaser from "phaser";
import btn_suttudong from '../../../assert/background.png';
export default class Info extends Phaser.Scene{
  constructor() {
    super({ key: "Info" });
  }

    preload(){
      this.load.image('suttudong', btn_suttudong);
    }

    create(){
      this.add.image(600,338,'suttudong')
      const self = this;
      this.helloWorld = this.add.text(
          this.cameras.main.centerX, 
          this.cameras.main.centerY, 
          "Hello World", { 
            font: "40px Arial", 
            fill: "#ffffff" 
          }
      );
      this.helloWorld.setOrigin(0.5);
        this.input.on('pointerdown', function (pointer) {
          console.log(pointer)
          // self.scene.start("Game", {id:6});
      });

      // this.helloWorld.setVisible(false)
      

      this.helloWorld.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, ()=>{
        console.log("Hello")
      })
    }

    update(){
        // this.helloWorld.angle += 1;
    }
}