import Phaser from "phaser";
import {
	osVersion,
	osName,
	mobileModel
  } from "react-device-detect";
  import bigInt from "big-integer";
import axios from 'axios';
import Ultilities from '../../../../../../Ultilities/global'

import backgound from '../../../../assert/back_mobile.png';
import ball from '../../../../assert/ball.png';
import goal_center from '../../../../assert/goal_center.png';
import ball_rotation from '../../../../assert/ball/ball_sprite.png';
import ball_rotation_json from '../../../../assert/ball/ball_sprite.json';

import ball_collision_goal from '../../../../assert/ball/ball_sprite.png';
import ball_collision_goal_json from '../../../../assert/ball/ball_sprite.json';

import ball_collision_keeper from '../../../../assert/ball/ball_sprite.png';
import ball_collision_keeper_json from '../../../../assert/ball/ball_sprite.json';

import k_idle from '../../../../assert/keep_goal/keep_goal_idle.png';
import k_idle_json from '../../../../assert/keep_goal/keep_goal_idle.json';

import center_down from '../../../../assert/keep_goal/center_down.png';
import center_down_json from '../../../../assert/keep_goal/center_down.json';
import center_up from '../../../../assert/keep_goal/center_up.png';
import center_up_json from '../../../../assert/keep_goal/center_up.json';
import side_left_up from '../../../../assert/keep_goal/side_left_up.png';
import side_left_up_json from '../../../../assert/keep_goal/side_left_up.json';
import side_left from '../../../../assert/keep_goal/side_left.png';
import side_left_json from '../../../../assert/keep_goal/side_left.json';
import side_right_up from '../../../../assert/keep_goal/side_right_up.png';
import side_right_up_json from '../../../../assert/keep_goal/side_right_up.json';
import side_right from '../../../../assert/keep_goal/side_right.png';
import side_right_json from '../../../../assert/keep_goal/side_right.json';

import keep_goal_left_1 from '../../../../assert/keep_goal/keep_goal_left_1.png';
import keep_goal_left_1_json from '../../../../assert/keep_goal/keep_goal_left_1.json';
import keep_goal_left_2 from '../../../../assert/keep_goal/keep_goal_left_2.png';
import keep_goal_left_2_json from '../../../../assert/keep_goal/keep_goal_left_2.json';
import keep_goal_left_3 from '../../../../assert/keep_goal/keep_goal_left_3.png';
import keep_goal_left_3_json from '../../../../assert/keep_goal/keep_goal_left_3.json';
import keep_goal_left_4 from '../../../../assert/keep_goal/keep_goal_left_4.png';
import keep_goal_left_4_json from '../../../../assert/keep_goal/keep_goal_left_4.json';

import keep_goal_punch from '../../../../assert/keep_goal/keep_goal_punch.png';
import keep_goal_punch_json from '../../../../assert//keep_goal/keep_goal_punch.json';

import keep_goal_right_1 from '../../../../assert/keep_goal/keep_goal_right_1.png';
import keep_goal_right_1_json from '../../../../assert/keep_goal/keep_goal_right_1.json';
import keep_goal_right_2 from '../../../../assert/keep_goal/keep_goal_right_2.png';
import keep_goal_right_2_json from '../../../../assert/keep_goal/keep_goal_right_2.json';
import keep_goal_right_3 from '../../../../assert/keep_goal/keep_goal_right_3.png';
import keep_goal_right_3_json from '../../../../assert/keep_goal/keep_goal_right_3.json';
import keep_goal_right_4 from '../../../../assert/keep_goal/keep_goal_right_4.png';
import keep_goal_right_4_json from '../../../../assert/keep_goal/keep_goal_right_4.json';

import soccer_kick_left from '../../../../assert/keep_goal/soccer_kick_left.png';
import soccer_kick_left_json from '../../../../assert/keep_goal/soccer_kick_left.json';
import soccer_kick_right from '../../../../assert/keep_goal/soccer_kick_right.png';
import soccer_kick_right_json from '../../../../assert/keep_goal/soccer_kick_right.json';

