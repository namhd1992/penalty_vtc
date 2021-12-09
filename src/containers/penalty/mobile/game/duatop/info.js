import Phaser from "phaser";

import test from '../../../assert/background.png';

var width = window.innerWidth;
var height = window.innerHeight;
var delta_x=width/1200;
var delta_y=height/675;
export default class Info extends Phaser.Scene{
  constructor() {
    super({ key: "Info" });
  }

    preload(){
      this.load.image('test', test);
    }

    create(){
      this.test=this.add.image(width/2,height/2,'test')
      this.test.setScale(delta_x, delta_y)
    }

    update(){
        // this.helloWorld.angle += 1;
    }
}