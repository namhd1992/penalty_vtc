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
import ball_rotation_json from '../../../assert/ball/ball_sprite.json';

import ball_lasted_collision from '../../../assert/ball/ball_sprite.png';
import ball_lasted_collision_json from '../../../assert/ball/ball_sprite.json';

import k_idle from '../../../assert/keep_goal/keep_goal_idle.png';
import k_idle_json from '../../../assert/keep_goal/keep_goal_idle.json';

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
var ball_collision_goal=false;
var ball_collision_keper=false;
var is_ball_lasted=false;
var result=0;
var delta_alpha=1;
var data_game={}
export default class Game extends Phaser.Scene{
    constructor() {
        super({ key: "Game" });
    }


    init(data){
        this.id=data.id;
        var reg = {};
        var user = JSON.parse(localStorage.getItem("user"));
        var info_seesion = JSON.parse(localStorage.getItem("info_seesion"));
        if(user!==null){
            var data= {...info}
            data.userId= bigInt(user.uid);
            data.gameId=1;
            data.serverId=1;
            data.modeId=3;
            data.roomId=info_seesion.id;
            data.rakingLimit=10
            var header = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user.access_token}`,
                    "dataType":"json"
                }
            }
            axios.post(Ultilities.base_url() +'/lobby/api/v1/knockout/connect', data, header).then(function (response) {
    
                if(response.data.code>=0){
                    data_game=response.data.data
                }
            })
        }
    }
    
    preload(){
        this.load.image('background', backgound);
        this.load.image('goal_center', goal_center);
        this.load.image('ball', ball);
        // this.load.image('bg_bangxephang', opt_suttudong);

        this.load.atlas('ball_rotation', ball_rotation, ball_rotation_json);
        this.load.atlas('ball_lasted_collision', ball_lasted_collision, ball_lasted_collision_json);
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
        this.load.atlas('k_idle',k_idle,k_idle_json);

        
        // this.load.image('bg_banthang', bg_banthang);
        // this.load.image('bg_giaithuong', bg_giaithuong);
        // this.load.image('opt_suttudong', opt_suttudong);
        // this.load.image('btn_suttudong', btn_suttudong);
        // this.load.image('bg_taikhoan', bg_taikhoan);
        // this.load.image('bg_title_loaitructiep', bg_title_loaitructiep);
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
            frameRate: 5,
            repeat: -2
        };
        this.anims.create(keep_goal_left_1_Config);
        this.keep_goal_left_1_sprite=this.add.sprite(675, 365, 'keep_goal_left_1', 'k_left_');
        this.keep_goal_left_1_sprite.visible=false;
        this.keep_goal_left_1_sprite.play('k_left_1');

        const keep_goal_left_2_Config = {
            key: 'k_left_2',
            frames: 'keep_goal_left_2',
            frameRate: 6,
            repeat: -2
        };
        this.anims.create(keep_goal_left_2_Config);
        this.keep_goal_left_2_sprite=this.add.sprite(730, 361, 'keep_goal_left_2', 'k_left2_');
        this.keep_goal_left_2_sprite.visible=false;
        this.keep_goal_left_2_sprite.play('k_left_2');


        const keep_goal_left_3_Config = {
            key: 'k_left_3',
            frames: 'keep_goal_left_3',
            frameRate: 6,
            repeat: -2
        };
        this.anims.create(keep_goal_left_3_Config);
        this.keep_goal_left_3_sprite=this.add.sprite(645, 365, 'keep_goal_left_3', 'k_left3_');
        this.keep_goal_left_3_sprite.visible=false;
        this.keep_goal_left_3_sprite.play('k_left_3');

        const keep_goal_left_4_Config = {
            key: 'k_left_4',
            frames: 'keep_goal_left_4',
            frameRate: 8,
            repeat: -2
        };
        this.anims.create(keep_goal_left_4_Config);
        this.keep_goal_left_4_sprite=this.add.sprite(733, 365, 'keep_goal_left_4', 'k_left4_');
        this.keep_goal_left_4_sprite.visible=false;
        this.keep_goal_left_4_sprite.play('k_left_4');
        
        const keep_goal_punch_Config = {
            key: 'k_punch',
            frames: 'keep_goal_punch',
            frameRate: 8,
            repeat: -2
        };
        this.anims.create(keep_goal_punch_Config);
        this.keep_goal_punch_sprite=this.add.sprite(595, 365, 'keep_goal_punch', 'k_punch_');
        this.keep_goal_punch_sprite.visible=false;
        this.keep_goal_punch_sprite.play('k_punch');

        const keep_goal_right_1_Config = {
            key: 'k_right_1',
            frames: 'keep_goal_right_1',
            frameRate: 8,
            repeat: -2
        };
        this.anims.create(keep_goal_right_1_Config);
        this.keep_goal_right_1_sprite=this.add.sprite(525, 365, 'keep_goal_right_1', 'k_right1_');
        this.keep_goal_right_1_sprite.visible=false;
        this.keep_goal_right_1_sprite.play('k_right_1');

        const keep_goal_right_2_Config = {
            key: 'k_right_2',
            frames: 'keep_goal_right_2',
            frameRate: 8,
            repeat: -2
        };
        this.anims.create(keep_goal_right_2_Config);
        this.keep_goal_right_2_sprite=this.add.sprite(465, 360, 'keep_goal_right_2', 'k_right2_');
        this.keep_goal_right_2_sprite.visible=false;
        this.keep_goal_right_2_sprite.play('k_right_2');


        const keep_goal_right_3_Config = {
            key: 'k_right_3',
            frames: 'keep_goal_right_3',
            frameRate: 8,
            repeat: -2
        };
        this.anims.create(keep_goal_right_3_Config);
        this.keep_goal_right_3_sprite=this.add.sprite(560, 370, 'keep_goal_right_3', 'k_right3_');
        this.keep_goal_right_3_sprite.visible=false;
        this.keep_goal_right_3_sprite.play('k_right_3');


        const keep_goal_right_4_Config = {
            key: 'k_right_4',
            frames: 'keep_goal_right_4',
            frameRate: 8,
            repeat: -2
        };
        this.anims.create(keep_goal_right_4_Config);
        this.keep_goal_right_4_sprite=this.add.sprite(485, 365, 'keep_goal_right_4', 'k_right4_');
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

        const ball_lasted_collision_config = {
            key: 'ball_lasted',
            frames: 'ball_lasted_collision',
            frameRate: 10,
            repeat: -1
        };
        this.anims.create(ball_lasted_collision_config);

        this.ball_lasted_collision_sprite = this.physics.add.sprite(605, 530, 'ball_lasted_collision', 'rotation_');
        this.ball_lasted_collision_sprite.play('ball_lasted');
        this.ball_lasted_collision_sprite.visible=false;


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
            frameRate: 50,
            repeat: -1
        };
        this.anims.create(k_idleConfig);
    
        // this.anims.create(config);
        // this.anims.create(k_i);
    
        // this.add.sprite(400, 300, 'ball_rotation').play('explodeAnimation');
        this.k_idle_sprite=this.add.sprite(600, 365, 'k_idle', 'k_idle_').play('k_id');
        // this.k_idle_sprite.visible=false;

        // this.add.image(600,338,'bg_bangxephang')
        // this.add.image(600,338,'bg_banthang')
        // this.add.image(600,338,'bg_giaithuong')
        // this.add.image(600,338,'btn_suttudong')
        // this.add.image(600,338,'opt_suttudong')
        // this.add.image(600,338,'bg_taikhoan')
        // this.add.image(600,338,'bg_title_loaitructiep')


        this.input.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, function (pointer) {
            var user = JSON.parse(localStorage.getItem("user"));
            var points=data_game.user.points;
            var info_seesion = JSON.parse(localStorage.getItem("info_seesion"));
            if(points>0){
                if(pointer.downY-pointer.upY > 0){
                    var positionBall=self.getPositionBall(pointer);
                    var keeper_id=self.setPositionKeeper(positionBall[0],positionBall[1])
                    console.log(positionBall)
                    console.log('keeper_id',keeper_id)
                    if(user!==null){
                        var data= {...info}
                        data.userId= bigInt(user.uid);
                        data.gameId=1;
                        data.serverId=1;
                        data.modeId=3;
                        data.roomId=info_seesion.id;
                        data.x=1;
                        data.y=1;
                        data.z=1;
                        data.zone=11;
                        data.autoPlay=false
                        var header = {
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": `Bearer ${user.access_token}`,
                                "dataType":"json"
                            }
                        }
                        axios.post(Ultilities.base_url() +'/lobby/api/v1/knockout/playing', data, header).then(function (response) {
                            if(response.data.code>=0){
                                result=response.data.data.result; 
                                self.setBallLine(pointer)
                                var g = self.getRandomInt(0,2)
                                var kg = self.getRandomInt(0,8)
                                setTimeout(()=>{ 
                                    play=true;
                                }, 550);
            
                                setTimeout(()=>{ 
                                    self.setKeepGoal(keeper_id);
                                    self.k_idle_sprite.visible=false;
                                }, 1500);
            
                                self.soccer_kick_left_sprite.play("kick_left")
                                
                                setTimeout(()=>{ 
                                    play=false;
                                    x=1;
                                    increase_x=0;
                                    increase_y=0;
                                    delta_alpha=1;
                                    is_ball_lasted=false;
                                    self.registry.destroy();
                                    self.events.off();
                                    self.scene.restart();
                                }, 5000);
                            }else{
                                console.log("Server đang lỗi.")
                            }
                        })
    
                       
                    }
                }else{
                    console.log("Bạn đã hết Điểm")
                }
            }
            

          
        });

        // starsIcon.on('pointerup', function () {
        //     this.cre

        //     this.createWindow(Stars);

        // }, this);

    }

    update(time, delta){
        if(play){
            // console.log(result)
        
            this.ball_1.visible=false;
            if(!is_ball_lasted){
                this.ball_rotation_sprite.visible=true;
            }
            var power=0;
            var ball_with_time=0;
            var h=increase_y;
            var m=0;
            if(increase_x>-1.05 && increase_x<1.05){
                m=1
            }else{
                m=2
            }
            // console.log(h)
           
            var k=h > 100 ? h/100 : 1;
            if(h>0 && h<110){
                ball_with_time=0.0125;
                power=412;
            }else if(h>110 & h<250){
                power=515-h;
                ball_with_time=0.0145
            }else{
                power=515-h;
                ball_with_time=0.02;
                k=5
            }
            // console.log(increase_x)

            // this.sprite.play('walk');
            if(h<250){
                if(this.ball_rotation_sprite.y<power){
                    if(!is_ball_lasted){
                        this.ball_rotation_sprite.visible=false;
                        this.ball_lasted_collision_sprite.setX(this.ball_rotation_sprite.x);
                        this.ball_lasted_collision_sprite.setY(this.ball_rotation_sprite.y);
                        this.ball_lasted_collision_sprite.setScale(this.ball_rotation_sprite._scaleX, this.ball_rotation_sprite._scaleY)
                        this.ball_lasted_collision_sprite.visible=true;
                        is_ball_lasted=true;
                    }
                    if(result===2){
                        this.goal.visible=false;
                        if(increase_x > 1.05){
                            this.goal_left_sprite.visible=true
                        }else if(increase_x < -1.05){
                            this.goal_right_sprite.visible=true
                        }else{
                            this.goal_center_anims_sprite.visible=true
                        }
                    }      
                }else{
                   
                    this.ball_rotation_sprite.y -=2*k;
                    this.ball_rotation_sprite.x +=m*increase_x;
                    this.timer += delta;
                    while (this.timer > 5) {
                        x -=ball_with_time;
                        this.ball_rotation_sprite.setScale(x,x);
                        this.timer=0;
                    }         
                }
            }else{
                this.ball_rotation_sprite.y -=2*k;
                this.ball_rotation_sprite.x +=m*increase_x;
                this.timer += delta;
                while (this.timer > 5) {
                    x -=ball_with_time;
                    delta_alpha -=0.01
                    this.ball_rotation_sprite.setScale(x,x);
                    this.ball_rotation_sprite.setAlpha(delta_alpha);
                    this.timer=0;
                }         
            }
            
            
            if(is_ball_lasted){
                if(h<250){
                    if(this.ball_lasted_collision_sprite.y < 423){
                        this.ball_lasted_collision_sprite.y +=1.5*k;
                        this.ball_lasted_collision_sprite.x +=1*increase_x;
                        if(this.ball_lasted_collision_sprite.x > 844){
                            this.ball_lasted_collision_sprite.x -=1*increase_x;
                            this.ball_lasted_collision_sprite.y +=1.7*k;
                        }

                        if(this.ball_lasted_collision_sprite.x < 380){
                            this.ball_lasted_collision_sprite.x -=1*increase_x;
                            this.ball_lasted_collision_sprite.y +=1.7*k;
                        }
                    }else{
                        setTimeout(()=>{ 
                            this.ball_lasted_collision_sprite.stop()
                        }, 500);
                        
                    }
                }
               
                
            }
        }
    }

    footballOut(){

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
        // console.log(n)
        switch (n) {
            case 1:
                this.keep_goal_right_2_sprite.visible=true;
                break;
            case 2:
                this.keep_goal_right_1_sprite.visible=true;
                break;
            case 3:
                this.keep_goal_left_1_sprite.visible=true;
                break;
            case 4:
                this.keep_goal_left_2_sprite.visible=true;
                break;
            case 5:
                this.keep_goal_right_4_sprite.visible=true;
                break;
            case 6:
                this.keep_goal_right_3_sprite.visible=true;
                break;
            case 7:
                this.keep_goal_left_3_sprite.visible=true;
                break;
            case 8:
                this.keep_goal_left_4_sprite.visible=true;
                break;
            case 9:
                this.keep_goal_punch_sprite.visible=true;
                break;
            default:
                this.goal_center_anims_sprite.visible=true
                break;
        }
        
    }

    getPositionBall(pointer){
        const startX=pointer.downX;
        const startY=pointer.downY;
        const endX=pointer.upX;
        const endY=pointer.upY;
        var power=0
        var a=startX-endX;
        var b=startY-endY;
        var m=0
        var dis1=Math.sqrt((a*a+b*b))
        var k=b > 100 ? b/100 : 1;
       
        increase_x=a>0?(-dis1/b):(dis1/b)

        if(increase_x>-1.05 && increase_x<1.05){
            m=1
        }else{
            m=2
        }

        if(b>0 && b<110){
            power=415;
        }else if(b>110 & b<250){
            power=515-b;
        }

        var n=(530-power)/(2*k)
        var y=power;
        var x=605+n*increase_x*m;
        return [x,y];
    }


    setPositionKeeper(x,y){
        if(x >= 338 && x < 475 && y >= 228 && y < 336)
            return 1;
        if(x >= 475 && x < 555 && y >= 228 && y < 336)
            return 2;
        if(x >= 655 && x < 745 && y >= 228 && y < 336)
            return 3;
        if(x >= 745 && x < 870 && y >= 228 && y < 336)
            return 4;
        if(x >= 338 && x < 475 && y >= 336 && y < 430)
            return 5;
        if(x >= 475 && x < 555 && y >= 336 && y < 430)
            return 6;
        if(x >= 655 && x < 745 && y >= 336 && y < 430)
            return 7;
        if(x >= 745 && x < 870 && y >= 336 && y < 430)
            return 8;
        if(x >= 555 && x < 655 && y >= 228 && y < 430)
            return 9;
    }



    

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


}

// điểm 1: x:338 , y:228
// điểm 2: x:475 , y:228
// điểm 3: x:555 , y:228
// điểm 4: x:605 , y:228
// điểm 5: x:655 , y:228
// điểm 6: x:745 , y:228
// điểm 7: x:870 , y:228
// điểm 8: x:338 , y:336
// điểm 9: x:475 , y:336
// điểm 10: x:555 , y:336
// điểm 11: x:605 , y:336
// điểm 12: x:655 , y:336
// điểm 13: x:745 , y:336
// điểm 14: x:870 , y:336
// điểm 15: x:338 , y:430
// điểm 16: x:475 , y:430
// điểm 17: x:555 , y:430
// điểm 18: x:605 , y:430
// điểm 19: x:655 , y:430
// điểm 20: x:745 , y:430
// điểm 21: x:870 , y:430

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