import goal_center_anims from '../../../../assert/goal_anims/goal_center_anims.png';
import goal_center_anims_json from '../../../../assert/goal_anims/goal_center_anims.json';
import goal_left from '../../../../assert/goal_anims/goal_left.png';
import goal_left_json from '../../../../assert/goal_anims/goal_left.json';
import goal_right from '../../../../assert/goal_anims/goal_right.png';
import goal_right_json from '../../../../assert/goal_anims/goal_right.json';

import btn_std from '../../../../assert/btn-std.png';
import opt_suttudong_checked from '../../../../assert/duatop/opt-suttudong-checked.png';
import opt_suttudong from '../../../../assert/duatop/opt-suttudong.png';
import bg_banthang from '../../../../assert/duatop/bg-banthang.png';
import btn_suttudong from '../../../../assert/duatop/btn-suttudong.png';
import bg_bangxephang from '../../../../assert/duatop/bg-bangxephang.png';
import bg_giaithuong_duatop from '../../../../assert/duatop/bg-giaithuong-duatop.png';
import bg_taikhoan from '../../../../assert/duatop/bg-taikhoan.png';
import bg_title_duatop from '../../../../assert/duatop/bg-title-duatop.png';

import bg_pop_ingame from '../../../../assert/bg-pop-ingame.png';
import btn_dongy from '../../../../assert/btn-dongy.png';
import btn_thoat from '../../../../assert/btn-thoat.png';
import icon_home from '../../../../assert/icon-home.png';

