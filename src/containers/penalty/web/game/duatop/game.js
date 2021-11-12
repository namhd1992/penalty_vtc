import Phaser from "phaser";

import backgound from '../../../assert/background.png';
import ball from '../../../assert/ball.png';
import goal_center from '../../../assert/goal_center.png';
import ball_rotation from '../../../assert/ball_sprite.png';
import ball_rotation_json from '../../../assert/ball_sprite.json'

import k_idle from '../../../assert/k_idle.png';
import k_idle_json from '../../../assert/k_idle.json';


var play=false;
export default class Game extends Phaser.Scene{
    constructor() {
        super({ key: "Game" });
    }


    init(data){
        console.log('init', data);
        this.id=data.id;
    }

    
    preload(){
        this.load.image('background', backgound);
        this.load.image('goal_center', goal_center);
        this.load.image('ball', ball);

        this.load.atlas('ball_rotation', ball_rotation, ball_rotation_json);
        // this.load.spritesheet('ball_rotation',ball_rotation, { frameWidth: 80, frameHeight: 80, endFrame: 23 });
        this.load.atlas('k_idle',k_idle,k_idle_json);
        
    }

    create(){
        
        this.add.image(600,338,'background')
        this.add.image(600,325,'goal_center')
        this.ball_1=this.add.image(605,530,'ball')
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
        const self = this;
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
            frameRate: 15,
            repeat: -1
        };
        this.anims.create(animConfig);

        this.sprite = this.add.sprite(600, 550, 'ball_rotation', 'rotation_');
        this.sprite.play('walk');

        // var config = {
        //     key: 'explodeAnimation',
        //     frames: this.anims.generateFrameNumbers('ball_rotation', { start: 0, end: 23, first: 23 }),
        //     frameRate: 6,
        //     repeat: -1
        // };

        const k_idleConfig = {
            key: 'k_id',
            frames: 'k_idle',
            frameRate: 30,
            repeat: -1
        };
        this.anims.create(k_idleConfig);
    
        // this.anims.create(config);
        // this.anims.create(k_i);
    
        // this.add.sprite(400, 300, 'ball_rotation').play('explodeAnimation');
        this.k_idle_sprite=this.add.sprite(600, 370, 'k_idle', 'k_idle_').play('k_id');
        this.k_idle_sprite.setScale(0.75,0.75)
        this.ball_1.setScale(0.14,0.14)
        this.input.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, function (pointer) {
            console.log(pointer)
            alert(pointer.downX)
            self.ball_1.visible=false;
            play=true;

        });
        this.sprite.setScale(0.5,0.5);
        this.sprite.visible=false

    }

    update(time, delta){
        if(play){
            this.sprite.visible=true;
            // this.sprite.play('walk');
            if(this.sprite.y<430){
                this.sprite.stop();
            }else{
                
                this.sprite.y -=0.5;
            }
        }
        // this.sprite.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, function(pointer){
        //     console.log("AAAAAAAAAA", delta)
        // })
        // this.sprite.setDisplaySize(this.sprite.displayOriginX-11, this.sprite.displayOriginY-11);
        // // this.sprite.y -=0.5;
        // if(this.sprite.y<430){
        //     this.sprite.stop();
        //     // console.log("BBBBBBBB")
        // }else{
        //     // this.sprite.y -=0.5;
        //     // this.sprite.setScale(-0.5, -0.5)
        // }
        // this.idInfo.setText(this.id)
        // this.cursors.up.isDown()
    }
}