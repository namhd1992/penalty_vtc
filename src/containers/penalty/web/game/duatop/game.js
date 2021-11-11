import Phaser from "phaser";

import ball_rotation from '../../../assert/ball.png';
import ball_rotation_json from '../../../assert/ball.json'

import k_idle from '../../../assert/k_idle.png';

export default class Game extends Phaser.Scene{
    constructor() {
        super({ key: "Game" });
    }


    init(data){
        console.log('init', data);
        this.id=data.id;
    }

    
    preload(){
        this.load.atlas('ball_rotation', ball_rotation, ball_rotation_json);
        // this.load.spritesheet('ball_rotation',ball_rotation, { frameWidth: 80, frameHeight: 80, endFrame: 23 });
        this.load.spritesheet('k_idle',k_idle, { frameWidth: 140, frameHeight: 281, endFrame: 35 });
        
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

        // var a= Phaser.Math.Distance.BetweenPoints
        // const self = this;
        // this.idInfo = this.add.text(
        //     50, 
        //     50, 
        //     "", { 
        //       font: "40px Arial", 
        //       fill: "#ffffff" 
        //     }
        // );
        // this.helloWorld = this.add.text(
        //     this.cameras.main.centerX, 
        //     this.cameras.main.centerY, 
        //     "Hello Nambv", { 
        //       font: "40px Arial", 
        //       fill: "#ffffff" 
        //     }
        // );
        // this.helloWorld.setOrigin(0.5);
        // this.input.on('pointerdown', function (pointer) {
        //     self.scene.start("Info");
        // });

        const animConfig = {
            key: 'walk',
            frames: 'ball_rotation',
            frameRate: 60,
            repeat: -1
        };
        this.anims.create(animConfig);

        this.sprite = this.add.sprite(400, 484, 'ball_rotation', 'rotation_');
        this.sprite.play('walk');

        // var config = {
        //     key: 'explodeAnimation',
        //     frames: this.anims.generateFrameNumbers('ball_rotation', { start: 0, end: 23, first: 23 }),
        //     frameRate: 6,
        //     repeat: -1
        // };

        // var k_i = {
        //     key: 'k_id',
        //     frames: this.anims.generateFrameNumbers('k_idle', { start: 0, end: 35, first: 35 }),
        //     frameRate: 6,
        //     repeat: -1
        // };
    
        // this.anims.create(config);
        // this.anims.create(k_i);
    
        // this.add.sprite(400, 300, 'ball_rotation').play('explodeAnimation');
        // this.add.sprite(400, 100, 'k_idle').play('k_id');
    }

    update(time, delta){
        this.sprite.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, function(pointer){
            console.log("AAAAAAAAAA", delta)
        })
        
        this.sprite.setScale(0.5, 0.5)
        if(this.sprite.y<100){
            this.sprite.stop();
            console.log("BBBBBBBB")
        }else{
            this.sprite.y -=1;
        }
        // this.idInfo.setText(this.id)
        // this.cursors.up.isDown()
    }
}