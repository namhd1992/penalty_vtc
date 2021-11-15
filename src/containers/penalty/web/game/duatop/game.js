import Phaser from "phaser";

import backgound from '../../../assert/background.png';
import ball from '../../../assert/ball.png';
import goal_center from '../../../assert/goal_center.png';
import ball_rotation from '../../../assert/ball/ball_sprite.png';
import ball_rotation_json from '../../../assert/ball/ball_sprite.json'

import k_idle from '../../../assert/k_idle.png';
import k_idle_json from '../../../assert/k_idle.json';

import keep_goal_left_1 from '../../../assert/keep_goal/keep_goal_left_1.png';
import keep_goal_left_1_json from '../../../assert/keep_goal/keep_goal_left_1.json';
import keep_goal_left_2 from '../../../assert/keep_goal/keep_goal_left_2.png';
import keep_goal_left_2_json from '../../../assert/keep_goal/keep_goal_left_2.json';
import keep_goal_left_3 from '../../../assert/keep_goal/keep_goal_left_3.png';
import keep_goal_left_3_json from '../../../assert/keep_goal/keep_goal_left_3.json';
import keep_goal_left_4 from '../../../assert/keep_goal/keep_goal_left_4.png';
import keep_goal_left_4_json from '../../../assert/keep_goal/keep_goal_left_4.json';

import keep_goal_punch from '../../../assert/keep_goal/keep_goal_punch.png';
import keep_goal_punch_json from '../../../assert//keep_goal/keep_goal_punch.json';

import keep_goal_right_1 from '../../../assert/keep_goal/keep_goal_right_1.png';
import keep_goal_right_1_json from '../../../assert/keep_goal/keep_goal_right_1.json';
import keep_goal_right_2 from '../../../assert/keep_goal/keep_goal_right_2.png';
import keep_goal_right_2_json from '../../../assert/keep_goal/keep_goal_right_2.json';
import keep_goal_right_3 from '../../../assert/keep_goal/keep_goal_right_3.png';
import keep_goal_right_3_json from '../../../assert/keep_goal/keep_goal_right_3.json';
import keep_goal_right_4 from '../../../assert/keep_goal/keep_goal_right_4.png';
import keep_goal_right_4_json from '../../../assert/keep_goal/keep_goal_right_4.json';

import soccer_kick_left from '../../../assert/keep_goal/soccer_kick_left.png';
import soccer_kick_left_json from '../../../assert/keep_goal/soccer_kick_left.json';
import soccer_kick_right from '../../../assert/keep_goal/soccer_kick_right.png';
import soccer_kick_right_json from '../../../assert/keep_goal/soccer_kick_right.json';
import soccer from '../../../assert/keep_goal/soccer.png';

import goal_center_anims from '../../../assert/goal_anims/goal_center_anims.png';
import goal_center_anims_json from '../../../assert/goal_anims/goal_center_anims.json';
import goal_left from '../../../assert/goal_anims/goal_left.png';
import goal_left_json from '../../../assert/goal_anims/goal_left.json';
import goal_right from '../../../assert/goal_anims/goal_right.png';
import goal_right_json from '../../../assert/goal_anims/goal_right.json';

import bg_bangxephang from '../../../assert/bg-bangxephang.png';
import bg_banthang from '../../../assert/bg-banthang.png';
import bg_giaithuong from '../../../assert/bg-giaithuong.png';
import opt_suttudong from '../../../assert/opt-suttudong.png';
import btn_suttudong from '../../../assert/btn-suttudong.png';
import bg_title_loaitructiep from '../../../assert/bg-title-loaitructiep.png';
import bg_taikhoan from '../../../assert/bg-taikhoan.png';



