import Phaser from "phaser";
import {
	osVersion,
	osName,
	mobileModel
  } from "react-device-detect";
import axios from 'axios';
import Ultilities from '../../../../../Ultilities/global'


import backgound from '../../../assert/background.png';
import ball from '../../../assert/ball.png';
import goal_center from '../../../assert/goal_center.png';
import ball_rotation from '../../../assert/ball/ball_sprite.png';
import ball_rotation_json from '../../../assert/ball/ball_sprite.json';

import ball_collision_goal from '../../../assert/ball/ball_sprite.png';
import ball_collision_goal_json from '../../../assert/ball/ball_sprite.json';

import ball_collision_keeper from '../../../assert/ball/ball_sprite.png';
import ball_collision_keeper_json from '../../../assert/ball/ball_sprite.json';

import k_idle from '../../../assert/keep_goal/keep_goal_idle.png';
import k_idle_json from '../../../assert/keep_goal/keep_goal_idle.json';

import center_down from '../../../assert/keep_goal/center_down.png';
import center_down_json from '../../../assert/keep_goal/center_down.json';
import center_up from '../../../assert/keep_goal/center_up.png';
import center_up_json from '../../../assert/keep_goal/center_up.json';
import side_left_up from '../../../assert/keep_goal/side_left_up.png';
import side_left_up_json from '../../../assert/keep_goal/side_left_up.json';
import side_left from '../../../assert/keep_goal/side_left.png';
import side_left_json from '../../../assert/keep_goal/side_left.json';
import side_right_up from '../../../assert/keep_goal/side_right_up.png';
import side_right_up_json from '../../../assert/keep_goal/side_right_up.json';
import side_right from '../../../assert/keep_goal/side_right.png';
import side_right_json from '../../../assert/keep_goal/side_right.json';

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

import btn_std from '../../../assert/btn-std.png';
import opt_suttudong_checked from '../../../assert/duatop/opt-suttudong-checked.png';
import opt_suttudong from '../../../assert/duatop/opt-suttudong.png';
import bg_banthang from '../../../assert/loaitructiep/bg-banthang.png';
import btn_suttudong from '../../../assert/loaitructiep/btn-suttudong.png';
import bg_bangxephang from '../../../assert/loaitructiep/bg-bangxephang.png';
import bg_giaithuong from '../../../assert/loaitructiep/bg-giaithuong.png';
import bg_taikhoan from '../../../assert/loaitructiep/bg-taikhoan.png';
import bg_title_loaitructiep from '../../../assert/loaitructiep/bg-title-loaitructiep.png';

import bg_pop_ingame from '../../../assert/bg-pop-ingame.png';
import btn_dongy from '../../../assert/btn-dongy.png';
import btn_thoat from '../../../assert/btn-thoat.png';
import icon_home from '../../../assert/icon-home.png';




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
// var ball_collision_goal=false;
// var ball_collision_keper=false;
var is_ball_lasted=false;
var result=0;
var delta_alpha=1;
var data_game={};
var isPlay=true;
var auto_play=false;
var number_playauto=0;
var first_play=true;
var number_goal=0;
var _rankings=[];
var _rewards=[];
var _user={};
var _room={};
var _timeServer=0;
var round=1;
var isKnockout=false;
var isNextRound=false;
var _deltaTime=0;
var isFinish=false;
var _endTime=0;
var _endTimeBonus=0;
var _endTimeShow=0;
var _points=0;
var _isCheckMain=true;
var _isCheckExtra=true;
export default class Game extends Phaser.Scene{
    constructor() {
        super({ key: "Game" });
    }


    init(data){
        if(first_play){
            this.loadInitData();
        }
    }
    
    preload(){
        var seft=this;
        if(first_play){
            var progress = this.add.graphics();

            this.load.on('progress', function (value) {
                seft.add.text(550,  300, 'Loading...', { font: "40px Arial", fill: "#ffffff" });
            });
        
            this.load.on('complete', function () {
                progress.destroy();
            });
        }
        
        this.load.image('background', backgound);
        this.load.image('goal_center', goal_center);
        this.load.image('ball', ball);
        // this.load.image('bg_bangxephang', opt_suttudong);

        this.load.atlas('ball_rotation', ball_rotation, ball_rotation_json);
        this.load.atlas('ball_collision_goal', ball_collision_goal, ball_collision_goal_json);
        this.load.atlas('ball_collision_keeper', ball_collision_keeper, ball_collision_keeper_json);
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

        this.load.atlas('center_down',center_down,center_down_json);
        this.load.atlas('center_up',center_up,center_up_json);
        this.load.atlas('side_left_up',side_left_up,side_left_up_json);
        this.load.atlas('side_left',side_left,side_left_json);
        this.load.atlas('side_right_up',side_right_up,side_right_up_json);
        this.load.atlas('side_right',side_right,side_right_json);

        this.load.image('btn_std', btn_std);
        this.load.image('opt_suttudong', opt_suttudong);
        this.load.image('opt_suttudong_checked', opt_suttudong_checked);
        this.load.image('bg_banthang', bg_banthang);
        this.load.image('btn_suttudong', btn_suttudong);
        this.load.image('bg_bangxephang', bg_bangxephang);
        this.load.image('bg_giaithuong', bg_giaithuong);
        this.load.image('bg_taikhoan', bg_taikhoan);
        this.load.image('bg_title_loaitructiep', bg_title_loaitructiep);

        this.load.image('bg_pop_ingame', bg_pop_ingame);
        this.load.image('btn_dongy', btn_dongy);
        this.load.image('btn_thoat', btn_thoat);
        this.load.image('icon_home', icon_home);
    }

