import Phaser from "phaser";

export default class Info extends Phaser.Scene{

    preload(){

    }

    create(){
        this.helloWorld = this.add.text(
            this.cameras.main.centerX, 
            this.cameras.main.centerY, 
            "Hello World", { 
              font: "40px Arial", 
              fill: "#ffffff" 
            }
          );
          this.helloWorld.setOrigin(0.5);
    }

    update(){
        this.helloWorld.angle += 1;
    }
}