var play=false;
var x=1;
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
        this.load.atlas('keep_goal_left_1', keep_goal_left_1, keep_goal_left_1_json);
        this.load.atlas('keep_goal_left_2', keep_goal_left_2, keep_goal_left_2_json);
        this.load.atlas('keep_goal_left_3', keep_goal_left_3, keep_goal_left_3_json);
        this.load.atlas('keep_goal_left_4', keep_goal_left_4, keep_goal_left_4_json);
        this.load.atlas('keep_goal_punch', keep_goal_punch, keep_goal_punch_json);
        this.load.atlas('keep_goal_right_1', keep_goal_right_1, keep_goal_right_1_json);
        this.load.atlas('keep_goal_right_2', keep_goal_right_2, keep_goal_right_2_json);
        this.load.atlas('keep_goal_right_3', keep_goal_right_3, keep_goal_right_3_json);
        this.load.atlas('keep_goal_right_4', keep_goal_right_4, keep_goal_right_4_json);
        this.load.atlas('soccer_kick_left', soccer_kick_left, soccer_kick_left_json);
        this.load.atlas('soccer_kick_right', soccer_kick_right, soccer_kick_right_json);
        this.load.atlas('goal_center_anims', goal_center_anims, goal_center_anims_json);
        this.load.atlas('goal_left', goal_left, goal_left_json);
        this.load.atlas('goal_right', goal_right, goal_right_json);
        // this.load.spritesheet('ball_rotation',ball_rotation, { frameWidth: 80, frameHeight: 80, endFrame: 23 });
        this.load.atlas('k_idle',k_idle,k_idle_json);

        // this.load.spritesheet('soccers', soccer, { frameWidth: 984, frameHeight: 1080 });
        
    }

    create(){
        this.timer=0;
        this.add.image(600,338,'background')
        this.add.image(600,325,'goal_center')
        this.ball_1=this.add.image(605,530,'ball');

        // const soccerAnimation = this.anims.create({
        //     key: 'soccer',
        //     frames: this.anims.generateFrameNumbers('soccers'),
        //     frameRate: 2
        // });

        // const soccer_sprite = this.add.sprite(900, 500, 'soccer');

        // soccer_sprite.play({ key: 'soccer', repeat: -2 });




        const keep_goal_left_1_Config = {
            key: 'k_left_1',
            frames: 'keep_goal_left_1',
            frameRate: 30,
            repeat: -2
        };
        this.anims.create(keep_goal_left_1_Config);
        this.keep_goal_left_1_sprite=this.add.sprite(675, 365, 'keep_goal_left_1', 'k_left_');
        this.keep_goal_left_1_sprite.setScale(1.5,1.5);
        this.keep_goal_left_1_sprite.visible=false;

        const keep_goal_left_2_Config = {
            key: 'k_left_2',
            frames: 'keep_goal_left_2',
            frameRate: 30,
            repeat: -2
        };
        this.anims.create(keep_goal_left_2_Config);
        this.keep_goal_left_2_sprite=this.add.sprite(750, 350, 'keep_goal_left_2', 'k_left2_');
        this.keep_goal_left_2_sprite.setScale(1.5,1.5);
        this.keep_goal_left_2_sprite.visible=false;

        const keep_goal_left_3_Config = {
            key: 'k_left_3',
            frames: 'keep_goal_left_3',
            frameRate: 30,
            repeat: -2
        };
        this.anims.create(keep_goal_left_3_Config);
        this.keep_goal_left_3_sprite=this.add.sprite(645, 365, 'keep_goal_left_3', 'k_left3_');
        this.keep_goal_left_3_sprite.setScale(1.5,1.5);
        this.keep_goal_left_3_sprite.visible=false;

        const keep_goal_left_4_Config = {
            key: 'k_left_4',
            frames: 'keep_goal_left_4',
            frameRate: 30,
            repeat: -2
        };
        this.anims.create(keep_goal_left_4_Config);
        this.keep_goal_left_4_sprite=this.add.sprite(740, 365, 'keep_goal_left_4', 'k_left4_');
        this.keep_goal_left_4_sprite.setScale(1.5,1.5);
        this.keep_goal_left_4_sprite.visible=false;
        
        const keep_goal_punch_Config = {
            key: 'k_punch',
            frames: 'keep_goal_punch',
            frameRate: 30,
            repeat: -2
        };
        this.anims.create(keep_goal_punch_Config);
        this.keep_goal_punch_sprite=this.add.sprite(595, 365, 'keep_goal_punch', 'k_punch_');
        this.keep_goal_punch_sprite.setScale(1.5,1.5);
        this.keep_goal_punch_sprite.visible=false;

        const keep_goal_right_1_Config = {
            key: 'k_right_1',
            frames: 'keep_goal_right_1',
            frameRate: 30,
            repeat: -2
        };
        this.anims.create(keep_goal_right_1_Config);
        this.keep_goal_right_1_sprite=this.add.sprite(525, 365, 'keep_goal_right_1', 'k_right1_');
        this.keep_goal_right_1_sprite.setScale(1.5,1.5);
        this.keep_goal_right_1_sprite.visible=false;

        const keep_goal_right_2_Config = {
            key: 'k_right_2',
            frames: 'keep_goal_right_2',
            frameRate: 30,
            repeat: -2
        };
        this.anims.create(keep_goal_right_2_Config);
        this.keep_goal_right_2_sprite=this.add.sprite(450, 355, 'keep_goal_right_2', 'k_right2_');
        this.keep_goal_right_2_sprite.setScale(1.5,1.5);
        this.keep_goal_right_2_sprite.visible=false;

        const keep_goal_right_3_Config = {
            key: 'k_right_3',
            frames: 'keep_goal_right_3',
            frameRate: 30,
            repeat: -2
        };
        this.anims.create(keep_goal_right_3_Config);
        this.keep_goal_right_3_sprite=this.add.sprite(560, 370, 'keep_goal_right_3', 'k_right3_');
        this.keep_goal_right_3_sprite.setScale(1.5,1.5);
        this.keep_goal_right_3_sprite.visible=false;

        const keep_goal_right_4_Config = {
            key: 'k_right_4',
            frames: 'keep_goal_right_4',
            frameRate: 30,
            repeat: -2
        };
        this.anims.create(keep_goal_right_4_Config);
        this.keep_goal_right_4_sprite=this.add.sprite(475, 355, 'keep_goal_right_4', 'k_right4_');
        this.keep_goal_right_4_sprite.setScale(1.5,1.5);
        this.keep_goal_right_4_sprite.visible=false;

        const soccer_kick_left_Config = {
            key: 'kick_left',
            frames: 'soccer_kick_left',
            frameRate: 20,
            repeat: 1
        };
        this.anims.create(soccer_kick_left_Config);
        this.soccer_kick_left_sprite=this.add.sprite(885, 250, 'soccer_kick_left', 'kick_left_');
        this.soccer_kick_left_sprite.setScale(3.4,3.4);
        // this.soccer_kick_left_sprite.visible=false;

        const soccer_kick_right_Config = {
            key: 'kick_right',
            frames: 'soccer_kick_right',
            frameRate: 30,
            repeat: 1
        };
        this.anims.create(soccer_kick_right_Config);
        this.soccer_kick_right_sprite=this.add.sprite(665, 365, 'soccer_kick_right', 'kick_right_');
        this.soccer_kick_right_sprite.setScale(1.5,1.5);
        this.soccer_kick_right_sprite.visible=false;

        const goal_center_anims_Config = {
            key: 'goal_center',
            frames: 'goal_center_anims',
            frameRate: 30,
            repeat: 1
        };
        this.anims.create(goal_center_anims_Config);
        this.goal_center_anims_sprite=this.add.sprite(665, 365, 'goal_center_anims', 'center_');
        this.goal_center_anims_sprite.setScale(1.5,1.5);
        this.goal_center_anims_sprite.visible=false;

        const goal_left_Config = {
            key: 'g_left',
            frames: 'goal_left',
            frameRate: 30,
            repeat: 1
        };
        this.anims.create(goal_left_Config);
        this.goal_left_sprite=this.add.sprite(665, 365, 'goal_left', 'left_');
        this.goal_left_sprite.setScale(1.5,1.5);
        this.goal_left_sprite.visible=false;

        const goal_right_Config = {
            key: 'g_right',
            frames: 'goal_right',
            frameRate: 30,
            repeat: 1
        };
        this.anims.create(goal_right_Config);
        this.goal_right_sprite=this.add.sprite(665, 365, 'goal_right', 'center_');
        this.goal_right_sprite.setScale(1.5,1.5);
        this.goal_right_sprite.visible=false;


        // var a= Phaser.Math.Distance.BetweenPoints
        const self = this;


        const animConfig = {
            key: 'walk',
            frames: 'ball_rotation',
            frameRate: 10,
            repeat: -1
        };
        this.anims.create(animConfig);

        this.ball_rotation_sprite = this.add.sprite(605, 530, 'ball_rotation', 'rotation_');
        this.ball_rotation_sprite.play('walk');

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
        this.k_idle_sprite=this.add.sprite(600, 365, 'k_idle', 'k_idle_').play('k_id');
        this.k_idle_sprite.setScale(0.75,0.75);
  
        this.ball_1.setScale(0.14,0.14)
        this.input.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, function (pointer) {
            self.setBallLine(pointer)
            
            setTimeout(()=>{ 
                play=true;
            }, 500);
            // var inter=setInterval(()=>{	
            //     console.log('AAAAAAAAA')
            //     self.ball_rotation_sprite.setScale(0.4,0.4)
            // }, 200);
            self.k_idle_sprite.visible=false;
            // self.keep_goal_left_1_sprite.visible=true;
            // self.keep_goal_left_1_sprite.play("k_left_1")
            self.soccer_kick_left_sprite.play("kick_left")


        });
        this.ball_rotation_sprite.setScale(0.65,0.65);
        // this.ball_rotation_sprite.visible=false;
        // this.ball_1.visible=false;
        // this.k_idle_sprite.visible=false

    }

    update(time, delta){
       
        if(play){
            this.ball_1.visible=false;
            this.ball_rotation_sprite.visible=true;
            // this.sprite.play('walk');
            if(this.ball_rotation_sprite.y<420){
                this.ball_rotation_sprite.stop();
            }else{
                this.ball_rotation_sprite.y -=1.5;
                this.ball_rotation_sprite.x -=0.5;
                this.timer += delta;
                while (this.timer > 10) {
                    x -=0.012
                    this.ball_rotation_sprite.setScale(x,x);
                    this.timer=0;
                }         
            }
        }
   
    }

    setSizeBall(positionY){
        
    }

    setBallLine(pointer){
        const startX=pointer.downX;
        const startY=pointer.downY;
        const endX=pointer.upX;
        const endY=pointer.upY;
        var a=startX-endX;
        var b=startY-endY;
        
        if(a>0){

        }else if(a<0){

        }else{

        }

        if(b>0){

        }else if(b<0){

        }else{
            
        }

    }
}



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