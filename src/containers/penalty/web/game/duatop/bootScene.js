import Phaser from "phaser";
import Game from './game';
import Info from './info';

const SCENES = {
    FIRST: 'Info',
    SECOND: 'Game'
  }
export default class BootScene extends Phaser.Scene {
    create() {
      // this.scene.add(SCENES.FIRST, Info, true);
      this.scene.add(SCENES.SECOND, Game, false);
  
      this.scene.run(SCENES.SECOND);
    }
  }