    create(){
        var user = JSON.parse(localStorage.getItem("user"));
        this.timer=0;
        this.time_update=0;
        this.time_autoplay=0;
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

        const k_idleConfig = {
            key: 'k_id',
            frames: 'k_idle',
            frameRate: 50,
            repeat: -1
        };
        this.anims.create(k_idleConfig);
    
        this.k_idle_sprite=this.add.sprite(600, 365, 'k_idle', 'k_idle_').play('k_id');

        const ball_collision_goal_config = {
            key: 'ball_goal',
            frames: 'ball_collision_goal',
            frameRate: 10,
            repeat: 6
        };
        this.anims.create(ball_collision_goal_config);

        this.ball_collision_goal_sprite = this.physics.add.sprite(605, 530, 'ball_collision_goal', 'rotation_');
        this.ball_collision_goal_sprite.play('ball_goal');
        this.ball_collision_goal_sprite.visible=false;


        const center_down_Config = {
            key: 'center_down',
            frames: 'center_down',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(center_down_Config);
        this.center_down_sprite=this.add.sprite(605, 365, 'center_down', 'center_down_');
        this.center_down_sprite.visible=false;

        const center_up_Config = {
            key: 'center_up',
            frames: 'center_up',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(center_up_Config);
        this.center_up_sprite=this.add.sprite(615, 340, 'center_up', 'center_up_');
        this.center_up_sprite.visible=false;

        const side_left_up_Config = {
            key: 'side_left_up',
            frames: 'side_left_up',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(side_left_up_Config);
        this.side_left_up_sprite=this.add.sprite(675, 350, 'side_left_up', 'side_left_up_');
        this.side_left_up_sprite.visible=false;

        const side_left_Config = {
            key: 'side_left',
            frames: 'side_left',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(side_left_Config);
        this.side_left_sprite=this.add.sprite(675, 367, 'side_left', 'side_left_');
        this.side_left_sprite.visible=false;
        

        const side_right_up_Config = {
            key: 'side_right_up',
            frames: 'side_right_up',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(side_right_up_Config);
        this.side_right_up_sprite=this.add.sprite(535, 350, 'side_right_up', 'side_right_up_');
        this.side_right_up_sprite.visible=false;
        

        const side_right_Config = {
            key: 'side_right',
            frames: 'side_right',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(side_right_Config);
        this.side_right_sprite=this.add.sprite(535, 367, 'side_right', 'side_right_');
        this.side_right_sprite.visible=false;
        
        const keep_goal_left_1_Config = {
            key: 'k_left_1',
            frames: 'keep_goal_left_1',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(keep_goal_left_1_Config);
        this.keep_goal_left_1_sprite=this.add.sprite(675, 365, 'keep_goal_left_1', 'k_left_');
        this.keep_goal_left_1_sprite.visible=false;
        


        const keep_goal_left_2_Config = {
            key: 'k_left_2',
            frames: 'keep_goal_left_2',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(keep_goal_left_2_Config);
        this.keep_goal_left_2_sprite=this.add.sprite(750, 350, 'keep_goal_left_2', 'k_left2_');
        this.keep_goal_left_2_sprite.visible=false;
        



        const keep_goal_left_3_Config = {
            key: 'k_left_3',
            frames: 'keep_goal_left_3',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(keep_goal_left_3_Config);
        this.keep_goal_left_3_sprite=this.add.sprite(645, 365, 'keep_goal_left_3', 'k_left3_');
        this.keep_goal_left_3_sprite.visible=false;
        


        const keep_goal_left_4_Config = {
            key: 'k_left_4',
            frames: 'keep_goal_left_4',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(keep_goal_left_4_Config);
        this.keep_goal_left_4_sprite=this.add.sprite(733, 365, 'keep_goal_left_4', 'k_left4_');
        this.keep_goal_left_4_sprite.visible=false;
        

        
        const keep_goal_punch_Config = {
            key: 'k_punch',
            frames: 'keep_goal_punch',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(keep_goal_punch_Config);
        this.keep_goal_punch_sprite=this.add.sprite(595, 365, 'keep_goal_punch', 'k_punch_');
        this.keep_goal_punch_sprite.visible=false;
       


        const keep_goal_right_1_Config = {
            key: 'k_right_1',
            frames: 'keep_goal_right_1',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(keep_goal_right_1_Config);
        this.keep_goal_right_1_sprite=this.add.sprite(525, 365, 'keep_goal_right_1', 'k_right1_');
        this.keep_goal_right_1_sprite.visible=false;
        


        const keep_goal_right_2_Config = {
            key: 'k_right_2',
            frames: 'keep_goal_right_2',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(keep_goal_right_2_Config);
        this.keep_goal_right_2_sprite=this.add.sprite(460, 352, 'keep_goal_right_2', 'k_right2_');
        this.keep_goal_right_2_sprite.visible=false;


        const keep_goal_right_3_Config = {
            key: 'k_right_3',
            frames: 'keep_goal_right_3',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(keep_goal_right_3_Config);
        this.keep_goal_right_3_sprite=this.add.sprite(560, 370, 'keep_goal_right_3', 'k_right3_');
        this.keep_goal_right_3_sprite.visible=false;


        const keep_goal_right_4_Config = {
            key: 'k_right_4',
            frames: 'keep_goal_right_4',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(keep_goal_right_4_Config);
        this.keep_goal_right_4_sprite=this.add.sprite(475, 355, 'keep_goal_right_4', 'k_right4_');
        this.keep_goal_right_4_sprite.visible=false;



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


        const ball_collision_keeper_config = {
            key: 'ball_keeper',
            frames: 'ball_collision_keeper',
            frameRate: 10,
            repeat: 6
        };
        this.anims.create(ball_collision_keeper_config);

        this.ball_collision_keeper_sprite = this.physics.add.sprite(605, 530, 'ball_collision_keeper', 'rotation_');
        this.ball_collision_keeper_sprite.play('ball_keeper');
        this.ball_collision_keeper_sprite.visible=false;


        const soccer_kick_left_Config = {
            key: 'kick_left',
            frames: 'soccer_kick_left',
            frameRate: 20,
            repeat: -2
        };
        this.anims.create(soccer_kick_left_Config);
        this.soccer_kick_left_sprite=this.add.sprite(885, 250, 'soccer_kick_left', 'kick_left_');
        // this.soccer_kick_left_sprite.setScale(3.4,3.4);
        this.soccer_kick_left_sprite.visible=false;

        const soccer_kick_right_Config = {
            key: 'kick_right',
            frames: 'soccer_kick_right',
            frameRate: 30,
            repeat: -2
        };
        this.anims.create(soccer_kick_right_Config);
        this.soccer_kick_right_sprite=this.add.sprite(665, 365, 'soccer_kick_right', 'kick_right_');
    
        this.soccer_kick_right_sprite.visible=false;

        
        this.bg_banthang = this.add.image(121,75,'bg_banthang')
        this.btn_suttudong = this.add.image(135,620,'btn_suttudong')
        this.bg_bangxephang = this.add.image(132,360,'bg_bangxephang')
        this.bg_giaithuong = this.add.image(600,125,'bg_giaithuong')
        this.bg_taikhoan = this.add.image(1078,42,'bg_taikhoan')
        this.bg_title_loaitructiep = this.add.image(600,34,'bg_title_loaitructiep');
        this.opt_suttudong = this.add.image(60,620,'opt_suttudong');
        this.opt_suttudong_checked = this.add.image(60,620,'opt_suttudong_checked');
        this.opt_suttudong_checked.visible=false;

        this.txt_goal = this.add.text(500,  270, 'GOAL', { font: "600 80px Arial", fill: "#ffffff" });
        this.txt_goal.visible=false;
        this.txt_miss = this.add.text(500,  270, 'MISS', { font: "600 80px Arial", fill: "#bf0606" });
        this.txt_miss.visible=false;

        this.txt_banthang = this.add.text(120,  90, '00', { font: "40px Arial", fill: "#ffffff" });
        this.txt_suttudong = this.add.text(85,  605, "Sút tự động", { font: "27px Arial", fill: "#ffffff" });
        this.txt_title = this.add.text(445,  10, "LOẠI TRỰC TIẾP", { font: "40px Arial", fill: "#ffffff", align:'center' });
        this.txt_time = this.add.text(530,  75, 'Còn: 00h00p00', { font: "16px Arial", fill: "#ffffff", align:'center' });
        this.txt_giaithuong = this.add.text(440,  115, `Giải thưởng:`, { font: "17px Arial", fill: "#ffffff", align:"center", fixedWidth: 333 });
        this.txt_acc = this.add.text(980,  15, `Chào: ${this.userName(user.nick_name)}`, { font: "18px Arial", fill: "#ffffff", align:'center' });
        // this.txt_thoat = this.add.text(1125,  15, '(Thoát)', { font: `18px Arial`, fill: "#ffc107", align:'center' });
        this.icon_home=this.add.image(1165,40,'icon_home');
        this.txt_points = this.add.text(980,  45, `Lượt: 00`, { font: "18px Arial", fill: "#ffffff", align:'center' });
        this.txt_titleRanking = this.add.text(30,  290, 'TÀI KHOẢN                BÀN THẮNG', { font: "13px Arial bold", fill: "#ffffff" });
      
        this.txt_ranking_acc = this.add.text(30,  305, '', { font: "13px Arial", fill: "#ffffff" });
        this.txt_ranking_point = this.add.text(180,  305, '', { font: "13px Arial", fill: "#ffffff" });
        this.btn_std = this.add.image(135,620,'btn_std')
        this.btn_std1 = this.add.image(135,620,'btn_std')
        this.btn_std1.visible=false;
        // var a= Phaser.Math.Distance.BetweenPoints
        const self = this;


       

        // var config = {
        //     key: 'explodeAnimation',
        //     frames: this.anims.generateFrameNumbers('ball_rotation', { start: 0, end: 23, first: 23 }),
        //     frameRate: 6,
        //     repeat: -1
        // };


        this.btn_std.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, function(){
            self.btn_std.visible=false;
            self.opt_suttudong.visible=false;
            auto_play=true;
            self.opt_suttudong_checked.visible=true;
            self.btn_std1.visible=true
        })

        this.btn_std1.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, function(){
            self.btn_std.visible=true;
            self.opt_suttudong.visible=true;
            auto_play=false;
            self.opt_suttudong_checked.visible=false;
            self.btn_std1.visible=false;
        })

        this.icon_home.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, function(){
            window.location.replace('/')
        })

        


        this.input.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, function (pointer) {
            if(!isKnockout){
                var p1=[pointer.downX, pointer.downY];
                var p2=[pointer.upX, pointer.upY];
                self.play(p1,p2)
            }
        });

        if(isKnockout){
            setTimeout(()=>{ 
                self.showThoat("Rất tiếc, bạn đã bị loại.\n Hãy quay lại vào phiên tiếp theo nhé.")
            }, 1000);
        }

        // starsIcon.on('pointerup', function () {
        //     this.cre

        //     this.createWindow(Stars);

        // }, this);

    }

    update(time, delta){
        if(auto_play){
            this.opt_suttudong.visible=false;
            this.opt_suttudong_checked.visible=true;
        }else{
            this.opt_suttudong.visible=true;
            this.opt_suttudong_checked.visible=false;
        }
        
        if(play){
            // console.log(result)
           
            this.ball_1.visible=false;
            if(!is_ball_lasted){
                this.ball_rotation_sprite.visible=true;
            }
            var delta_power=0
            if(result===3){
                delta_power=-10;
            } 
            var power=0;
            var ball_with_time=0;
            var h=increase_y;
            var m=0;
            if(increase_x>-1.1 && increase_x<1.1){
                m=1
            }else{
                m=2
            }
            // console.log(h)
           
            var k=h > 100 ? h/100 : 1;
            if(h>0 && h<110){
                ball_with_time=0.0125;
                power=412-delta_power;
            }else if(h>110 & h<250){
                power=515-h-delta_power;
                ball_with_time=0.0145
            }else{
                power=515-h-delta_power;
                ball_with_time=0.02;
                k=5
            }
            // console.log(increase_x)

            // this.sprite.play('walk');
            if(h<250){
                if(this.ball_rotation_sprite.y<power){
                   
                    if(result===2){
                        if(!is_ball_lasted){
                            this.ball_rotation_sprite.visible=false;
                            this.ball_collision_goal_sprite.setX(this.ball_rotation_sprite.x);
                            this.ball_collision_goal_sprite.setY(this.ball_rotation_sprite.y);
                            this.ball_collision_goal_sprite.setScale(this.ball_rotation_sprite._scaleX, this.ball_rotation_sprite._scaleY)
                            this.ball_collision_goal_sprite.visible=true;
                            is_ball_lasted=true;
                        }
                        this.goal.visible=false;
                        this.txt_goal.visible=true;
                        if(increase_x > 1.05){
                            this.goal_left_sprite.visible=true
                        }else if(increase_x < -1.05){
                            this.goal_right_sprite.visible=true
                        }else{
                            this.goal_center_anims_sprite.visible=true
                        }
                    }else{
                        if(!is_ball_lasted){
                            this.ball_rotation_sprite.visible=false;
                            this.ball_collision_keeper_sprite.setX(this.ball_rotation_sprite.x);
                            this.ball_collision_keeper_sprite.setY(this.ball_rotation_sprite.y);
                            this.ball_collision_keeper_sprite.setScale(this.ball_rotation_sprite._scaleX, this.ball_rotation_sprite._scaleY)
                            this.ball_collision_keeper_sprite.visible=true;
                            is_ball_lasted=true;
                        }
                        this.txt_miss.visible=true;
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
                
                this.txt_miss.visible=true;
            }
            
            
            if(is_ball_lasted){
                if(h<250){
                    if(result==2){
                        if(this.ball_collision_goal_sprite.y < 423){
                            this.ball_collision_goal_sprite.y +=1.5*k;
                            this.ball_collision_goal_sprite.x +=1*increase_x;
                            if(this.ball_collision_goal_sprite.x > 844){
                                this.ball_collision_goal_sprite.x -=1*increase_x;
                                this.ball_collision_goal_sprite.y +=1.7*k;
                            }
    
                            if(this.ball_collision_goal_sprite.x < 380){
                                this.ball_collision_goal_sprite.x -=1*increase_x;
                                this.ball_collision_goal_sprite.y +=1.7*k;
                            }
                        }
                    }
                    if(result===3){
                        // console.log('AAAAAAAAAA')
                        if(this.ball_collision_keeper_sprite.y < 445){
                            this.ball_collision_keeper_sprite.y +=2*k;
                            this.ball_collision_keeper_sprite.x +=1*increase_x;
                            if(this.ball_collision_keeper_sprite.x > 844){
                                this.ball_collision_keeper_sprite.x -=1*increase_x;
                                this.ball_collision_keeper_sprite.y +=1.7*k;
                            }
    
                            if(this.ball_collision_keeper_sprite.x < 380){
                                this.ball_collision_keeper_sprite.x -=1*increase_x;
                                this.ball_collision_keeper_sprite.y +=1.7*k;
                            }
                        }
                    }
                } 
            }
        }

        if(auto_play){
            var time_delta_auto=0;
            if(number_playauto===0){
                time_delta_auto=0
            }else{
                time_delta_auto=1000
            }
            this.time_autoplay += delta;
            while (this.time_autoplay > time_delta_auto) {
                this.autoPlay();
                this.time_autoplay -= 1000;
                number_playauto+=1;
            }
        }
        
        

        if(Object.keys(data_game).length !== 0){
            this.time_update += delta;
            var len_ranking=_rankings.length;
            var tk=``;
            var p=``;
            if(len_ranking > 0){
                for (let i = 0; i < len_ranking; i++) {
                    tk +=`${_rankings[i].userName} \n`
                    p +=`${_rankings[i].winCount} \n`
                }
            }
            this.txt_ranking_acc.setText(tk);
            this.txt_ranking_point.setText(p);
            this.txt_banthang.setText(number_goal)
            this.txt_giaithuong.setText(`Giải thưởng: ${_rewards[0].name}`)
            console.log(_points)
            this.txt_points.setText(`Lượt: ${_points}`)

            while (this.time_update > 1000) {
                this.timeRemain(_endTimeShow)
                this.time_update -= 1000;
            }
        } 
        var t=Date.now() + _deltaTime;
        if(!isFinish){
            // console.log('AAAAAAAAAAAA', _endTime)
            if(t > _endTime){
                if(_isCheckMain){
                    this.updateDataFinishMain();
                }
   
            }

            if(t>_endTimeBonus){
                this.showThoat('Phiên đã kết thúc')
                isFinish=true;
            }
        }
    }

    play(p1,p2){
        var _this=this;
        console.log(_points)
        if(isPlay){
            isPlay=false;
            var user = JSON.parse(localStorage.getItem("user"));
            var info_seesion = JSON.parse(localStorage.getItem("info_seesion"));
            if(p1[1]-p2[1] > 0){
                if(_points>0){
                    var positionBall=this.getPositionBall(p1,p2);
                    var keeper=this.setPositionKeeper(positionBall[0],positionBall[1])
                    console.log(positionBall)
                    console.log('keeper',keeper)
                    if(user!==null){
                        var data= {...info}
                        data.userId= user.uid;
                        data.gameId=1;
                        data.serverId=1;
                        data.modeId=3;
                        data.roomId=info_seesion.id;
                        data.round=round;
                        data.x=positionBall[0];
                        data.y=positionBall[1];
                        data.z=1;
                        data.zone=keeper[1];
                        data.autoPlay=false
                        var header = {
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": `Bearer ${user.access_token}`,
                                "dataType":"json"
                            }
                        }
                        axios.post(Ultilities.base_url() +'/lobby/api/v1/knockout/playing', data, header).then(function (response) {
                            console.log(response.data)
                            if(response.data.code>=0){
                                isPlay=false;
                                first_play=false;
                                result=response.data.data.result; 
                                _this.setBallLine(p1,p2)
                                var g = _this.getRandomInt(0,2)
                                var kg = 0;
                                for (let i = 1; i < 16; i++) {
                                    kg=_this.getRandomInt(1,15);
                                    if(kg!==keeper[0])
                                    break;
                                }
                                setTimeout(()=>{ 
                                    play=true;
                                }, 500);
            
                                setTimeout(()=>{ 
                                    if(result===2){
                                        _this.setKeepGoal(kg);
                                        _this.k_idle_sprite.visible=false;
                                    }else{
                                        _this.setKeepGoal(keeper[0]);
                                        _this.k_idle_sprite.visible=false;
                                    }
                                   
                                }, 700);
    
                                setTimeout(()=>{ 
                                    if(result===2){
                                        number_goal+=1;
                                     }else{
                                         _this.showThoat("Rất tiếc, bạn đã bị loại. Hãy quay lại vào phiên tiếp theo nhé")
                                     }
                                    _this.updateData()
                                }, 2000);
    
                                _this.soccer_kick_left_sprite.visible=true;
                                _this.soccer_kick_left_sprite.play("kick_left")
                                
                                setTimeout(()=>{ 
                                    play=false;
                                    isPlay=true;
                                    x=1;
                                    increase_x=0;
                                    increase_y=0;
                                    delta_alpha=1;
                                    is_ball_lasted=false;
                                    _this.ball_collision_keeper_sprite.play('ball_keeper');
                                    _this.ball_collision_goal_sprite.play('ball_goal');
                                    _this.registry.destroy();
                                    _this.events.off();
                                    _this.scene.restart();
                                }, 4000);
                            }else{
                                // console.log("Server đang lỗi.")
                                _this.showMessageBox(response.data.message)
                            }
                        })
    
                       
                    }else{
                        window.location.replace('/')
                    }
                }else{
                    _this.showMessageBox('Bạn đã sút hết lượt chờ phiên đấu kết thúc.')
                }
            }else{
                isPlay=true;
                console.log("Vuốt lên để chơi")
            }
        }  
    }
    
    showMessageBox(text) {
        //just in case the message box already exists
        //destroy it
        var _this=this;
        this.back = this.add.sprite(600, 675/2, "bg_pop_ingame");
        this.closeButton = this.add.sprite(470, 480, "btn_dongy");
        this.thoatButton = this.add.sprite(730, 480, "btn_thoat");
        this.text1 = this.add.text(400, 300, text, { font: "18px Arial", fill: "#ffffff", align:'center', fixedWidth: 400, wordWrap:true});
        this.closeButton.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, ()=>{
            _this.hideBox()
        })
        this.thoatButton.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, ()=>{
            window.location.replace('/')
        })
    }
    hideBox() {
        isPlay=true;
        this.back.destroy();
        this.closeButton.destroy();
        this.thoatButton.destroy();
        this.text1.destroy();
    }

    showThoat(text) {
        //just in case the message box already exists
        //destroy it
        var _this=this;
        this.back = this.add.sprite(600, 675/2, "bg_pop_ingame");
        this.thoatButton = this.add.sprite(600, 480, "btn_thoat");
        this.text1 = this.add.text(400, 300, text, { font: "18px Arial", fill: "#ffffff", align:'center', fixedWidth: 400, wordWrap:true});
        this.thoatButton.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, ()=>{
            window.location.replace('/')
        })
    }


    userName=(name)=>{
        var len=name.length;
        if(len>12){
          return name.substring(0,10)+'...'
        }else{
          return name;
        }
    }

    setBallLine(p1,p2){
        var a=p1[0]-p2[0];
        var b=p1[1]-p2[1];
        var dis1=Math.sqrt((a*a+b*b))
       
        increase_x=a>0?(-dis1/b):(dis1/b)
        increase_y=b;
    }

    autoPlay(){
        var x1=this.getRandomInt(240, 950);
        var x2=this.getRandomInt(240, 950);
        var y1=this.getRandomInt(470, 630);
        var y2=this.getRandomInt(215, 470);
        var p1=[x1, y1];
        var p2=[x2, y2];
        this.play(p1, p2);
    }
    
    setKeepGoal(n){
        // console.log(n)
        switch (n) {
            case 1:
                this.keep_goal_right_2_sprite.visible=true;
                this.keep_goal_right_2_sprite.play('k_right_2');
                break;
            case 2:
                this.keep_goal_right_4_sprite.visible=true;
                this.keep_goal_right_4_sprite.play('k_right_4');
                break;
            case 3:
                this.side_right_up_sprite.visible=true;
                this.side_right_up_sprite.play('side_right_up');
                break;
            case 4:
                this.side_right_sprite.visible=true;
                this.side_right_sprite.play('side_right');
                break;
            case 5:
                this.keep_goal_right_1_sprite.visible=true;
                this.keep_goal_right_1_sprite.play('k_right_1');
                break;
            case 6:
                this.keep_goal_right_3_sprite.visible=true;
                this.keep_goal_right_3_sprite.play('k_right_3');
                break;
            case 7:
                this.center_up_sprite.visible=true;
                this.center_up_sprite.play('center_up');
                break;
            case 8:
                this.keep_goal_punch_sprite.visible=true;
                this.keep_goal_punch_sprite.play('k_punch');
                break;
            case 9:
                this.center_down_sprite.visible=true;
                this.center_down_sprite.play('center_down');
                break;
            case 10:
                this.side_left_up_sprite.visible=true;
                this.side_left_up_sprite.play('side_left_up');
                break;
            case 11:
                this.side_left_sprite.visible=true;
                this.side_left_sprite.play('side_left');
                break;
            case 12:
                this.keep_goal_left_1_sprite.visible=true;
                this.keep_goal_left_1_sprite.play('k_left_1');
                break;
            case 13:
                this.keep_goal_left_3_sprite.visible=true;
                this.keep_goal_left_3_sprite.play('k_left_3');
                break;
            case 14:
                this.keep_goal_left_2_sprite.visible=true;
                this.keep_goal_left_2_sprite.play('k_left_2');
                break;
            case 15:
                this.keep_goal_left_4_sprite.visible=true;
                this.keep_goal_left_4_sprite.play('k_left_4');
                break;
            default:
                this.keep_goal_punch_sprite.visible=true;
                this.keep_goal_punch_sprite.play('k_punch');
                break;
        }
        
    }

    getPositionBall(p1,p2){
        var power=0
        var a=p1[0]-p2[0];
        var b=p1[1]-p2[1];
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
        console.log(x,y)
        return [x,y];
    }


    setPositionKeeper(x,y){
        if(x >= 335 && x < 458 && y >= 228 && y < 330)
            return [1, 11];
        if(x >= 335 && x < 458 && y >= 300 && y < 430)
            return [2, 21];
        if(x >= 458 && x < 560 && y >= 228 && y < 280)
            return [3, 12];
        if(x >= 458 && x < 560 && y >= 280 && y < 340)
            return [4, 12];
        if(x >= 458 && x < 560 && y >= 340 && y < 385)
            return [5,22];
        if(x >= 458 && x < 560 && y >= 385 && y < 430)
            return [6, 22];
        if(x >= 560 && x < 640 && y >= 228 && y < 280)
            return [7,13];
        if(x >= 560 && x < 640 && y >= 280 && y < 385)
            return [8, 13];
        if(x >= 560 && x < 640 && y >= 385 && y < 430)
            return [9,23];
        if(x >= 640 && x < 750 && y >= 228 && y < 280)
            return [10,14];
        if(x >= 640 && x < 750 && y >= 280 && y < 340)
            return [11,14];
        if(x >= 640 && x < 750 && y >= 340 && y < 385)
            return [12,24];
        if(x >= 640 && x < 750 && y >= 385 && y < 430)
            return [13,24];
        if(x >= 750 && x < 870 && y >= 228 && y < 330)
            return [14,15];
        if(x >= 750 && x < 870 && y >= 330 && y < 430)
            return [15,25];
        if(y===0)
            return [this.getRandomInt(1,15), 0]
        if(x > 870 || x < 338)
            return [this.getRandomInt(1,15),0]
    }



    

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    timeRemain=(times)=>{
        var t=Date.now() + _deltaTime
        var time=(times - t)/1000;
        if(time>0){
            var day=Math.floor(time/86400) > 9 ? Math.floor(time/86400) : `0${Math.floor(time/86400)}`;
            var hour=Math.floor((time%86400)/3600) > 9 ? Math.floor((time%86400)/3600) : `0${Math.floor((time%86400)/3600)}`;
            var minute=Math.floor(((time%86400)%3600)/60) > 9 ? Math.floor(((time%86400)%3600)/60) : `0${Math.floor(((time%86400)%3600)/60)}`;
            var second=Math.ceil(((time%86400)%3600)%60) > 9 ? Math.ceil(((time%86400)%3600)%60) : `0${Math.ceil(((time%86400)%3600)%60)}`;
            _timeServer +=1000
            if(this.txt_time!==undefined)
            this.txt_time.setText(`Còn: ${hour}h${minute}p${second}`);
           
        }
	}

    checkTimeSession=(start, end, data)=>{
        var time=Date.now() + _deltaTime
        if(time < start){
            return false;
        }
        
        if(time > end){
            return false;
        }
        return true
    }

    loadInitData=()=>{
        var _this=this;
        var user = JSON.parse(localStorage.getItem("user"));
        var info_seesion = JSON.parse(localStorage.getItem("info_seesion"));
        if(info_seesion!==null){
            if(user!==null){
                var data= {...info}
                data.userId= user.uid;
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
                    if(response.data !==undefined){
                        if(response.data.code>=0){
                            isKnockout=response.data.data.isKnockout;
                            var t=Date.now() + _deltaTime;
                            data_game=response.data.data;
                            if(_this.checkTimeSession(data_game.room.startTime, data_game.room.endTime, data_game)){;
                                _rankings=data_game.rankings;
                                _rewards=data_game.rewards;
                                number_goal=data_game.summary.winCount;
                                _user=data_game.user;
                                _room=data_game.room;
                                _timeServer=data_game.timeServer;
                                _endTime=data_game.room.endTime;
                                _endTimeBonus=data_game.room.endBonusTime;
                                _endTimeShow=data_game.room.endTime;

                                _deltaTime=Date.now() -_timeServer;
                                _points=data_game.user.betAmount;
                                // _this.timeRemain(_endTimeShow)
                                round=1;
                               
                            }else if(_this.checkTimeSession(data_game.room.startBonusTime, data_game.room.endBonusTime, data_game)){
                                _rankings=data_game.rankings;;
                                _rewards=data_game.rewards;
                                number_goal=data_game.summary.winCount;
                                _user=data_game.user;
                                _room=data_game.room;
                                _timeServer=data_game.timeServer;
                                _endTime=data_game.room.endTime;
                                _endTimeBonus=data_game.room.endBonusTime;
                                _endTimeShow=data_game.room.endBonusTime;
                                _deltaTime=Date.now() -_timeServer;
                                _points=data_game.user.betAmount;
                                // _this.timeRemain(_endTimeShow)
                                round=2;
                            }else{
                                window.location.replace('/')
                            }
                           
                        }else{
                            window.location.replace('/')
                        }
                    }else{
                        window.location.replace('/')
                    }
                }).catch(function (error) {
                    window.location.replace('/')
                })
            }else{
                window.location.replace('/')
            }
        }else{
            window.location.replace('/')
        }
        
    }



    updateData=()=>{
        var _this=this;
        var user = JSON.parse(localStorage.getItem("user"));
        var info_seesion = JSON.parse(localStorage.getItem("info_seesion"));
        if(info_seesion!==null){
            if(user!==null){
                var data= {...info}
                data.userId= user.uid;
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
                axios.post(Ultilities.base_url() +'/lobby/api/v1/knockout/state', data, header).then(function (response) {
                    if(response.data !==undefined){
                        if(response.data.code>=0){
                            data_game=response.data.data
                            isKnockout=data_game.isKnockout;
                            if(_this.checkTimeSession(_room.startTime, _room.endTime, data_game)){;
                                _rankings=data_game.rankings;
                                _user=data_game.user;
                                _points=data_game.user.betAmount;
                                round=1;
                               
                            }else if(_this.checkTimeSession(_room.startBonusTime, _room.endBonusTime, data_game)){;
                                _rankings=data_game.rankings;
                                _user=data_game.user;
                                _points=data_game.user.betAmount;
                                round=2;
                            }else{
                                window.location.replace('/');
                            }
                           
                        }else{
                            window.location.replace('/')
                        }
                    }else{
                        window.location.replace('/')
                    }
                }).catch(function (error) {
                    if(error.response.data.code ===-401){
                        _this.showThoat('Phiên đã kết thúc.')
                        isFinish=true;
                        return;
                    }
                    if(error.response.data.code ===-404){
                        _this.showThoat('Phiên chưa sẵn sàng hoặc chưa diễn ra.')
                        isFinish=true;
                        return;
                    }
                    if(error.response.data.code ===-101){
                        _this.showThoat('Hệ thống đang bận.')
                        isFinish=true;
                        return;
                    }
                })
            }else{
                window.location.replace('/')
            }
        }else{
            window.location.replace('/')
        }
        
    }

    updateDataFinishMain=()=>{
        _isCheckMain=false;
        var _this=this;
        var user = JSON.parse(localStorage.getItem("user"));
        var info_seesion = JSON.parse(localStorage.getItem("info_seesion"));
        if(user!==null){
            var data= {...info}
            data.userId= user.uid;
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
            axios.post(Ultilities.base_url() +'/lobby/api/v1/knockout/state', data, header).then(function (response) {
                if(response.data !==undefined){
                    if(response.data.code>=0){
                        
                        isKnockout=response.data.data.isKnockout;
                        isNextRound=response.data.data.isNextRound;
                        if(isKnockout){
                            _this.showThoat('Phiên đã kết thúc.')
                            isFinish=true;
                            return;
                        }
                        if(isNextRound){
                            round=2;
                            _endTimeBonus=_room.endBonusTime;
                            _endTimeShow= _room.endBonusTime;
                            _rankings=data_game.rankings;
                            _user=data_game.user;
                            _points=data_game.user.betAmount;
                            _this.timeRemain(_endTimeShow)
                        }else{
                            _this.showThoat('Phiên đã kết thúc.')
                            isFinish=true;
                            return;
                        }
                    }else{
                        window.location.replace('/')
                    }
                }else{
                    window.location.replace('/')
                }
            }).catch(function (error) {
                if(error.response.data.code ===-401){
                    _this.showThoat('Phiên đã kết thúc.')
                    isFinish=true;
                    return;
                }
                if(error.response.data.code ===-404){
                    _this.showThoat('Phiên chưa sẵn sàng hoặc chưa diễn ra.')
                    isFinish=true;
                    return;
                }
                if(error.response.data.code ===-101){
                    _this.showThoat('Hệ thống đang bận. Vui lòng thử lại sau')
                    isFinish=true;
                    return;
                }

                if(error.response.data.code ===-602){
                    _this.showThoat('Chờ hiệp phụ bắt đầu.')
                    isFinish=true;
                    return;
                }
                // window.location.replace('/')
            })
        }else{
            window.location.replace('/')
        }
        
    }

    // updateDataFinishExtra=()=>{
    //     var _this=this;
    //     var user = JSON.parse(localStorage.getItem("user"));
    //     var info_seesion = JSON.parse(localStorage.getItem("info_seesion"));
    //     if(user!==null){
    //         var data= {...info}
    //         data.userId= user.uid;
    //         data.gameId=1;
    //         data.serverId=1;
    //         data.modeId=3;
    //         data.roomId=info_seesion.id;
    //         data.rakingLimit=10
    //         var header = {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Authorization": `Bearer ${user.access_token}`,
    //                 "dataType":"json"
    //             }
    //         }
    //         axios.post(Ultilities.base_url() +'/lobby/api/v1/knockout/state', data, header).then(function (response) {
    //             if(response.data !==undefined){
    //                 if(response.data.code>=0){
    //                     isKnockout=response.data.data.isKnockout;
    //                     isNextRound=response.data.data.isNextRound;
    //                     _isCheckExtra=false;
    //                     if(isKnockout){
    //                         _this.showThoat('Phiên đã kết thúc')
    //                         isFinish=true;
    //                         return;
    //                     }
    //                     if(isNextRound){
    //                         round=2;
    //                         _endTimeShow= data_game.room.endBonusTime;
    //                         _rankings=data.rankings;
    //                         _user=data.user;
    //                         _points=data.user.betAmount;
    //                         _this.timeRemain(_endTimeShow)
    //                     }
    //                 }else{
    //                     window.location.replace('/')
    //                 }
    //             }else{
    //                 window.location.replace('/')
    //             }
    //         }).catch(function (error) {
    //             // window.location.replace('/')
    //         })
    //     }else{
    //         window.location.replace('/')
    //     }
    // }


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

                     // if(_user.betAmount > 0){
                //     this.showThoat('Phiên đã kết thúc')
                //     isFinish=true;
                // }else{
                //     if(_isBonus){
                //         this.updateDataFinishMain();
                //     }
                //     if(t > _room.startBonusTime){
                //         _endTime=_room.endBonusTime;
                //     }
                //     if(t > _endTime){
                //         if(_user.betAmount > 0){
                //             this.showThoat('Phiên đã kết thúc');
                //             isFinish=true;
                //         }else{
                //             this.showThoat('Chúc mừng bạn chiến thắng.');
                //             isFinish=true;
                //         }
                //     }

                // }