const list_keep=[]
const list_goal=[]
const info={
	"lang": "vi",
	"osType": osName.toLocaleUpperCase().replace(' ',''),
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

var width = window.screen.width - 80;
var height = window.screen.height;
var delta_x=Math.round(width/1200 *1000)/1000;
var delta_y=Math.round(height/675 *1000)/1000 ;
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
var _deltaTime=0;
var isFinish=false;

export default class Info extends Phaser.Scene{
  constructor() {
    super({ key: "Info" });
  }

  if(first_play){
    this.loadInitData();
  }

    preload(){
      var seft=this;
      if(first_play){
          var progress = this.add.graphics();

          this.load.on('progress', function (value) {
              seft.add.text(width/2-50,  height/2-30, 'Loading...', { font: "30px Arial", fill: "#ffffff" });
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
      this.load.image('bg_giaithuong_duatop', bg_giaithuong_duatop);
      this.load.image('bg_taikhoan', bg_taikhoan);
      this.load.image('bg_title_duatop', bg_title_duatop);

      this.load.image('bg_pop_ingame', bg_pop_ingame);
      this.load.image('btn_dongy', btn_dongy);
      this.load.image('btn_thoat', btn_thoat);
      this.load.image('icon_home', icon_home);
    }

    create(){
      const self = this;
      var user = JSON.parse(localStorage.getItem("user"));
        this.timer=0;
        this.time_update=0;
        this.time_autoplay=0;
        this.timer_reload=0;
        this.background=this.add.image(width/2,height/2,'background')
        this.background.setScale(delta_x, delta_y)
        this.goal=this.physics.add.image(width/2,height/2-10,'goal_center')
        this.goal.setScale(delta_x, delta_y)
        this.ball_1=this.add.image(605*delta_x,520*delta_y,'ball');
        this.ball_1.setScale(delta_x, delta_x)

        const goal_center_anims_Config = {
            key: 'goal_center',
            frames: 'goal_center_anims',
            frameRate: 24,
            repeat: 1
        };
        this.anims.create(goal_center_anims_Config);
        this.goal_center_anims_sprite=this.add.sprite(width/2, height/2-10, 'goal_center_anims', 'center_');
        this.goal_center_anims_sprite.setScale(delta_x, delta_y)
        this.goal_center_anims_sprite.visible=false;
        this.goal_center_anims_sprite.play('goal_center');


        const goal_left_Config = {
            key: 'g_left',
            frames: 'goal_left',
            frameRate: 24,
            repeat: 1
        };
        this.anims.create(goal_left_Config);
        this.goal_left_sprite=this.add.sprite(width/2, height/2-10, 'goal_left', 'left_');
        this.goal_left_sprite.setScale(delta_x, delta_y)
        this.goal_left_sprite.visible=false;
        this.goal_left_sprite.play('g_left');

        const goal_right_Config = {
            key: 'g_right',
            frames: 'goal_right',
            frameRate: 24,
            repeat: 1
        };
        this.anims.create(goal_right_Config);
        this.goal_right_sprite=this.add.sprite(width/2, height/2-10, 'goal_right', 'center_');
        this.goal_right_sprite.setScale(delta_x, delta_y)
        this.goal_right_sprite.visible=false;
        this.goal_right_sprite.play('g_right');

        const k_idleConfig = {
            key: 'k_id',
            frames: 'k_idle',
            frameRate: 50,
            repeat: -1
        };
        this.anims.create(k_idleConfig);
        
        this.k_idle_sprite=this.add.sprite(605*delta_x, 365*delta_y, 'k_idle', 'k_idle_').play('k_id');
        this.k_idle_sprite.setScale(delta_x, delta_y)

        const ball_collision_goal_config = {
            key: 'ball_goal',
            frames: 'ball_collision_goal',
            frameRate: 10,
            repeat: 6
        };
        this.anims.create(ball_collision_goal_config);

        this.ball_collision_goal_sprite = this.physics.add.sprite(605*delta_x, 530*delta_y, 'ball_collision_goal', 'rotation_');
        this.ball_collision_goal_sprite.play('ball_goal');
        this.ball_collision_goal_sprite.setScale(delta_x, delta_y)
        this.ball_collision_goal_sprite.visible=false;




        const center_down_Config = {
            key: 'center_down',
            frames: 'center_down',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(center_down_Config);
        this.center_down_sprite=this.add.sprite(605*delta_x, 365*delta_y, 'center_down', 'center_down_');
        this.center_down_sprite.setScale(delta_x, delta_y)
        this.center_down_sprite.visible=false;

        const center_up_Config = {
            key: 'center_up',
            frames: 'center_up',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(center_up_Config);
        this.center_up_sprite=this.add.sprite(615*delta_x, 340*delta_y, 'center_up', 'center_up_');
        this.center_up_sprite.setScale(delta_x, delta_y)
        this.center_up_sprite.visible=false;

        const side_left_up_Config = {
            key: 'side_left_up',
            frames: 'side_left_up',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(side_left_up_Config);
        this.side_left_up_sprite=this.add.sprite(675*delta_x, 350*delta_y, 'side_left_up', 'side_left_up_');
        this.side_left_up_sprite.setScale(delta_x, delta_y)
        this.side_left_up_sprite.visible=false;

        const side_left_Config = {
            key: 'side_left',
            frames: 'side_left',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(side_left_Config);
        this.side_left_sprite=this.add.sprite(675*delta_x, 367*delta_y, 'side_left', 'side_left_');
        this.side_left_sprite.setScale(delta_x, delta_y)
        this.side_left_sprite.visible=false;
        

        const side_right_up_Config = {
            key: 'side_right_up',
            frames: 'side_right_up',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(side_right_up_Config);
        this.side_right_up_sprite=this.add.sprite(535*delta_x, 350*delta_y, 'side_right_up', 'side_right_up_');
        this.side_right_up_sprite.setScale(delta_x, delta_y)
        this.side_right_up_sprite.visible=false;
        

        const side_right_Config = {
            key: 'side_right',
            frames: 'side_right',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(side_right_Config);
        this.side_right_sprite=this.add.sprite(535*delta_x, 367*delta_y, 'side_right', 'side_right_');
        this.side_right_sprite.setScale(delta_x, delta_y)
        this.side_right_sprite.visible=false;
        
        const keep_goal_left_1_Config = {
            key: 'k_left_1',
            frames: 'keep_goal_left_1',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(keep_goal_left_1_Config);
        this.keep_goal_left_1_sprite=this.add.sprite(675*delta_x, 365*delta_y, 'keep_goal_left_1', 'k_left_');
        this.keep_goal_left_1_sprite.setScale(delta_x, delta_y)
        this.keep_goal_left_1_sprite.visible=false;
        


        const keep_goal_left_2_Config = {
            key: 'k_left_2',
            frames: 'keep_goal_left_2',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(keep_goal_left_2_Config);
        this.keep_goal_left_2_sprite=this.add.sprite(750*delta_x, 350*delta_y, 'keep_goal_left_2', 'k_left2_');
        this.keep_goal_left_2_sprite.setScale(delta_x, delta_y)
        this.keep_goal_left_2_sprite.visible=false;
        



        const keep_goal_left_3_Config = {
            key: 'k_left_3',
            frames: 'keep_goal_left_3',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(keep_goal_left_3_Config);
        this.keep_goal_left_3_sprite=this.add.sprite(645*delta_x, 365*delta_y, 'keep_goal_left_3', 'k_left3_');
        this.keep_goal_left_3_sprite.setScale(delta_x, delta_y)
        this.keep_goal_left_3_sprite.visible=false;
        


        const keep_goal_left_4_Config = {
            key: 'k_left_4',
            frames: 'keep_goal_left_4',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(keep_goal_left_4_Config);
        this.keep_goal_left_4_sprite=this.add.sprite(733*delta_x, 365*delta_y, 'keep_goal_left_4', 'k_left4_');
        this.keep_goal_left_4_sprite.setScale(delta_x, delta_y)
        this.keep_goal_left_4_sprite.visible=false;
        

        
        const keep_goal_punch_Config = {
            key: 'k_punch',
            frames: 'keep_goal_punch',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(keep_goal_punch_Config);
        this.keep_goal_punch_sprite=this.add.sprite(595*delta_x, 365*delta_y, 'keep_goal_punch', 'k_punch_');
        this.keep_goal_punch_sprite.setScale(delta_x, delta_y)
        this.keep_goal_punch_sprite.visible=false;
       


        const keep_goal_right_1_Config = {
            key: 'k_right_1',
            frames: 'keep_goal_right_1',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(keep_goal_right_1_Config);
        this.keep_goal_right_1_sprite=this.add.sprite(525*delta_x, 365*delta_y, 'keep_goal_right_1', 'k_right1_');
        this.keep_goal_right_1_sprite.setScale(delta_x, delta_y)
        this.keep_goal_right_1_sprite.visible=false;
        


        const keep_goal_right_2_Config = {
            key: 'k_right_2',
            frames: 'keep_goal_right_2',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(keep_goal_right_2_Config);
        this.keep_goal_right_2_sprite=this.add.sprite(460*delta_x, 352*delta_y, 'keep_goal_right_2', 'k_right2_');
        this.keep_goal_right_2_sprite.setScale(delta_x, delta_y)
        this.keep_goal_right_2_sprite.visible=false;


        const keep_goal_right_3_Config = {
            key: 'k_right_3',
            frames: 'keep_goal_right_3',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(keep_goal_right_3_Config);
        this.keep_goal_right_3_sprite=this.add.sprite(560*delta_x, 370*delta_y, 'keep_goal_right_3', 'k_right3_');
        this.keep_goal_right_3_sprite.setScale(delta_x, delta_y)
        this.keep_goal_right_3_sprite.visible=false;


        const keep_goal_right_4_Config = {
            key: 'k_right_4',
            frames: 'keep_goal_right_4',
            frameRate: 24,
            repeat: -2
        };
        this.anims.create(keep_goal_right_4_Config);
        this.keep_goal_right_4_sprite=this.add.sprite(475*delta_x, 355*delta_y, 'keep_goal_right_4', 'k_right4_');
        this.keep_goal_right_4_sprite.setScale(delta_x, delta_y)
        this.keep_goal_right_4_sprite.visible=false;



        const animConfig = {
            key: 'walk',
            frames: 'ball_rotation',
            frameRate: 10,
            repeat: -1
        };
        this.anims.create(animConfig);

        this.ball_rotation_sprite = this.physics.add.sprite(605*delta_x, 530*delta_y, 'ball_rotation', 'rotation_');
        this.ball_rotation_sprite.setScale(delta_x, delta_y)
        this.ball_rotation_sprite.play('walk');
        this.ball_rotation_sprite.visible=false;


        const ball_collision_keeper_config = {
            key: 'ball_keeper',
            frames: 'ball_collision_keeper',
            frameRate: 10,
            repeat: 6
        };
        this.anims.create(ball_collision_keeper_config);

        this.ball_collision_keeper_sprite = this.physics.add.sprite(605*delta_x, 530*delta_y, 'ball_collision_keeper', 'rotation_');
        this.ball_collision_keeper_sprite.setScale(delta_x, delta_y)
        this.ball_collision_keeper_sprite.play('ball_keeper');
        this.ball_collision_keeper_sprite.visible=false;


        const soccer_kick_left_Config = {
            key: 'kick_left',
            frames: 'soccer_kick_left',
            frameRate: 20,
            repeat: -2
        };
        this.anims.create(soccer_kick_left_Config);
        this.soccer_kick_left_sprite=this.add.sprite(885*delta_x, 250*delta_y, 'soccer_kick_left', 'kick_left_');
        this.soccer_kick_left_sprite.setScale(delta_x, delta_y)
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
        this.soccer_kick_right_sprite.setScale(delta_x, delta_y)
        this.soccer_kick_right_sprite.visible=false;

        this.bg_banthang = this.add.image(121*delta_x,75*delta_y,'bg_banthang');
        this.bg_banthang.setScale(delta_x, delta_y);
        this.btn_suttudong = this.add.image(135*delta_x,620*delta_y,'btn_suttudong')
        this.btn_suttudong.setScale(delta_x,delta_y)
        this.bg_bangxephang = this.add.image(132*delta_x,360*delta_y,'bg_bangxephang')
        this.bg_bangxephang.setScale(delta_x, delta_y);
        this.bg_giaithuong_duatop = this.add.image(600*delta_x,125*delta_y,'bg_giaithuong_duatop')
        this.bg_giaithuong_duatop.setScale(delta_x,delta_y)
        this.bg_taikhoan = this.add.image(1078*delta_x,42*delta_y,'bg_taikhoan')
        this.bg_taikhoan.setScale(delta_x,delta_y)
        this.bg_title_duatop = this.add.image(600*delta_x,34*delta_y,'bg_title_duatop')
        this.bg_title_duatop.setScale(delta_x, delta_y);
        this.opt_suttudong = this.add.image(60*delta_x,620*delta_y,'opt_suttudong');
        this.opt_suttudong.setScale(delta_x,delta_y)
        this.opt_suttudong_checked = this.add.image(60*delta_x,620*delta_y,'opt_suttudong_checked');
        this.opt_suttudong_checked.setScale(delta_x,delta_y)
        this.opt_suttudong_checked.visible=false;


        this.txt_banthang = this.add.text(120*delta_x,  90*delta_y, '00', { font: `${40*delta_x}px Arial`, fill: "#ffffff" });
        this.txt_suttudong = this.add.text(35*3,  50*3, "Hellooooooo", { 
          font: "9px Arial", 
          fill: "#ffffff" 
        });

        this.txt_suttudong1 = this.add.text(35*2,  100*2, "Worlddddd", { 
          font: "9px Arial", 
          fill: "#ffffff" 
        });

        this.helloWorld = this.add.text(
          300, 
          180, 
          "Hello World", { 
            font: "9px Arial", 
            fill: "#ffffff" 
          }
      );
        // this.txt_title = this.add.text(520*delta_x,  10*delta_y, "ĐUA TOP", { font: `${40*delta_x}px Arial`, fill: "#ffffff", align:'center' });
        // this.txt_time = this.add.text(530*delta_x,  75*delta_y, "Còn: 00h00p00", { font: `${16*delta_x}px Arial`, fill: "#ffffff", align:'center' });
        // this.txt_giaithuong = this.add.text(440*delta_x,  115*delta_y, `Giải thưởng:`, { font: `${17*delta_x}px Arial`, fill: "#ffffff", align:"center", fixedWidth: 333*delta_x });
        // this.txt_acc = this.add.text(975*delta_x,  15*delta_y, `Chào: ${this.userName(user.nick_name)}`, { font: `${18*delta_x}px Arial`, fill: "#ffffff", align:'center' });
        // // this.txt_thoat = this.add.text(1130*delta_x,  15*delta_y, '(Thoát)', { font: `${18*delta_x}px Arial`, fill: "#ffc107", align:'center' });
        // this.icon_home=this.add.image(1165*delta_x,40*delta_y,'icon_home');
        // this.icon_home.setScale(delta_x,delta_x)
        // this.txt_points = this.add.text(975*delta_x,  45*delta_y, `Điểm: 00`, { font: `${18*delta_x}px Arial`, fill: "#ffffff", align:'center' });
        // this.txt_titleRanking = this.add.text(30*delta_x,  290*delta_y, 'TÀI KHOẢN            BÀN THẮNG', { font: `${15*delta_x}px Arial bold`, fill: "#ffffff" });
      
        // this.txt_ranking_acc = this.add.text(30*delta_x,  315*delta_y, '', { font: `${18*delta_x}px Tahoma`, color: "#ffffff" });
        // this.txt_ranking_point = this.add.text(180*delta_x,  315*delta_y, '', { font: `${18*delta_x}px Tahoma`, color: "#ffffff" });
        this.btn_std = this.add.image(135,620,'btn_std')
        this.btn_std.setScale(delta_x,delta_y)
        this.btn_std1 = this.add.image(135,620,'btn_std')
        this.btn_std1.setScale(delta_x,delta_y)
        this.btn_std1.visible=false;

        
    
      // this.helloWorld.setOrigin(0.5);
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
              data.modeId=1;
              data.roomId=info_seesion.id;
              data.rakingLimit=5
              var header = {
                  headers: {
                      "Content-Type": "application/json",
                      "Authorization": `Bearer ${user.access_token}`,
                      "dataType":"json"
                  }
              }
              axios.post(Ultilities.base_url() +'/lobby/api/v1/race/connect', data, header).then(function (response) {
                  if(response.data !==undefined){
                      if(response.data.code>=0){
                          data_game=response.data.data;
                          if(_this.checkTimeSession(data_game)){
                             
                              _rankings=data_game.rankings;
                              _rewards=data_game.rewards;
                              number_goal=data_game.summary.winCount;
                              _user=data_game.user;
                              _room=data_game.room;
                              _timeServer=data_game.timeServer;
                              _deltaTime=Date.now() -_timeServer
                              _this.timeRemain(data_game.room.endTime)
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
      if(user!==null){
          var data= {...info}
          data.userId= user.uid;
          data.gameId=1;
          data.serverId=1;
          data.modeId=1;
          data.roomId=info_seesion.id;
          data.rakingLimit=5
          var header = {
              headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${user.access_token}`,
                  "dataType":"json"
              }
          }
          axios.post(Ultilities.base_url() +'/lobby/api/v1/race/state', data, header).then(function (response) {
              if(response.data !==undefined){
                  if(response.data.code>=0){
                      var data=response.data.data;
                      _rankings=data.rankings;
                      _user=data.user;
                     
                  }else{
                      window.location.replace('/')
                  }
              }else{
                  window.location.replace('/')
              }
          }).catch(function (error) {
              // window.location.replace('/')
          })
      }else{
          window.location.replace('/')
      }
  }
}