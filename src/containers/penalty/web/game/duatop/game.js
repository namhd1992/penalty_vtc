import Phaser from "phaser";

export default class Game extends Phaser.Scene{
    constructor() {
        super({ key: "Game" });
    }

    init(data){
        console.log('init', data);
        this.id=data.id;
    }

    
    preload(){

    }

    create(){
        // const ball=this.add.circle(400, 250, 10, 0xffffff, 1)
        // this.physics.add.existing(ball);
        // ball.body.setBounce(1,1)
        // ball.body.setCollideWorldBounds(true, 1,1)
        // ball.body.setVelocity(200, 0)
        // const paddleLeft=this.add.rectangle(30, 250, 20, 70, 0xffffff,1)
        // this.physics.add.existing(paddleLeft, true)
        // // paddleLeft.body.setBounce(1,1)
        // /**
        //  @type {Phaser.Physics.Arcade.Body}
        //  */
        // // const body= paddleLeft.body
        // // body.setMass(100)
        // this.physics.add.collider(paddleLeft,ball)
        // this.cursors=this.input.keyboard.createCursorKeys()
        const self = this;
        this.idInfo = this.add.text(
            50, 
            50, 
            "", { 
              font: "40px Arial", 
              fill: "#ffffff" 
            }
        );
        this.helloWorld = this.add.text(
            this.cameras.main.centerX, 
            this.cameras.main.centerY, 
            "Hello Nambv", { 
              font: "40px Arial", 
              fill: "#ffffff" 
            }
        );
        this.helloWorld.setOrigin(0.5);
        this.input.on('pointerdown', function (pointer) {
            self.scene.start("Info");
        });
    }

    update(){
        this.idInfo.setText(this.id)
        // this.cursors.up.isDown()
    }
}