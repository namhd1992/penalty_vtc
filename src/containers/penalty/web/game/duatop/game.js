import Phaser from "phaser";
import {
	osVersion,
	osName,
	mobileModel
  } from "react-device-detect";
  import bigInt from "big-integer";
import axios from 'axios';
import Ultilities from '../../../../../Ultilities/global'

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

const list_keep=[]
const list_goal=[]
const info={
	"lang": "vi",
	"osType": osName.toLocaleUpperCase(),
	"deviceId": "00000000-0000-0000-0000-000000000000",
	"deviceName": mobileModel,
	"osVersion": osVersion,
	"appVersion": "1.0",
	"requestId": 365603310,
}

var play=false;
var x=1;
var increase_x=0;
var increase_y=0;
export default class Game extends Phaser.Scene{
    constructor() {
        super({ key: "Game" });
    }


    init(data){
        this.id=data.id;

        var user = JSON.parse(localStorage.getItem("user"));
        if(user!==null){
            var data= {...info}
            data.userId= bigInt(user.uid);
            data.gameId=1;
            data.serverId=1;
            data.modeId=1;
            data.roomId=1;
            data.rakingLimit=10
            var header = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user.access_token}`,
                    "dataType":"json"
                }
            }
            axios.post(Ultilities.base_url() +'/lobby/api/v1/race/connect', data, header).then(function (response) {
    
                if(response.data.code>=0){
                    
                }
            })
        }
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
        this.timer_reload=0;
        this.add.image(600,338,'background')
        this.goal=this.physics.add.image(600,320,'goal_center')
        this.ball_1=this.add.image(605,530,'ball');

        // const soccerAnimation = this.anims.create({
        //     key: 'soccer',
        //     frames: this.anims.generateFrameNumbers('soccers'),
        //     frameRate: 2
        // });

        // const soccer_sprite = this.add.sprite(900, 500, 'soccer');

        // soccer_sprite.play({ key: 'soccer', repeat: -2 });

        const goal_center_anims_Config = {
            key: 'goal_center',
            frames: 'goal_center_anims',
            frameRate: 12,
            repeat: 2
        };
        this.anims.create(goal_center_anims_Config);
        this.goal_center_anims_sprite=this.add.sprite(600, 320, 'goal_center_anims', 'center_');
        this.goal_center_anims_sprite.visible=false;
        this.goal_center_anims_sprite.play('goal_center');


        const goal_left_Config = {
            key: 'g_left',
            frames: 'goal_left',
            frameRate: 12,
            repeat: 2
        };
        this.anims.create(goal_left_Config);
        this.goal_left_sprite=this.add.sprite(600, 320, 'goal_left', 'left_');
        this.goal_left_sprite.visible=false;
        this.goal_left_sprite.play('g_left');

        const goal_right_Config = {
            key: 'g_right',
            frames: 'goal_right',
            frameRate: 12,
            repeat: 2
        };
        this.anims.create(goal_right_Config);
        this.goal_right_sprite=this.add.sprite(600, 320, 'goal_right', 'center_');
        this.goal_right_sprite.visible=false;
        this.goal_right_sprite.play('g_right');

        const keep_goal_left_1_Config = {
            key: 'k_left_1',
            frames: 'keep_goal_left_1',
            frameRate: 15,
            repeat: -2
        };
        this.anims.create(keep_goal_left_1_Config);
        this.keep_goal_left_1_sprite=this.add.sprite(675, 365, 'keep_goal_left_1', 'k_left_');
        this.keep_goal_left_1_sprite.setScale(1.5,1.5);
        this.keep_goal_left_1_sprite.visible=false;
        this.keep_goal_left_1_sprite.play('k_left_1');

        const keep_goal_left_2_Config = {
            key: 'k_left_2',
            frames: 'keep_goal_left_2',
            frameRate: 15,
            repeat: -2
        };
        this.anims.create(keep_goal_left_2_Config);
        this.keep_goal_left_2_sprite=this.add.sprite(750, 350, 'keep_goal_left_2', 'k_left2_');
        this.keep_goal_left_2_sprite.setScale(1.5,1.5);
        this.keep_goal_left_2_sprite.visible=false;
        this.keep_goal_left_2_sprite.play('k_left_2');


        const keep_goal_left_3_Config = {
            key: 'k_left_3',
            frames: 'keep_goal_left_3',
            frameRate: 15,
            repeat: -2
        };
        this.anims.create(keep_goal_left_3_Config);
        this.keep_goal_left_3_sprite=this.add.sprite(645, 365, 'keep_goal_left_3', 'k_left3_');
        this.keep_goal_left_3_sprite.setScale(1.5,1.5);
        this.keep_goal_left_3_sprite.visible=false;
        this.keep_goal_left_3_sprite.play('k_left_3');

        const keep_goal_left_4_Config = {
            key: 'k_left_4',
            frames: 'keep_goal_left_4',
            frameRate: 15,
            repeat: -2
        };
        this.anims.create(keep_goal_left_4_Config);
        this.keep_goal_left_4_sprite=this.add.sprite(740, 365, 'keep_goal_left_4', 'k_left4_');
        this.keep_goal_left_4_sprite.setScale(1.5,1.5);
        this.keep_goal_left_4_sprite.visible=false;
        this.keep_goal_left_4_sprite.play('k_left_4');
        
        const keep_goal_punch_Config = {
            key: 'k_punch',
            frames: 'keep_goal_punch',
            frameRate: 15,
            repeat: -2
        };
        this.anims.create(keep_goal_punch_Config);
        this.keep_goal_punch_sprite=this.add.sprite(595, 365, 'keep_goal_punch', 'k_punch_');
        this.keep_goal_punch_sprite.setScale(1.5,1.5);
        this.keep_goal_punch_sprite.visible=false;
        this.keep_goal_punch_sprite.play('k_punch');

        const keep_goal_right_1_Config = {
            key: 'k_right_1',
            frames: 'keep_goal_right_1',
            frameRate: 15,
            repeat: -2
        };
        this.anims.create(keep_goal_right_1_Config);
        this.keep_goal_right_1_sprite=this.add.sprite(525, 365, 'keep_goal_right_1', 'k_right1_');
        this.keep_goal_right_1_sprite.setScale(1.5,1.5);
        this.keep_goal_right_1_sprite.visible=false;
        this.keep_goal_right_1_sprite.play('k_right_1');

        const keep_goal_right_2_Config = {
            key: 'k_right_2',
            frames: 'keep_goal_right_2',
            frameRate: 15,
            repeat: -2
        };
        this.anims.create(keep_goal_right_2_Config);
        this.keep_goal_right_2_sprite=this.add.sprite(450, 355, 'keep_goal_right_2', 'k_right2_');
        this.keep_goal_right_2_sprite.setScale(1.5,1.5);
        this.keep_goal_right_2_sprite.visible=false;
        this.keep_goal_right_2_sprite.play('k_right_2');


        const keep_goal_right_3_Config = {
            key: 'k_right_3',
            frames: 'keep_goal_right_3',
            frameRate: 15,
            repeat: -2
        };
        this.anims.create(keep_goal_right_3_Config);
        this.keep_goal_right_3_sprite=this.add.sprite(560, 370, 'keep_goal_right_3', 'k_right3_');
        this.keep_goal_right_3_sprite.setScale(1.5,1.5);
        this.keep_goal_right_3_sprite.visible=false;
        this.keep_goal_right_3_sprite.play('k_right_3');


        const keep_goal_right_4_Config = {
            key: 'k_right_4',
            frames: 'keep_goal_right_4',
            frameRate: 15,
            repeat: -2
        };
        this.anims.create(keep_goal_right_4_Config);
        this.keep_goal_right_4_sprite=this.add.sprite(475, 355, 'keep_goal_right_4', 'k_right4_');
        this.keep_goal_right_4_sprite.setScale(1.5,1.5);
        this.keep_goal_right_4_sprite.visible=false;
        this.keep_goal_right_4_sprite.play('k_right_4');

        const animConfig = {
            key: 'walk',
            frames: 'ball_rotation',
            frameRate: 10,
            repeat: -1
        };
        this.anims.create(animConfig);

        this.ball_rotation_sprite = this.physics.add.sprite(605, 530, 'ball_rotation', 'rotation_');
        this.ball_rotation_sprite.play('walk');
        this.ball_rotation_sprite.visible=false;


        const soccer_kick_left_Config = {
            key: 'kick_left',
            frames: 'soccer_kick_left',
            frameRate: 20,
            repeat: -2
        };
        this.anims.create(soccer_kick_left_Config);
        this.soccer_kick_left_sprite=this.add.sprite(885, 250, 'soccer_kick_left', 'kick_left_');
        // this.soccer_kick_left_sprite.setScale(3.4,3.4);
        // this.soccer_kick_left_sprite.visible=false;

        const soccer_kick_right_Config = {
            key: 'kick_right',
            frames: 'soccer_kick_right',
            frameRate: 30,
            repeat: -2
        };
        this.anims.create(soccer_kick_right_Config);
        this.soccer_kick_right_sprite=this.add.sprite(665, 365, 'soccer_kick_right', 'kick_right_');
        // this.soccer_kick_right_sprite.setScale(1.5,1.5);
        this.soccer_kick_right_sprite.visible=false;




        // var a= Phaser.Math.Distance.BetweenPoints
        const self = this;


       

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

        this.input.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, function (pointer) {
            self.setBallLine(pointer)

           
            if(pointer.downY-pointer.upY > 0){
                var g = self.getRandomInt(0,2)
                var kg = self.getRandomInt(0,8)
                setTimeout(()=>{ 
                    play=true;
                    self.setKeepGoal(0);
                    self.setGoal(g);
                    self.k_idle_sprite.visible=false;
                    self.goal.visible=false
                }, 550);
                self.soccer_kick_left_sprite.play("kick_left")
                
                setTimeout(()=>{ 
                    play=false;
                    x=1;
                    increase_x=0;
                    increase_y=0;
                    self.registry.destroy();
                    self.events.off();
                    self.scene.restart();
                    console.log(self.goal_left_sprite)
                }, 5000);
               
    
            }
        });

        this.physics.add.collider(this.ball_rotation_sprite, this.goal, ()=>
        {
            if(this.ball_rotation_sprite.y<402){
                console.log("AAAAAAAAAA")
                // self.ball_rotation_sprite.stop()
                play=false
            }
            // console.log("AAAAAAAAAA")
            // // self.ball_rotation_sprite.stop()
            // play=false
            
        })

        this.physics.add.collider(this.ball_rotation_sprite, this.keep_goal_left_1_sprite, ()=>
        {
            if(this.ball_rotation_sprite.y<400){
                console.log("AAAAAAAAAA")
                // self.ball_rotation_sprite.stop()
                play=false
            }
            // console.log("AAAAAAAAAA")
            // // self.ball_rotation_sprite.stop()
            // play=false
            
        })
      
    }

    update(time, delta){
       
        if(play){
            this.ball_1.visible=false;
            this.ball_rotation_sprite.visible=true;
            var h=increase_y;
            var k=h > 100 ? h/100 : 1
            // this.sprite.play('walk');
            if(this.ball_rotation_sprite.y<300){
                this.ball_rotation_sprite.stop();
            }else{
                this.ball_rotation_sprite.y -=1.5*k;
                this.ball_rotation_sprite.x +=1.5*increase_x;
                this.timer += delta;
                while (this.timer > 10) {
                    x -=0.011
                    this.ball_rotation_sprite.setScale(x,x);
                    this.timer=0;
                }         
            }
        }
        // this.timer_reload+=delta
        // while (this.timer > 1000) {
        //    document.addEventListener("visibilitychange", event => {
        //         if (document.visibilityState == "visible") {
        //             window.location.reload();
        //         }
        //     })
        // }    
       
   
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
        var dis1=Math.sqrt((a*a+b*b))
       
        increase_x=a>0?(-dis1/b):(dis1/b)
        increase_y=b;
    }
    
    setKeepGoal(n){
        console.log(n)
        switch (n) {
            case 0:
                this.keep_goal_left_1_sprite.visible=true;
                break;
            case 1:
                this.keep_goal_left_2_sprite.visible=true
                break;
            case 2:
                this.keep_goal_left_3_sprite.visible=true
                break;
            case 3:
                this.keep_goal_left_4_sprite.visible=true
                break;
            case 4:
                this.keep_goal_punch_sprite.visible=true
                break;
            case 5:
                this.keep_goal_right_1_sprite.visible=true
                break;
            case 6:
                this.keep_goal_right_2_sprite.visible=true
                break;
            case 7:
                this.keep_goal_right_3_sprite.visible=true
                break;
            case 8:
                this.keep_goal_right_4_sprite.visible=true
                break;
            default:
                this.goal_center_anims_sprite.visible=true
                break;
        }
        
    }

    setGoal(n){
        // var n = this.getRandomInt(0,2)
        // list_goal[n].setVisible(true)
        // console.log(list_goal[n])
        console.log(n)
        switch (n) {
            case 0:
                this.goal_center_anims_sprite.visible=true
                break;
            case 1:
                this.goal_left_sprite.visible=true
                break;
            case 2:
                this.goal_right_sprite.visible=true
                break;
        
            default:
                this.goal_center_anims_sprite.visible=true
                break;
        }
       
    }

    

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}


// y1:267 y2:432 x1:336 x2:864

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