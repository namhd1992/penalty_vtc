import Phaser from "phaser";

export default class Game extends Phaser.Scene{
    
    preload(){

    }

    create(){
        const ball=this.add.circle(400, 250, 10, 0xffffff, 1)
        this.physics.add.existing(ball);
        ball.body.setBounce(1,1)
        ball.body.setCollideWorldBounds(true, 1,1)
        ball.body.setVelocity(200, 0)
        const paddleLeft=this.add.rectangle(30, 250, 20, 70, 0xffffff,1)
        this.physics.add.existing(paddleLeft, true)
        // paddleLeft.body.setBounce(1,1)
        /**
         @type {Phaser.Physics.Arcade.Body}
         */
        // const body= paddleLeft.body
        // body.setMass(100)
        this.physics.add.collider(paddleLeft,ball)
        this.cursors=this.input.keyboard.createCursorKeys()
    }

    update(){
        // this.cursors.up.isDown()
    }
}